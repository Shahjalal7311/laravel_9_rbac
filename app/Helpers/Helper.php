<?php

use App\Models\Admin;
use App\SmExam;
use App\SmClass;
use App\SmStaff;
use App\SmStyle;
use App\SmParent;
use App\SmStudent;
use App\SmSubject;
use App\SmExamType;
use App\SmLanguage;
use App\SmAddIncome;
use App\SmExamSetup;
use App\SmMarkStore;
use App\SmsTemplate;
use App\SmDateFormat;
use App\SmFeesMaster;
use App\SmMarksGrade;
use App\SmSmsGateway;
use App\SmFeesPayment;
use App\SmResultStore;
use GuzzleHttp\Client;
use Mockery\Undefined;
use App\SmAcademicYear;
use App\SmClassSection;
use App\SmClassTeacher;
use App\SmEmailSetting;
use App\SmExamSchedule;
use App\SmNotification;
use App\SmAssignSubject;
use App\SmExamAttendance;
use App\SmPaymentMethhod;
use App\SmGeneralSettings;
use App\InfixModuleManager;
use App\Models\FeesInvoice;
use Illuminate\Support\Str;
use App\CustomResultSetting;
use App\Models\SchoolModule;
use App\Models\StudentRecord;
use App\SmExamAttendanceChild;
use Illuminate\Support\Carbon;
use App\SmClassOptionalSubject;
use App\Models\CustomSmsSetting;
use App\SmOptionalSubjectAssign;
use App\SmPaymentGatewaySetting;
use App\Models\ExamMeritPosition;
use App\Models\DirectFeesReminder;
use Illuminate\Support\Facades\DB;
use App\Scopes\AcademicSchoolScope;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Nwidart\Modules\Facades\Module;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use AfricasTalking\SDK\AfricasTalking;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Modules\Lms\Entities\CourseSetting;
use App\Models\SmStudentRegistrationField;
use App\Models\DirectFeesInstallmentAssign;
use Modules\MenuManage\Entities\MenuManage;
use Modules\University\Entities\UnAcademicYear;
use Modules\Fees\Entities\FmFeesInvoiceSettings;
use Modules\University\Entities\UnFeesInstallmentAssign;
use Modules\ParentRegistration\Entities\SmStudentRegistration;

if (!function_exists('youtubeVideo')) {
    function youtubeVideo($video_url)
    {
        if (Str::contains($video_url, 'youtu.be')) {
            $url = explode("/", $video_url);
            return 'https://www.youtube.com/watch?v=' . $url[3];
        }

        if (Str::contains($video_url, '&')) {
            return substr($video_url, 0, strpos($video_url, "&"));
        } else {
            return $video_url;
        }
    }
}
function showFileName($data)
{
    $name = explode('/', $data);
    $number = array_key_last($name);
    return $name[$number];
}

function getValueByString($student_id, $string, $extra = null)
{
    $student = SmStudent::find($student_id);
    if ($extra != null) {
        return $student->$string->$extra;
    } else {
        return $student->$string;
    }
}

function getParentName($student_id, $string, $extra = null)
{
    $student = SmStudent::find($student_id);
    $parent = SmParent::where('id', $student->parent_id)->first();
    if ($extra != null) {
        return $student->$parent->$extra;
    } else {
        return $parent->fathers_name;
    }
}

if (!function_exists('dateConvert')) {

    function dateConvert($input_date)
    {
        try {
            $system_date_format = session()->get('system_date_format');
            if (empty($system_date_format)) {
                $date_format_id = SmGeneralSettings::where('id', 1)->first(['date_format_id'])->date_format_id;
                $system_date_format = SmDateFormat::where('id', $date_format_id)->first(['format'])->format;
                session()->put('system_date_format', $system_date_format);
            }

            return \Carbon\Carbon::parse($input_date)->format($system_date_format);
        } catch (\Throwable $th) {
            return $input_date;
        }
    }
}

if (!function_exists('dateTimeConvert')) {

    function dateTimeConvert($input_date_time)
    {
        try {
            $system_date_format = session()->get('system_date_format') . ' g:i A';
            if (empty($system_date_format)) {
                $date_format_id = SmGeneralSettings::where('id', 1)->first(['date_format_id'])->date_format_id;
                $system_date_format = SmDateFormat::where('id', $date_format_id)->first(['format'])->format . ' g:i A';
                session()->put('system_date_format', $system_date_format);
            }
            return \Carbon\Carbon::parse($input_date_time)->format($system_date_format);
        } catch (\Throwable $th) {
            return $input_date_time;
        }
    }
}

if (!function_exists('getAcademicId')) {
    function getAcademicId()
    {

        if (session()->has('sessionId')) {
            return session()->get('sessionId');
        } else {
            $session_id = generalSetting()->session_id;
            if (!$session_id) {
                $session_id = SmAcademicYear::where('school_id', Auth::user()->school_id)->where('active_status', 1)->first()->id;
            }
            session()->put('sessionId', $session_id);
            return session()->get('sessionId');
        }
    }
}

if (!function_exists('timeZone')) {
    function timeZone()
    {
        $time_zone_setup = session()->get('time_zone_setup');
        if (is_null($time_zone_setup)) {
            $time_zone = SmGeneralSettings::join('sm_time_zones', 'sm_time_zones.id', '=', 'sm_general_settings.time_zone_id')
                ->where('school_id', 1)->first('time_zone');
            session()->put('time_zone_setup', $time_zone);
            $time_zone_setup = session()->get('time_zone_setup');
        }
        return $time_zone_setup->time_zone;
    }
}
if (!function_exists('schoolTimeZone')) {
    function schoolTimeZone()
    {
        $time_zone_setup = session()->get('time_zone_setup');
        if (is_null($time_zone_setup)) {
            $time_zone = SmGeneralSettings::join('sm_time_zones', 'sm_time_zones.id', '=', 'sm_general_settings.time_zone_id')
                ->where('school_id', Auth::user()->school_id)->first('time_zone');
            session()->put('time_zone_setup', $time_zone);
            $time_zone_setup = session()->get('time_zone_setup');
        }
        return $time_zone_setup->time_zone;
    }
}

if (!function_exists('getUserLanguage')) {
    function getUserLanguage()
    {
        if (Auth::check()) {
            return userLanguage();
        } else {

            $school_id = app()->bound('school') ? app('school')->id : 1;
            $user = Admin::where('role_id', 1)->where('school_id', $school_id)->first();

            return $user ? $user->language : 'en';
        }
    }
}

if (!function_exists('checkAdmin')) {
    function checkAdmin()
    {
        if (Auth::check()) {
            if (Auth::user()->is_administrator == "yes") {
                return true;
            } elseif (Auth::user()->is_saas == 1) {
                return true;
            } else {
                return false;
            }
        }
    }
}

if (!function_exists('getFileName')) {
    function getFileName($data)
    {
        if ($data) {
            $name = explode('/', $data);
            return $name[4] ?? $name[0];
        } else {
            return '';
        }
    }
}


// Get File Path From HELPER

if (!function_exists('getFilePath3')) {
    function getFilePath3($data)
    {

        if ($data) {
            $name = explode('/', $data);
            return $name[3] ?? $name[0];
        } else {
            return '';
        }
    }
}

