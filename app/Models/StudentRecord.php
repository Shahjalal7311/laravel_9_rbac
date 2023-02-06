<?php

namespace App\Models;

use App\SmExam;
use App\SmClass;
use App\SmExamType;
use App\SmHomework;
use App\SmFeesAssign;
use App\SmOnlineExam;
use App\SmResultStore;
use App\SmAssignSubject;
use App\SmStudentAttendance;
use App\SmFeesAssignDiscount;
use App\SmTeacherUploadContent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Modules\ExamPlan\Entities\AdmitCard;
// use Modules\Fees\Entities\FmFeesInvoice;
use App\Scopes\StatusAcademicSchoolScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StudentRecord extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    

    public function class()
    {
        return $this->belongsTo('App\SmClass', 'class_id', 'id')->withDefault()->withoutGlobalScope(StatusAcademicSchoolScope::class);
    }

    public function admitcard()
    {
        return $this->belongsTo(AdmitCard::class,'student_record_id');
    }

    public function section()
    {
        return $this->belongsTo('App\SmSection', 'section_id', 'id')->withDefault()->withoutGlobalScope(StatusAcademicSchoolScope::class);
    }

    public function unSection()
    {
        return $this->belongsTo('App\SmSection', 'un_section_id', 'id')->withDefault()->withoutGlobalScope(StatusAcademicSchoolScope::class);
    }

    public function student()
    {
        return $this->hasOne('App\SmStudent', 'id', 'student_id');
    }
    public function school()
    {
        return $this->belongsTo('App\SmSchool', 'school_id', 'id')->withDefault();
    }
    public function academic()
    {
        return $this->belongsTo('App\SmAcademicYear', 'academic_id', 'id')->withDefault();
    }
    public function classes()
    {
        return $this->hasMany(SmClass::class, 'academic_id', 'academic_id');
    }
    
    public function studentDetail()
    {
        return $this->belongsTo('App\SmStudent', 'student_id', 'id')->withDefault();
    }

    public function fees()
    {
        return $this->hasMany(SmFeesAssign::class, 'record_id', 'id');
    }

    public function feesDiscounts()
    {
        return $this->hasMany(SmFeesAssignDiscount::class, 'record_id', 'id');
    }

    public function homework()
    {
        return $this->hasMany(SmHomework::class, 'record_id', 'id')->whereNull('course_id')->whereNull('chapter_id')->whereNull('lesson_id');
    }

    public function studentAttendance()
    {
        return $this->hasMany(SmStudentAttendance::class, 'student_record_id', 'id');
    }

    public function studentAttendanceByMonth($month, $year)
    {
        return $this->studentAttendance()->where('attendance_date', 'like', $year . '-' . $month . '%')->get();
    }

    // public function getLessonPlanAttribute()
    // {
    //     return LessonPlanner::where('class_id', $this->class_id)
    //     ->where('section_id', $this->section_id) 
    //     ->groupBy('lesson_detail_id')
    //     ->where('active_status', 1)
    //     ->get(); 

    // }
    public function getHomeWorkAttribute()
    {
        return SmHomework::with('classes', 'sections', 'subjects')->where('class_id', $this->class_id)->where('section_id', $this->section_id)
        ->whereNull('course_id')
        ->where('sm_homeworks.academic_id', getAcademicId())->where('school_id', Auth::user()->school_id)->get();
    }

    public function getUploadContent($type, $is_university = null)
    {
        if($is_university == null){
            $class = $this->class_id;
            $section = $this->section_id;
            $content = [];
                $content = SmTeacherUploadContent::where('content_type', $type)
                ->where(function ($que) use ($class) {
                    return $que->where('class', $class)
                    ->orWhereNull('class');
                })
                ->where(function ($que) use ($section) {
                    return $que->where('section', $section)
                    ->orWhereNull('section');
                })
                ->where('course_id', '=', null)
                ->where('chapter_id', '=', null)
                ->where('lesson_id', '=', null)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->get();

                return $content;
        }else{
            $un_semester_label_id = $this->un_semester_label_id;
            $section_id = $this->un_section_id;
            $content = [];
            $content = SmTeacherUploadContent::where('content_type', $type)
            ->where(function ($que) use ($un_semester_label_id) {
                return $que->where('un_semester_label_id', $un_semester_label_id);
            })
            ->where(function ($que) use ($section_id) {
                return $que->where('un_section_id', $section_id);
            })
            ->where('course_id', '=', null)
            ->where('academic_id', getAcademicId())
            ->where('school_id', Auth::user()->school_id)
            ->get();

            return $content;
        }

    }


    public function homeworkContents($is_university = null)
    {
        if($is_university == null){
            $class = $this->class_id;
            $section = $this->section_id;
            $content = [];
                $content = SmHomework::where('school_id', auth()->user()->school_id)
                ->where(function ($que) use ($class) {
                    return $que->where('class_id', $class)
                    ->orWhereNull('class_id');
                })
                ->where(function ($que) use ($section) {
                    return $que->where('section_id', $section)
                    ->orWhereNull('section_id');
                })
                ->where('course_id', '=', null)
                ->where('chapter_id', '=', null)
                ->where('lesson_id', '=', null)
                ->where('academic_id', getAcademicId())
                ->where('school_id', Auth::user()->school_id)
                ->get();

                return $content;
        }else{
            $un_semester_label_id = $this->un_semester_label_id;
            $section_id = $this->un_section_id;
            $content = [];
            $content = SmHomework::where('school_id', auth()->user()->school_id)
            ->where(function ($que) use ($un_semester_label_id) {
                return $que->where('un_semester_label_id', $un_semester_label_id);
            })
            ->where(function ($que) use ($section_id) {
                return $que->where('un_section_id', $section_id);
            })
            ->where('course_id', '=', null)
            ->where('un_academic_id', getAcademicId())
            ->where('school_id', Auth::user()->school_id)
            ->get();

            return $content;
        }

    }

    public function getExamAttribute()
    {
       return SmExam::with('examType')->where('class_id',$this->class_id)->where('section_id',$this->section_id)->where('school_id', Auth::user()->school_id)->where('academic_id', getAcademicId())->where('active_status', 1)->get();
    }

    public function getAssignSubjectAttribute()
    {
       return SmAssignSubject::where('class_id', $this->class_id)->where('section_id', $this->section_id)->where('academic_id', getAcademicId())->where('school_id', Auth::user()->school_id)->get();
    }

    public function getStudentTeacherAttribute()
    {
        return SmAssignSubject::select('teacher_id')->where('class_id', $this->class_id)
        ->where('section_id', $this->section_id)->distinct('teacher_id')->where('academic_id', getAcademicId())->where('school_id', Auth::user()->school_id)->get();
    }

    public function feesInvoice()
    {
        return $this->hasMany('Modules\Fees\Entities\FmFeesInvoice', 'record_id', 'id');
    }

    public function markStoreDetails()
    {
        return $this->belongsTo('App\SmMarkStore', 'student_record_id', 'id')->withDefault();
    }

    public function directFeesInstallments()
    {
        return $this->hasMany(DirectFeesInstallmentAssign::class, 'record_id', 'id');
    }

    public function getStudentNameAttribute()
    {
        return  $this->studentDetail ? $this->studentDetail->full_name : '';
    }
}
