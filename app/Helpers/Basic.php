<?php

use App\SmClass;
use App\SmSection;
use App\SmStudent;
use App\SmSubject;
// use App\Models\Theme;
use App\SmClassSection;
use App\SmAssignSubject;
use App\Models\StudentRecord;

if(!function_exists('classes')) {
    function classes(int $academic_year = null)
    {
        return SmClass::withOutGlobalScopes()
        ->when($academic_year, function($q) use($academic_year){
            $q->where('academic_id', $academic_year);
        }, function($q){
            $q->where('academic_id', getAcademicId());
        })->where('school_id', auth()->user()->school_id)
        ->where('active_status', 1)->get();
    }
}
if(!function_exists('sections')) {
    function sections(int $class_id, int $academic_year = null)
    {
       return  SmClassSection::withOutGlobalScopes()->where('class_id', $class_id)
                            ->where('school_id', auth()->user()->school_id)
                            ->when($academic_year, function($q) use($academic_year){
                                $q->where('academic_id', $academic_year);
                            }, function($q){
                                $q->where('academic_id', getAcademicId());
                            })->groupBy(['class_id', 'section_id'])->get();

    }
}
if(!function_exists('subjects')) {
    function subjects(int $class_id, int $section_id, int $academic_year = null)
    {
         $subjects = SmAssignSubject::withOutGlobalScopes()
         ->where('class_id', $class_id)
         ->where('section_id', $section_id)
         ->where('school_id', auth()->user()->school_id)
         ->when($academic_year, function($q) use($academic_year){
            $q->where('academic_id', $academic_year);
        }, function($q){
            $q->where('academic_id', getAcademicId());
        })->groupBy(['class_id', 'section_id', 'subject_id'])->get(); 
        
        return $subjects;

    }
}
if(!function_exists('students')) {
    function students(int $class_id, int $section_id = null, int $academic_year = null)
    {
         $student_ids = StudentRecord::where('class_id', $class_id)
         ->when($section_id, function($q) use($section_id){
            $q->where('section_id', $section_id);
         })->when('academic_year', function($q) use($academic_year) {
            $q->where('academic_id', $academic_year);
         })->where('school_id', auth()->user()->school_id)->pluck('student_id')->unique()->toArray();

         $students = SmStudent::withOutGlobalScopes()->whereIn('id', $student_ids)->get();
        
        return $students;

    }
}
if(!function_exists('classSubjects')) {
    function classSubjects($class_id = null) {
        $subjects = SmAssignSubject::query();
        if (teacherAccess()) {
            $subjects->where('teacher_id', auth()->user()->staff->id) ;
        }
        if ($class_id !="all_class") {
            $subjects->where('class_id', '=', $class_id);
        } else {
            $subjects->groupBy('class_id');
        }
        $subjectIds = $subjects->groupBy('subject_id')->get()->pluck(['subject_id'])->toArray();        

        return SmSubject::whereIn('id', $subjectIds)->get(['id','subject_name']);
    }
}
if(!function_exists('subjectSections')) {
    function subjectSections($class_id = null, $subject_id =null) {
        if(!$class_id || !$subject_id) return null;
        $sectionIds = SmAssignSubject::where('class_id', $class_id)
        ->where('subject_id', '=', $subject_id)                         
        ->where('school_id', auth()->user()->school_id)
        ->when(teacherAccess(), function($q) {
            $q->where('teacher_id',auth()->user()->staff->id);
        })
        ->groupby(['class_id','section_id'])
        ->pluck('section_id')
        ->toArray();
        return SmSection::whereIn('id',$sectionIds)->get(['id','section_name']);

    }
}