if (!function_exists('getFilePath4')) {
    function getFilePath4($data)
    {
        if ($data) {
            $name = explode('/', $data);
            if ($name[4]) {
                return $name[3];
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
}

if (!function_exists('showPicName')) {
    function showPicName($data)
    {
        try {
            if ($data) {
                $name = explode('/', $data);
                if ($name[4]) {
                    return $name[4];
                } else {
                    return '';
                }
            } else {
                return '';
            }
        } catch (\Exception $e) {
            return null;
        }
    }
}

if (!function_exists('showJoiningLetter')) {
    function showJoiningLetter($data)
    {
        $name = explode('/', $data);
        return $name[3];
    }
}

if (!function_exists('showResume')) {
    function showResume($data)
    {
        $name = explode('/', $data);
        return $name[3];
    }
}

if (!function_exists('showDocument')) {
    function showDocument($data)
    {
        @$name = explode('/', @$data);
        if (!empty(@$name[4])) {

            return $name[4];
        } else {
            return '';
        }
    }
}
// end get file path from helpers

if (!function_exists('termResult')) {
    function termResult($exam_id, $class_id, $section_id, $student_id, $subject_count)
    {
        try {
            $assigned_subject = SmAssignSubject::where('class_id', $class_id)->where('section_id', $section_id)->get();
            $mark_store = DB::table('sm_mark_stores')->where([['class_id', $class_id], ['section_id', $section_id], ['exam_term_id', $exam_id], ['student_id', $student_id]])->first();
            $subject_marks = [];
            $subject_gpas = [];
            foreach ($assigned_subject as $subject) {
                $subject_mark = DB::table('sm_mark_stores')->where([['class_id', $class_id], ['section_id', $section_id], ['exam_term_id', $exam_id], ['student_id', $student_id], ['subject_id', $subject->subject_id]])->first();
                $custom_result = new CustomResultSetting; // correct

                $subject_gpa = $custom_result->getGpa($subject_mark->total_marks);
                // return $subject_mark;
                $subject_marks[$subject->subject_id][0] = $subject_mark->total_marks;
                $subject_marks[$subject->subject_id][1] = $subject_gpa;
                $subject_gpas[$subject->subject_id] = $subject_gpa;
            }
            $total_gpa = array_sum($subject_gpas);
            $term_result = $total_gpa / $subject_count;
            return $term_result;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('getFinalResult')) {
    function getFinalResult($exam_id, $class_id, $section_id, $student_id, $percentage)
    {
        try {
            $system_setting = SmGeneralSettings::where('school_id', auth()->user()->school_id)->first();
            $system_setting = $system_setting->session_id;
            $custom_result_setup = CustomResultSetting::where('academic_year', $system_setting)->first();

            $assigned_subject = SmAssignSubject::where('class_id', $class_id)->where('section_id', $section_id)->get();

            $all_subjects_gpa = [];
            foreach ($assigned_subject as $subject) {
                $custom_result = new CustomResultSetting;
                $subject_gpa = $custom_result->getSubjectGpa($exam_id, $class_id, $section_id, $student_id, $subject->subject_id);
                $all_subjects_gpa[] = $subject_gpa[$subject->subject_id][1];
            }
            $percentage = $custom_result_setup->$percentage;
            $term_gpa = array_sum($all_subjects_gpa) / $assigned_subject->count();
            $percentage = number_format((float) $percentage, 2, '.', '');
            $new_width = ($percentage / 100) * $term_gpa;
            return $new_width;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('getSubjectGpa')) {
    function getSubjectGpa($class_id, $section_id, $exam_id, $student_id, $subject)
    {
        try {
            $subject_marks = [];
            $subject_mark = DB::table('sm_mark_stores')->where('student_id', $student_id)->where('exam_term_id', '=', $exam_id)->first();

            $custom_result = new CustomResultSetting;
            $subject_gpa = $custom_result->getGpa($subject_mark->total_marks);

            $subject_marks[$subject][0] = $subject_mark->total_marks;
            $subject_marks[$subject][1] = $subject_gpa;

            // return $subject_mark->total_marks;
            return $subject_marks;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('getGrade')) {
    function getGrade($marks, $description =null)
    {
        try {
            if($description){
                $marks_gpa = DB::table('sm_marks_grades')->where('percent_from', '<=', $marks)->where('percent_upto', '>=', $marks)
                ->where('academic_id', getAcademicId())->first();
            return $marks_gpa->description;
            }
            else{
                $marks_gpa = DB::table('sm_marks_grades')->where('percent_from', '<=', $marks)->where('percent_upto', '>=', $marks)
                ->where('academic_id', getAcademicId())->first();
            return $marks_gpa->grade_name;
            }

        } catch (\Exception $e) {
            return 'Undefined';
        }
    }
}

if (!function_exists('getNumberOfPart')) {
    function getNumberOfPart($subject_id, $class_id, $section_id, $exam_term_id)
    {
        try {
            $results = SmExamSetup::where([
                ['class_id', $class_id],
                ['subject_id', $subject_id],
                ['section_id', $section_id],
                ['exam_term_id', $exam_term_id],
            ])->get();
            return $results;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('GetResultBySubjectId')) {
    function GetResultBySubjectId($class_id, $section_id, $subject_id, $exam_id, $student_id)
    {

        try {
            $data = SmMarkStore::where([
                ['class_id', $class_id],
                ['section_id', $section_id],
                ['exam_term_id', $exam_id],
                ['student_id', $student_id],
                ['subject_id', $subject_id],
            ])->get();
            return $data;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('GetFinalResultBySubjectId')) {
    function GetFinalResultBySubjectId($class_id, $section_id, $subject_id, $exam_id, $student_id)
    {

        try {
            $data = SmResultStore::where([
                ['class_id', $class_id],
                ['section_id', $section_id],
                ['exam_type_id', $exam_id],
                ['student_id', $student_id],
                ['subject_id', $subject_id],
            ])->first();

            return $data;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('markGpa')) {
    function markGpa($marks)
    {
        $mark = SmMarksGrade::where([
            ['percent_from', '<=', floor($marks)],
            ['percent_upto', '>=', floor($marks)]
        ])
            ->first();
        if ($mark) {
            return $mark;
        } else {
            $fail_grade = SmMarksGrade::min('gpa');
            $mark = SmMarksGrade::where('gpa', $fail_grade)->first();
            return $mark;
        }
    }
}
if (!function_exists('getGrade')) {
    function getGrade($grade)
    {
        $mark = SmMarksGrade::where('from', '<=', $grade)->where('up', '>=', $grade)->where('academic_id', getAcademicId())->first();
        if ($mark) {
            return $mark;
        } else {
            $fail_grade = SmMarksGrade::where('active_status', 1)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->min('gpa');

            $mark = SmMarksGrade::where('active_status', 1)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->where('gpa', $fail_grade)
                ->first();

            return $mark;
        }
    }
}

if (!function_exists('is_optional_subject')) {
    function is_optional_subject($student_id, $subject_id)
    {
        try {
            $result = SmOptionalSubjectAssign::where('student_id', $student_id)->where('subject_id', $subject_id)->first();
            if ($result) {
                return true;
            } else {
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('getMarksOfPart')) {
    function getMarksOfPart($student_id, $subject_id, $class_id, $section_id, $exam_term_id)
    {
        try {
            $results = SmMarkStore::where([
                ['student_id', $student_id],
                ['class_id', $class_id],
                ['subject_id', $subject_id],
                ['section_id', $section_id],
                ['exam_term_id', $exam_term_id],
            ])->get();
            return $results;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('getExamResult')) {
    function getExamResult($exam_id, $student)
    {
        $eligible_subjects = SmAssignSubject::where('class_id', $student->class_id)->where('section_id', $student->section_id)->where('academic_id', getAcademicId())
            ->where('school_id', Auth::user()->school_id)->get();

        foreach ($eligible_subjects as $subject) {

            $getMark = SmResultStore::where([
                ['exam_type_id', $exam_id],
                ['class_id', $student->class_id],
                ['section_id', $student->section_id],
                ['student_id', $student->id],
                ['subject_id', $subject->subject_id],
            ])->first();

            if ($getMark == "") {
                return false;
            }

            $result = SmResultStore::where([
                ['exam_type_id', $exam_id],
                ['class_id', $student->class_id],
                ['section_id', $student->section_id],
                ['student_id', $student->id],
            ])->get();

            return $result;
        }
    }
}

if (!function_exists('teacherAssignedClass')) {
    function teacherAssignedClass()
    {
        try {
            $class_id = [];
            $role_id = Auth::user()->role_id;
            if ($role_id == 4) {
                $classes = SmClassTeacher::where('teacher_id', Auth::user()->id)->get(['id']);
                foreach ($classes as $class) {
                    $class_id[] = $class->module_id;
                }
            } else {

                $general_setting = SmGeneralSettings::where('school_id', auth()->user()->school_id)->first();
                return @$general_setting->school_name;
            }
        } catch (\Exception $e) {
            return $class_id = [];
        }
    }
}

if (!function_exists('getValueByStringTestReset')) {
    function getValueByStringTestReset($data, $str)
    {
        if ($str == 'school_name') {

            $general_setting = SmGeneralSettings::where('school_id', auth()->user()->school_id)->first();
            return @$general_setting->school_name;
        } elseif ($str == 'name') {
            $user = Admin::where('email', $data['email'])->first();
            return @$user->full_name;
        }
    }
}

if (!function_exists('subjectPosition')) {
    function subjectPosition($subject_id, $class_id, $custom_result)
    {

        $students = SmStudent::where('class_id', $class_id)->get();

        $subject_mark_array = [];
        foreach ($students as $student) {
            $subject_marks = 0;

            $first_exam_mark = SmMarkStore::where('student_id', $student->id)->where('class_id', $class_id)->where('subject_id', $subject_id)->where('exam_term_id', $custom_result->exam_term_id1)->sum('total_marks');

            $subject_marks = $subject_marks + $first_exam_mark / 100 * $custom_result->percentage1;

            $second_exam_mark = SmMarkStore::where('student_id', $student->id)->where('class_id', $class_id)->where('subject_id', $subject_id)->where('exam_term_id', $custom_result->exam_term_id2)->sum('total_marks');

            $subject_marks = $subject_marks + $second_exam_mark / 100 * $custom_result->percentage2;

            $third_exam_mark = SmMarkStore::where('student_id', $student->id)->where('class_id', $class_id)->where('subject_id', $subject_id)->where('exam_term_id', $custom_result->exam_term_id3)->sum('total_marks');

            $subject_marks = $subject_marks + $third_exam_mark / 100 * $custom_result->percentage3;

            $subject_mark_array[] = round($subject_marks);
        }

        arsort($subject_mark_array);

        $position_array = [];
        foreach ($subject_mark_array as $position_mark) {
            $position_array[] = $position_mark;
        }

        return $position_array;
    }
}

if (!function_exists('getValueByStringDuesFees')) {
    function getValueByStringDuesFees($student_detail, $str, $fees_info)
    {

        if ($str == 'student_name') {

            return @$student_detail->full_name;
        } elseif ($str == 'parent_name') {

            $parent_info = SmParent::find($student_detail->parent_id);
            return @$parent_info->fathers_name;
        } elseif ($str == 'due_amount') {

            return @$fees_info['dues_fees'];
        } elseif ($str == 'due_date') {

            $fees_master = SmFeesMaster::find($fees_info['fees_master']);
            return @$fees_master->date;
        } elseif ($str == 'school_name') {

            return @Auth::user()->school->school_name;
        } elseif ($str == 'fees_name') {

            $fees_master = SmFeesMaster::find($fees_info['fees_master']);
            return $fees_master->feesTypes->name;
        }
    }
}
if (!function_exists('assignedRoutineSubject')) {

    function assignedRoutineSubject($class_id, $section_id, $exam_id, $subject_id)
    {

        try {
            return SmExamSchedule::where('class_id', $class_id)->where('section_id', $section_id)->where('exam_term_id', $exam_id)->where('subject_id', $subject_id)->first();
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('assignedRoutine')) {

    function assignedRoutine($class_id, $section_id, $exam_id, $subject_id, $exam_period_id)
    {
        try {
            return SmExamSchedule::where('class_id', $class_id)->where('section_id', $section_id)->where('exam_term_id', $exam_id)->where('subject_id', $subject_id)
                ->where('exam_period_id', $exam_period_id)->first();
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('is_absent_check')) {

    function is_absent_check($exam_id, $class_id, $section_id, $subject_id, $student_id)
    {
        try {
            $exam_attendance = SmExamAttendance::where('exam_id', $exam_id)->where('class_id', $class_id)->where('section_id', $section_id)->where('subject_id', $subject_id)->first();
            $exam_attendance_child = SmExamAttendanceChild::where('exam_attendance_id', $exam_attendance->id)->where('student_id', $student_id)->first();
            return $exam_attendance_child;
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('feesPayment')) {
    function feesPayment($type_id, $student_id)
    {
        try {
            return SmFeesPayment::where('active_status', 1)->where('fees_type_id', $type_id)->where('student_id', $student_id)->get();
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}

if (!function_exists('generalSetting')) {
    function generalSetting()
    {
      
        //        session()->forget('generalSetting');
        if (session()->has('generalSetting')) {
            return session()->get('generalSetting');
        } else {
            if (app()->bound('school')) {
                $generalSetting = SmGeneralSettings::where('school_id', app('school')->id)->first();
            } else {
                $generalSetting = Auth::check() ? SmGeneralSettings::where('school_id', Auth::user()->school_id)->first() : SmGeneralSettings::first();
            }
        }

        session()->put('generalSetting', $generalSetting);
       
        return session()->get('generalSetting');
    }
}





if (!function_exists('systemDateFormat')) {
    function systemDateFormat()
    {
        if (session()->has('system_date_format')) {
            return session()->get('system_date_format');
        } else {
            $system_date_format = SmDateFormat::find(DB::table('sm_general_settings')->first()->date_format_id);
            session()->put('system_date_foramt', $system_date_format);

            return session()->get('system_date_foramt');
        }
    }
}

if (!function_exists('dashboardBackground')) {
    function dashboardBackground()
    {
        return app('dashboard_bg');
    }
}


if (!function_exists('textDirection')) {
    function textDirection()
    {


        if (session()->has('text_direction')) {
            return session()->get('text_direction');
        } else {
            $ttl_rtl = Auth::user()->rtl_ltl;
            session()->put('text_direction', $ttl_rtl);
            // return $ttl_rtl;
            return session()->get('text_direction');
        }
    }
}
if (!function_exists('userRtlLtl')) {
    function userRtlLtl()
    {
        // return 1;

        if (session()->has('user_text_direction')) {
            return session()->get('user_text_direction');
        } else {
            $school_id = app()->bound('school') ? app('school')->id : 1;
            $user = Admin::where('role_id', 1)->where('school_id', $school_id)->first();

            $ttl_rtl = $user ? $user->rtl_ltl : 2;
            session()->put('user_text_direction', $ttl_rtl);

            return session()->get('user_text_direction');
        }
    }
}

if (!function_exists('userLanguage')) {
    function userLanguage()
    {

        if (session()->has('user_language')) {
            return session()->get('user_language');
        } else {
            $language = Auth::user()->language;
            session()->put('user_language', $language);

            return session()->get('user_language');
        }
    }
}

if (!function_exists('schoolConfig')) {
    function schoolConfig()
    {
        return app('school_info');
    }
}
if (!function_exists('selectedLanguage')) {
    function selectedLanguage()
    {
        if (session()->has('selected_language')) {
            return session()->get('selected_language');
        } else {
            $selected_language = Auth::check() ? SmGeneralSettings::where('school_id', Auth::user()->school_id)->first() :
                DB::table('sm_general_settings')->where('school_id', 1)->first();
            session()->put('selected_language', $selected_language);

            return session()->get('selected_language');
        }
    }
}

if (!function_exists('profile')) {
    function profile()
    {
        return auth()->user()->profile;
    }
}

if (!function_exists('getSession')) {
    function getSession()
    {
        if (session()->has('session')) {
            return session()->get('session');
        } else {
            $selected_language = Auth::check() ? SmGeneralSettings::where('school_id', Auth::user()->school_id)->first() :
                DB::table('sm_general_settings')->where('school_id', 1)->first();
            $session = DB::table('sm_academic_years')->where('id', $selected_language->session_id)->first();
            session()->put('session', $session);

            return session()->get('session');
        }
    }
}

if (!function_exists('systemLanguage')) {
    function systemLanguage()
    {
        session()->forget('systemLanguage');
        if (session()->has('systemLanguage')) {
            return session()->get('systemLanguage');
        } else {
            $systemLanguage = SmLanguage::where('school_id', auth()->user()->school_id)->get();
            session()->put('systemLanguage', $systemLanguage);
            return session()->get('systemLanguage');
        }
    }
}

if (!function_exists('academicYears')) {
    function academicYears()
    {
        // session()->forget('academic_years');
        if (session()->has('academic_years')) {
            return session()->get('academic_years');
        } else {
            $academic_years = Auth::check() ? SmAcademicYear::where('active_status', 1)->where('school_id', Auth::user()->school_id)->get() : '';
            session()->put('academic_years', $academic_years);
            return session()->get('academic_years');
        }
    }
}

if (!function_exists('subjectFullMark')) {
    function subjectFullMark($examtype, $subject, $class_id, $section_id)
    {
        try {
          
            $full_mark = 0;
            $full_mark = SmExam::query();
            $full_mark->where('school_id', Auth::user()->school_id)->where('exam_type_id', $examtype);
            $full_mark =  $full_mark->where('subject_id', $subject);
            $full_mark = $full_mark->first('exam_mark')->exam_mark;
             
            return $full_mark;
        } catch (\Exception $e) {
            return 0;
        }
    }
}

if (!function_exists('subject100PercentMark')) {
    function subject100PercentMark()
    {
        try {
            return 100;
        } catch (\Exception $e) {
            return 0;
        }
    }
}

if (!function_exists('teacherAccess')) {
    function teacherAccess()
    {
        try {
            $user = Auth::user();
            if ($user->role_id == 4) {
                return true;
            } else {
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('subjectPercentageMark')) {
    function subjectPercentageMark($obtained_mark, $full_nark)
    {
        try {
            
            $percent = ($obtained_mark / $full_nark) * 100;
            return $percent;
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('termWiseFullMark')) {
    function termWiseFullMark($type_ids, $student_id)
    {
        try {
            $average_gpa = 0;
            foreach ($type_ids as $type_id) {
                $total_gpa = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $total_subject = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->count('subject_id');

                $percentage = CustomResultSetting::where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->first('exam_percentage')->exam_percentage;

                    if($total_subject){
                        $average_gpa += ($total_gpa / $total_subject) * ($percentage / 100);
                    }
            }
            return $average_gpa;
        } catch (\Exception $e) {
            return false;
        }
    }
}



if (!function_exists('termWiseGpa')) {
    function termWiseGpa($type_id, $student_id, $with_optional_subject_mark = null)
    {
        try {
            $average_gpa = 0;
            if ($with_optional_subject_mark == null) {
                $total_gpa = SmResultStore::select('total_gpa_point')->where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $total_subject = SmResultStore::select('subject_id')->where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->count('subject_id');

                $percentage = CustomResultSetting::where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->first('exam_percentage')->exam_percentage;

                    if($total_subject){
                        $average_gpa += ($total_gpa / $total_subject) * ($percentage / 100);
                    }
                return $average_gpa;
            } elseif ($with_optional_subject_mark != null) {

                $percentage = CustomResultSetting::where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->first('exam_percentage')->exam_percentage;

                $average_gpa += $with_optional_subject_mark * ($percentage / 100);
                return $average_gpa;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}



if (!function_exists('termWiseTotalMark')) {
    function termWiseTotalMark($type_id, $student_id, $optional_subject = null)
    {
        try {
            if ($optional_subject == null) {
                $average_gpa = 0;
                $total_gpa = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $total_subject = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->count('subject_id');

                    if($total_subject){
                        $average_gpa += $total_gpa / $total_subject;
                    }
                

                return $average_gpa;
            } elseif ($optional_subject != null) {
                $average_gpa = 0;
                $optional_subject_extra_gpa = 0;

                $class_id = StudentRecord::find($student_id)->class_id;
                $optional_subject_above = SmClassOptionalSubject::where('class_id', $class_id)
                    ->where('school_id', Auth::user()->school_id)
                    ->where('academic_id', getAcademicId())
                    ->first('gpa_above')->gpa_above;

                $subject_ids = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->get('subject_id');

                $optional_subject_id = SmOptionalSubjectAssign::whereIn('subject_id', $subject_ids)
                    ->where('student_id', $student_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->first('subject_id')->subject_id;

                $without_optional_subject_gpa = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('subject_id', '!=', $optional_subject_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $optional_subject_gpa = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('subject_id', $optional_subject_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $maxgpa = SmMarksGrade::where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->max('gpa');

                if ($optional_subject_gpa > $optional_subject_above) {
                    $optional_subject_extra_gpa = $optional_subject_gpa - $optional_subject_above;
                }

                $with_optional_subject_extra_gpa = $without_optional_subject_gpa + $optional_subject_extra_gpa;

                $final_gpa_with_optional_subject = $with_optional_subject_extra_gpa / (count($subject_ids) - 1);

                if ($maxgpa < $final_gpa_with_optional_subject) {
                    return $maxgpa;
                } else {
                    return $final_gpa_with_optional_subject;
                }
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}


if (!function_exists('optionalSubjectFullMark')) {
    function optionalSubjectFullMark($type_id, $student_id, $above_gpa, $purpose = null)
    {
        try {
            $subject_ids = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->get('subject_id');

            $additional_subject_id = SmOptionalSubjectAssign::whereIn('subject_id', $subject_ids)
                ->where('record_id', $student_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->first('subject_id')->subject_id;

            if ($purpose == "optional_sub_gpa") {
                $total_mark = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('subject_id', $additional_subject_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                return $total_mark;
            } elseif ($purpose == "with_optional_sub_gpa") {
                $total_mark = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('subject_id', $additional_subject_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->sum('total_gpa_point');

                $exam_type_id = SmResultStore::where('student_record_id', $student_id)
                    ->where('exam_type_id', $type_id)
                    ->where('subject_id', $additional_subject_id)
                    ->where('academic_id', getAcademicId())
                    ->where('school_id', Auth::user()->school_id)
                    ->count('exam_type_id');

                $total = ($total_mark - $above_gpa) * $exam_type_id;
                return $total;
            }
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('termWiseAddOptionalMark')) {
    function termWiseAddOptionalMark($type_id, $student_id, $above_gpa)
    {
        try {
            $subject_ids = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->get('subject_id');

            $additional_subject_id = SmOptionalSubjectAssign::whereIn('subject_id', $subject_ids)
                ->where('record_id', $student_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->first('subject_id')->subject_id;

            $additional_subject_mark = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('subject_id', $additional_subject_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->sum('total_gpa_point');

            $additional_single_subject_mark = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('subject_id', $additional_subject_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->first('total_gpa_point')->total_gpa_point;

            $additional_mark_reduction = $additional_single_subject_mark - $above_gpa;
            if ($additional_mark_reduction > 0) {
            }
            $all_subject_mark = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('subject_id', '!=', $additional_subject_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->sum('total_gpa_point');

            $without_additional_total_subject = SmResultStore::where('student_record_id', $student_id)
                ->where('exam_type_id', $type_id)
                ->where('subject_id', '!=', $additional_subject_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->count('subject_id');

            $with_additional_full_gpa = $all_subject_mark + ($additional_subject_mark - $above_gpa);

            $percentage = CustomResultSetting::where('exam_type_id', $type_id)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->first('exam_percentage')->exam_percentage;

            $with_additional_average_gpa = ($with_additional_full_gpa / $without_additional_total_subject) * ($percentage / 100);

            return $with_additional_average_gpa;
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('gradeName')) {
    function gradeName($total_gpa)
    {
        try {
            $grade_name = SmMarksGrade::where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->where('from', '<=', $total_gpa)
                ->where('up', '>=', $total_gpa)
                ->first('grade_name')->grade_name;
            return $grade_name;
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('remarks')) {
    function remarks($total_gpa)
    {
        try {
            $description = SmMarksGrade::where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->where('from', '<=', $total_gpa)
                ->where('up', '>=', $total_gpa)
                ->first('description')->description;
            return $description;
        } catch (\Exception $e) {
            return false;
        }
    }
}

if (!function_exists('subjectHighestMark')) {
    function subjectHighestMark($exam_id, $subject_id, $class_id, $section_id)
    {
        try {
            $highest_mark = SmResultStore::where([['class_id', $class_id], ['exam_type_id', $exam_id], ['section_id', $section_id]])
                ->where('subject_id', $subject_id)
                ->where('school_id', Auth::user()->school_id)
                ->where('academic_id', getAcademicId())
                ->max('total_marks');
            return $highest_mark;
        } catch (\Throwable $e) {
            return false;
        }
    }
}



if (!function_exists('getAllUserForChatBasedOnCondition')) {
    function getAllUserForChatBasedOnCondition()
    {
        try {
            $users = Admin::with('roles')->where('id', '!=', auth()->id())->get();
            if (app('general_settings')->get('chat_can_teacher_chat_with_parents') == 'no') {
                if (auth()->user()->roles->id == 4) {
                    foreach ($users as $index => $user) {
                        $user->roles->id === 3 ? $users->forget($index) : '';
                    }
                }
            }
            return $users;
        } catch (Throwable $e) {
            return false;
        }
    }
}

if (!function_exists('chatOpen')) {
    function chatOpen()
    {
        return app('general_settings')->get('chat_open') == 'yes';
    }
}

// Jitsi Module Start
if (!function_exists('getDomainName')) {
    function getDomainName($url)
    {
        $url_domain = preg_replace("(^https?://)", "", $url);
        $url_domain = preg_replace("(^http?://)", "", $url_domain);
        $url_domain = str_replace("/", "", $url_domain);
        return $url_domain;
    }
}
// Jitsi Module End

if (!function_exists('invitationRequired')) {
    function invitationRequired()
    {
        return app('general_settings')->get('chat_invitation_requirement') == 'required';
    }
}

if (!function_exists('moduleVersion')) {
    function moduleVersion($module_name)
    {
        $dataPath = 'Modules/' . $module_name . '/' . $module_name . '.json';
        $strJsonFileContents = file_get_contents($dataPath);
        $array = json_decode($strJsonFileContents, true);
        $version = $array[$module_name]['versions'][0];
        return $version;
    }
}

if (!function_exists('courseSetting')) {
    function courseSetting()
    {
        return CourseSetting::first();
    }
}

if (!function_exists('fileUpload')) {
    function fileUpload($file, $destination)
    {

        $fileName = "";

        if (!$file) {
            return $fileName;
        }

        $fileName = md5($file->getClientOriginalName() . time()) . "." . $file->getClientOriginalExtension();

        if (!file_exists($destination)) {
            mkdir($destination, 0777, true);
        }
        $file->move($destination, $fileName);
        $fileName = $destination . $fileName;
        return $fileName;
    }
}

if (!function_exists('fileUpdate')) {
    function fileUpdate($databaseFile, $file, $destination)
    {

        $fileName = "";

        if ($file) {
            $fileName = fileUpload($file, $destination);

            if ($databaseFile && file_exists($databaseFile)) {

                unlink($databaseFile);
            }
        } elseif (!$file and $databaseFile) {
            $fileName = $databaseFile;
        }

        return $fileName;
    }
}

if (!function_exists('putEnvConfigration')) {
    function putEnvConfigration($envKey, $envValue)
    {

        $value = '"' . $envValue . '"';
        $envFile = app()->environmentFilePath();
        $str = file_get_contents($envFile);

        $str .= "\n";
        $keyPosition = strpos($str, "{$envKey}=");

        if (is_bool($keyPosition)) {

            $str .= $envKey . '="' . $envValue . '"';
        } else {
            $endOfLinePosition = strpos($str, "\n", $keyPosition);
            $oldLine = substr($str, $keyPosition, $endOfLinePosition - $keyPosition);
            $str = str_replace($oldLine, "{$envKey}={$value}", $str);

            $str = substr($str, 0, -1);
        }

        if (!file_put_contents($envFile, $str)) {
            return false;
        } else {
            return true;
        }
    }
}


if (!function_exists('feesInvoiceSettings')) {
    function feesInvoiceSettings()
    {
        $invoiceSettings = FmFeesInvoiceSettings::where('school_id', Auth::user()->school_id)->first();
        return $invoiceSettings;
    }
}

if (!function_exists('feesInvoiceNumber')) {
    function feesInvoiceNumber($invoice)
    {
        $settings = feesInvoiceSettings();
        $positions = json_decode($settings->invoice_positions);
        $format = '';
        foreach ($positions as $position) {
            if ($format) {
                $format .= '-';
            }
            $format .= $position->id;
        }

        $key = [
            'prefix',
            'admission_no',
            'class',
            'section',
        ];

        $value = [
            $settings->prefix,
            Str::limit($invoice->studentInfo->admission_no, $settings->admission_limit),
            Str::limit($invoice->recordDetail->class->class_name, $settings->class_limit),
            Str::limit($invoice->recordDetail->section->section_name, $settings->section_limit),
            $settings->uniq_id_start + $invoice->id
        ];
        return str_replace($key, $value, $format);
    }
}


// time format 2 hours 30 min
if (!function_exists('timeCalculation')) {
    function timeCalculation($time): string
    {
        $minutes = floor(($time / (60)) % 60);
        $hours = floor(($time / (60 * 60)));

        $hours = ($hours < 10) ? "0" . $hours : $hours;
        $minutes = ($minutes < 10) ? "0" . $minutes : $minutes;
        if ($hours == 0) {
            return $minutes . " minutes ";
        }
        return $hours . " hours " . $minutes . " minutes ";
    }
}

function spn_active_link($route_or_path, $class = 'active')
{
    if (is_array($route_or_path)) {
        foreach ($route_or_path as $route) {
            if (request()->is($route)) {
                return $class;
            }
        }
        return in_array(request()->route()->getName(), $route_or_path) ? $class : false;
    } else {
        if (request()->route()->getName() == $route_or_path) {
            return $class;
        }

        if (request()->is($route_or_path)) {
            return $class;
        }
    }

    return false;
}


function spn_nav_item_open($data, $default_class = 'active')
{
    foreach ($data as $d) {
        if (spn_active_link($d, true)) {
            return $default_class;
        }
    }

    return false;
}



if (!function_exists('addIncome')) {
    function addIncome($payment_method, $name, $amount, $fees_colection_id, $user_id, $request= null)
    {
        $income_head = generalSetting();

        $add_income = new SmAddIncome();
        $add_income->name = $name;
        $add_income->date = date('Y-m-d');
        $add_income->amount = $amount;
        $add_income->fees_collection_id = $fees_colection_id;
        $add_income->active_status = 1;
        $add_income->income_head_id = $income_head->income_head_id;
        $add_income->payment_method_id = 1;
        $add_income->created_by = $user_id;
        $add_income->school_id = auth()->user()->school_id;
        $add_income->academic_id = getAcademicId();
        $result = $add_income->save();

        if ($result) {
            return true;
        } else {
            return false;
        }
    }
}

if (!function_exists('sendNotification')) {
    function sendNotification($message, $url = null, $user_id = null, $role_id = null)
    {
        $notification = new SmNotification;
        $notification->date = date('Y-m-d');
        $notification->message = $message;
        $notification->url = $url;
        $notification->user_id = $user_id;
        $notification->role_id = $role_id;
        $notification->school_id = Auth::user()->school_id;
        $notification->academic_id = getAcademicId();
        $result = $notification->save();

        if ($result) {
            return true;
        } else {
            return false;
        }
    }
}

function studentFieldLabel($fields, $name)
{
    $field = $fields->where('field_name', $name)->first();
    if ($field && $field->label_name) {
        return $field->label_name;
    }

    return __('student.' . $name);
}
if (!function_exists('is_required')) {
    function is_required($field_name)
    {
        $school_id = auth()->user()->school_id;
        $fields = getStudentRegistrationFields();
        $field = $fields->where('field_name', $field_name)
            ->first();
        return $field && $field->is_required == 1;
    }
}

if (!function_exists('is_show')) {
    function is_show($field_name)
    {
        $fields = getStudentRegistrationFields();
        $field = $fields->where('field_name', $field_name)->first();
        return $field && $field->is_show == 1;
    }
}

if (!function_exists('getStudentRegistrationFields')) {
    function getStudentRegistrationFields($school_id = null)
    {

        if(!$school_id){
            $school_id = auth()->user()->school_id;
        }
       return Cache::rememberForever('student_field_'.$school_id, function () use($school_id){
            return SmStudentRegistrationField::where('school_id', $school_id)->get();
        });

    }
}


if (!function_exists('studentRecords')) {
    function studentRecords($request = null, $student_id = null, $school_id = null)
    {
        $studentRecord = StudentRecord::query()->with('classes', 'studentDetail')->where('active_status', 1);
        if ($student_id != null) {
            $studentRecord->where('student_id', $student_id);
        }
        if ($school_id != null) {
            $studentRecord->where('school_id', $school_id);
        } else {
            $studentRecord->where('school_id', auth()->user()->school_id);
        }
        if ($request != null) {
            $studentRecord->when($request->class, function ($query) use ($request) {
                $query->where('class_id', $request->class);
            })
                ->when($request->section, function ($query) use ($request) {
                    $query->where('section_id', $request->section);
                });
        }
        if ($request != null) {
            $studentRecord->when($request->un_session_id, function ($q) use ($request) {
                $q->where('un_session_id', $request->un_session_id);
            })
                ->when($request->un_faculty_id, function ($q) use ($request) {
                    $q->where('un_faculty_id', $request->un_faculty_id);
                })
                ->when($request->un_department_id, function ($q) use ($request) {
                    $q->where('un_department_id', $request->un_department_id);
                })
                ->when($request->un_academic_id, function ($q) use ($request) {
                    $q->where('un_academic_id', $request->un_academic_id);
                })
                ->when($request->un_semester_id, function ($q) use ($request) {
                    $q->where('un_semester_id', $request->un_semester_id);
                })
                ->when($request->un_semester_label_id, function ($q) use ($request) {
                    $q->where('un_semester_label_id', $request->un_semester_label_id);
                });
        }

        return $studentRecord;
    }
}

if (!function_exists('universityColumns')) {
    function universityColumns($table)
    {
        $columns = [
            'un_sessions' => 'un_session_id',
            'un_faculties' => 'un_faculty_id',
            'un_departments' => 'un_department_id',
            'un_academic_years' => 'un_academic_id',
            'un_semesters' => 'un_semester_id',
            'un_semester_labels' => 'un_semester_label_id',
        ];
        foreach ($columns as $key => $column) {
            if (!Schema::hasColumn($table, $column)) {
                $table->unsignedBigInteger($column)->nullable();
            }
            if (Schema::hasTable($key)) {
                $table->foreign($column)->on($key)->references('id')->cascadeOnDelete();
            }
        }
    }
}

if (!function_exists('labelWiseStudentResult')) {
    function labelWiseStudentResult($studentRecord, $subject_id, $examTerm = null)
    {
        // $subejcts = [1,2,3,4,5];
        // $data = [];
        // foreach($subejcts as $subject) {
        //     $data[$subject]= [
        //         'result' => '',
        //         'total_mark' =>''
        //     ];
        // }
        // $assingSubjects = $studentRecord->unStudentSubjects->pluck('un_subject_id')->toArray();
        $marks = SmMarkStore::withOutGlobalScope(AcademicSchoolScope::class)->where('student_record_id', $studentRecord->id)
            ->where('un_semester_label_id', $studentRecord->un_semester_label_id)
            ->where('un_academic_id', $studentRecord->un_academic_id)
            // ->where('un_subject_id', $subject_id)
            ->where('school_id', auth()->user()->school_id);

        $exit = $marks->get();

        $data = [];
        $data['exit'] = $exit;
        $data['passSubject'] = [];
        $data['total_mark'] = null;
        $data['result'] = 'not taken';
        if (count($exit) > 0) {
            $data['result'] = 'fail';
            $settings = CustomResultSetting::where('school_id', $studentRecord->school_id)
                ->where('un_academic_id', $studentRecord->un_academic_id)
                ->whereNotIn('exam_type_id', [0])
                ->get();
            $subjectPassMark = UnSubject::where('id', $subject_id)
                ->where('school_id', $studentRecord->school_id)
                ->value('pass_mark');

            if (!$subjectPassMark) {
                $data['result'] = 'pass';
                $data['passSubject'] = [$subject_id];
                return $data;
            }

            if ($settings) {
                $total_mark = 0;
                foreach ($settings as $setting) {
                    $mark = $marks->where('exam_term_id', $setting->exam_type_id)->value('total_marks');
                    $total_mark += ($mark * $setting->exam_percentage) / 100;
                }

                if ($total_mark >= $subjectPassMark) {
                    $data['result'] = 'pass';
                    $data['passSubject'] = [$subject_id];
                }
                $data['total_mark'] = $total_mark;
            } else {
                $totalSubjectMark = $marks->count('total_marks');
                if ($totalSubjectMark >= $subjectPassMark) {
                    $data['result'] = 'pass';
                    $data['passSubject'] = [$subject_id];
                }
                $data['total_mark'] = $totalSubjectMark;
            }
        }
        return $data;
    }
}


const WEEK_DAYS = [
    3 => 1,
    4 => 2,
    5 => 3,
    6 => 4,
    7 => 5,
    1 => 6,
    2 => 0,
];

const WEEK_DAYS_BY_NAME = [
    'Saturday' => 6,
        'Sunday' => 0,
        'Monday' => 1,
        'Tuesday' => 2,
        'Wednesday' => 3,
        'Thursday' => 4,
        'Friday' => 5,
];


const PERMITTED_MODULE = [
    //keep it all lower case.
    'lead', 'lms','alumni'
];


if (!function_exists('directFees')) {
    function directFees()
    {
       if(generalSetting()->direct_fees_assign){
        return true ;
       }else{
           return false;
       }
    }
}


if (!function_exists('discountFees')) {
    function discountFees($installment_id)
    {
        $amount = 0;
        $installment = DirectFeesInstallmentAssign::find($installment_id);
        $amount = $installment->amount - $installment->discount_amount;
        return $amount;
    }
}


if (!function_exists('smFeesInvoice')) {
    function smFeesInvoice($invoice)
    {
        $settings = FeesInvoice::where('school_id', auth()->user()->school_id)->first();
        
        $number = (($settings->start_form + $invoice)-1);
        $format = $settings->prefix."-". $number;
        
        $key = [
            'prefix',
            'start_form',
        ];

        $value = [
            $settings->prefix,
            $settings->start_form
        ];
        return str_replace($key, $value, $format);
    }
}

if (!function_exists('feesPaymentStatus')) {
    function feesPaymentStatus($installment_id)
    {
        $feesInstallment = DirectFeesInstallmentAssign::find($installment_id);
        $balance_fees =  $balance_fees = discountFees($feesInstallment->id) - ( $feesInstallment->paid_amount );
        if($feesInstallment->active_status == 1 && $balance_fees == 0){
          $paid =  __('fees.paid');
            return [$paid,'bg-success'];
        }elseif($feesInstallment->active_status == 2 || ( $feesInstallment->paid_amount > 0)){
          $partial =  __('fees.partial');
          return [$partial,'bg-warning'];
        }else{
          $unpaid =  __('fees.unpaid');
            return [$unpaid,'bg-danger'];
        }
    }
}


if (!function_exists('universityFeesInvoice')) {
    function universityFeesInvoice($invoice)
    {
        $settings = FeesInvoice::where('school_id', auth()->user()->school_id)
            ->first();

        $number = $settings->start_form + $invoice;
        $format = $settings->prefix . "-" . $number;

        $key = [
            'prefix',
            'start_form',
        ];

        $value = [
            $settings->prefix,
            $settings->start_form
        ];
        return str_replace($key, $value, $format);
    }
}


if (!function_exists('smPaymentRemainder')) {
    function smPaymentRemainder($school_id = null)
    {
        $today = date('Y-m-d');

        if (!$school_id) {
            $school_id = auth()->user()->school_id;
        }
        $notificationData = DirectFeesReminder::where('school_id', $school_id)
            ->first();
        $notificationType = json_decode($notificationData->notification_types);

        $dueDate = Carbon::parse($today)->addDays($notificationData->due_date_before)->format('Y-m-d');


        $feesDues = DirectFeesInstallmentAssign::where('school_id', $school_id)
            ->where('active_status', '!=', 1)
            ->where('due_date', $dueDate)
            ->get();

        foreach ($feesDues as $feesDue) {
            if (in_array('system', $notificationType)) {
                $message = 'Fees Remainder';
                $user_id = @$feesDue->recordDetail->student->user_id;
                $role_id = @$feesDue->recordDetail->student->role_id;
                sendNotification($message, '', $user_id, $role_id);
            }

            if (in_array('email', $notificationType)) {
                $reciver_email = @$feesDue->recordDetail->student->email;
                $receiver_name = @$feesDue->recordDetail->student->full_name;
                $purpose = 'university_fees_remainder';

                $data['student_name'] = @$feesDue->recordDetail->student->full_name;
                $data['class'] = @$feesDue->recordDetail->class->class_name;
                $data['section'] = @$feesDue->recordDetail->section->section_name;
                $data['semester_label'] = @$feesDue->recordDetail->unSemesterLabel->name;
                $data['academic'] = @$feesDue->recordDetail->academic->name;
                $data['fees_type'] = @$feesDue->feesType->name;
                $data['amount'] = $feesDue->amount;
                $data['due_date'] = dateConvert($feesDue->due_date);
                // send_mail($reciver_email, $receiver_name, $purpose, $data);
            }

            if (in_array('sms', $notificationType)) {
                $reciver_number = @$feesDue->recordDetail->student->mobile;
                $purpose = 'university_fees_remainder';
                $data['student_name'] = @$feesDue->recordDetail->student->full_name;
                $data['class'] = @$feesDue->recordDetail->class->class_name;
                $data['section'] = @$feesDue->recordDetail->section->section_name;
                $data['semester_label'] = @$feesDue->recordDetail->unSemesterLabel->name;
                $data['academic'] = @$feesDue->recordDetail->academic->name;
                $data['fees_type'] = @$feesDue->feesType->name;
                $data['amount'] = $feesDue->amount;
                $data['due_date'] = dateConvert($feesDue->due_date);
                // send_sms($reciver_number, $purpose, $data);
            }
            return true;
        }
    }
}

if (!function_exists('singleSubjectMark')) {
    function singleSubjectMark($record_id,$subject_id,$exam_id, $exam_rule= null)
    {
       try{
        $mark = 0;
        $full_mark = 100;
        
        $sm_mark = SmResultStore::where('student_record_id',$record_id)->where('subject_id',$subject_id)->where('exam_type_id',$exam_id)->first();
        if($sm_mark){
            $full_mark = SmExam::where('exam_type_id',$exam_id)->where('subject_id',$subject_id)->where('class_id',$sm_mark->class_id)->where('section_id',$sm_mark->section_id)->first('exam_mark');
        }
        
        if(is_null($exam_rule)){
            $mark = ($sm_mark->total_marks * 100) / $full_mark->exam_mark;
        }else{
            $mark = $sm_mark->total_marks;
        }
        return [$mark];
       }
       catch(\Exception $e){
        return [0];
       }
    }
}

if (!function_exists('subjectAverageMark')) {
    function subjectAverageMark($record_id,$subject_id)
    {
       try{
        $total_mark = 0;
        $grade = "";
        $result_setting = CustomResultSetting::where('academic_id',getAcademicId())->where('school_id',Auth()->user()->school_id)->get();
        
        if($result_setting){
            foreach($result_setting as $exam){
                $mark =  SmResultStore::query();
                $mark->where('student_record_id',$record_id)->where('exam_type_id',$exam->exam_type_id);
                $mark = $mark->where('subject_id',$subject_id);
                 $mark = $mark->first();

                if($mark){
                    $full_mark = SmExam::query();
                    $full_mark->where('exam_type_id',$mark->exam_type_id); 
                    $full_mark->where('subject_id',$subject_id)
                        ->where('class_id',$mark->class_id)
                        ->where('section_id',$mark->section_id);
                    $full_mark =  $full_mark->first('exam_mark'); 
                  $total_mark += ( ( ($mark->total_marks* 100) / $full_mark->exam_mark  ) * ($exam->exam_percentage/100) );
                }
              }
        }
        else{
            foreach(examTypes() as $exam){
                $mark =  SmResultStore::query();
                $mark->where('student_record_id',$record_id)->where('exam_type_id',$exam->id);
                $mark = $mark->where('subject_id',$subject_id); 
                $mark =  $mark->first();

                if($mark){
                    $full_mark = SmExam::query();
                    $full_mark->where('exam_type_id',$mark->exam_type_id); 
                    $full_mark->where('subject_id',$subject_id)
                            ->where('class_id',$mark->class_id)
                            ->where('section_id',$mark->section_id);
                    $full_mark =  $full_mark->first('exam_mark'); 
                    $total_mark +=  $mark->total_marks ;
                }
              }
        }
        $total_mark = number_format($total_mark,2);
        return [$total_mark];

       }
       catch(\Exception $e){
        return [0];
       }
    }
}

if (!function_exists('allSubjectAverageMark')) {
    function allSubjectAverageMark($record_id,$subject_id)
    {
       try{
        $exam_rules = CustomResultSetting::where('school_id',Auth()->user()->school_id)
        ->where('academic_id',getAcademicId())
        ->get();
        $total_mark = 0;
        $grade = "";
        if(!is_null($exam_rules))
            foreach($exam_rules as $exam){
              $mark =  SmResultStore::where('student_record_id',$record_id)->where('subject_id',$subject_id)->where('exam_type_id',$exam->exam_type_id)->first();
              if($mark){
                $full_mark = SmExam::where('exam_type_id',$mark->exam_type_id)->where('subject_id',$subject_id)->where('class_id',$mark->class_id)->where('section_id',$mark->section_id)->first('exam_mark');
                $total_mark += ( (($mark->total_marks * 100) / $full_mark->exam_mark ) * ($exam->exam_percentage/100) );
              }
            }
            $total_mark = number_format($total_mark,2);
            return [$total_mark];

       }
       catch(\Exception $e){
        return [0];
       }
    }


    if (!function_exists('allExamSubjectMark')) {
        function allExamSubjectMark($record_id,$exam_rule_id, $exam_rule = true)
        {
           try{
            $avg_marks = 0;
            $studentRecord = StudentRecord::find($record_id);

            if($exam_rule){
                $exam_rule = CustomResultSetting::find($exam_rule_id);
                if($exam_rule){
                    $result = SmResultStore::where('student_record_id', $record_id)
                    ->where('exam_type_id',$exam_rule->exam_type_id)
                    ->where('academic_id',getAcademicId())->get();
                    if($result){
                        $total_marks = $result->sum('total_marks');
                        $avg_marks =  (($total_marks / count($result)   )* ($exam_rule->exam_percentage /100 ));
                    }

                }
            }else{
                    $result = SmResultStore::where('student_record_id', $record_id)
                    ->where('exam_type_id',$exam_rule_id)
                    ->where('academic_id',getAcademicId())->get();
                    if($result){
                        $total_marks = $result->sum('total_marks');
                        $avg_marks =  (($total_marks / count($result)));
                    }
            }
                $avg_marks = number_format($avg_marks,2);
                return [$avg_marks];
           }
           catch(\Exception $e){
            return [0];
           }
        }
    }

    if (!function_exists('allExamSubjectMarkAverage')) {
        function allExamSubjectMarkAverage($record_id, $all_subject_ids)
        {
           try{
            $total_avg = 0;
            $exam_rules = CustomResultSetting::where('academic_id',getAcademicId())->where('school_id',Auth()->user()->school_id)
                        ->where('academic_id',getAcademicId())
                        ->get();
           
            if(count($exam_rules)){
                foreach($all_subject_ids as $subject_id){
                foreach($exam_rules as $exam){
                    $mark =  SmResultStore::where('student_record_id',$record_id)->where('subject_id',$subject_id)->where('exam_type_id',$exam->exam_type_id)->first();
                    $full_mark = SmExam::where('exam_type_id',$mark->exam_type_id)->where('subject_id',$subject_id)->where('class_id',$mark->class_id)->where('section_id',$mark->section_id)->first('exam_mark');
                    
                    if($mark){
                      $total_avg += ( (($mark->total_marks * 100) / $full_mark->exam_mark) * ($exam->exam_percentage/100) );
                    }
                  }
            }
            }else{
               foreach($all_subject_ids as $subject_id){
                    foreach(examTypes() as $exam){
                        $mark =  SmResultStore::where('student_record_id',$record_id)->where('subject_id',$subject_id)->where('exam_type_id',$exam->id)->first();
                        
                        if($mark){
                            $full_mark = SmExam::where('exam_type_id',$mark->id)->where('subject_id',$subject_id)->where('class_id',$mark->class_id)->where('section_id',$mark->section_id)->first('exam_mark');
                           
                            $total_avg += $mark->total_marks;
                          }
                    }
               }
            }

            $average = $total_avg/count($all_subject_ids);
                return number_format($average,2);
           }
           catch(\Exception $e){
            return 0;
           }
        }
    }


    if (!function_exists('avgSubjectPassMark')) {
        function avgSubjectPassMark($all_subject_ids)
        {
           try{
               $pass_mark = 0;
                $subjects = SmSubject::whereIn('id',$all_subject_ids)->get();
                if( count($subjects)){
                   
                    $pass_mark = $subjects->sum('pass_mark') / count($subjects);
                }
                 return number_format($pass_mark,2);
           }
           catch(\Exception $e){
            return 0;
           }
        }
    }



}


if (!function_exists('examTypes')) {
    function examTypes()
    {
        try {
           return SmExamType::where('school_id',auth()->user()->school_id)
                                ->where('academic_id',getAcademicId())
                                ->where('active_status',1)
                                ->get();
        } catch (\Throwable $th) {
            return [];
        }

    }
}

if (!function_exists('allExamsSubjectTotalMark')) {
    function allExamsSubjectTotalMark($subject_id)
    {
        try {
            $toal_mark = 0;
            foreach(examTypes() as $exam){
               $toal_mark +=  subjectFullMark($exam->id, $subject_id);
            }
            return $toal_mark;
        } catch (\Throwable $th) {
            return 100;
        }

    }
}

if (!function_exists('total_no_records')) {
    function total_no_records($class_id,$section_id=null)
    {
        try {
            $records = StudentRecord::query();
            $records->where('class_id',$class_id)->where('is_promote', 0);
            if ($section_id) {
                $records->where('section_id',$section_id);
            }
            return $records->whereHas('student')->count();
        } catch (\Throwable $th) {
            return 0;
        }

    }
}


if(!function_exists('isSkip')) {
    function isSkip($name)
    {
        $data = \App\Models\ExamStepSkip::where('name', $name)->where('school_id', auth()->user()->school_id)->first();
        if($data) {
            return true;
        }
        return false;
    }
}

if (!function_exists('resultPrintStatus')) {
    function resultPrintStatus($data)
    {
        try {
            $printSettings = CustomResultSetting::first();
            if($data == 'image'){
                if($printSettings->profile_image == $data){
                    return true;
                }else{
                    return false;
                }
            }elseif($data == 'header'){
                if($printSettings->header_background == $data){
                    return true;
                }else{
                    return false;
                }

            }elseif($data == 'body'){
                if($printSettings->body_background == $data){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        } catch (\Throwable $th) {
            return false;
        }
    }
}

if (!function_exists('getStudentMeritPosition')) {
    function getStudentMeritPosition($class_id, $section_id, $exam_term_id, $record_id)
    {
        try {
            $position = ExamMeritPosition::where('class_id', $class_id)
                        ->where('section_id', $section_id)
                        ->where('exam_term_id', $exam_term_id)
                        ->where('record_id', $record_id)
                        ->first();
            if($position){
                return $position->position;
            }else{
                return null;
            }
        } catch (\Throwable $th) {
            return false;
        }
    }
}

if (!function_exists('gpaResult')) {
    function gpaResult($gpa)
    {
        $mark = SmMarksGrade::where('gpa', floor($gpa))->first();
        if ($mark) {
            return $mark;
        } else {
            return null;
        }
    }
}



