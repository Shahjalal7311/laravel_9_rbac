<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateSmResultStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_result_stores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('student_roll_no')->default(1); 
            $table->integer('student_addmission_no')->default(1); 
            $table->integer('is_absent')->default(0)->comment('1=Absent, 0=Present'); 
            $table->float('total_marks')->default(0); 
            $table->float('total_gpa_point')->nullable(); 
            $table->string('total_gpa_grade',255)->default(0)->nullable(); 
            $table->text('teacher_remarks')->nullable();
            $table->timestamps();


            $table->integer('exam_type_id')->nullable()->unsigned();
            $table->foreign('exam_type_id')->references('id')->on('sm_exam_types')->onDelete('cascade');

            $table->integer('subject_id')->nullable()->unsigned();
            $table->foreign('subject_id')->references('id')->on('sm_subjects')->onDelete('cascade');


            $table->integer('exam_setup_id')->nullable()->unsigned();
            $table->foreign('exam_setup_id')->references('id')->on('sm_exam_setups')->onDelete('cascade');

            $table->integer('student_id')->nullable()->unsigned();
            $table->foreign('student_id')->references('id')->on('sm_students')->onDelete('cascade');

            $table->integer('class_id')->nullable()->unsigned();
            $table->foreign('class_id')->references('id')->on('sm_classes')->onDelete('cascade');


            $table->integer('section_id')->nullable()->unsigned();
            $table->foreign('section_id')->references('id')->on('sm_sections')->onDelete('cascade');

            $table->integer('created_by')->nullable()->default(1)->unsigned();

            $table->integer('updated_by')->nullable()->default(1)->unsigned();

            $table->integer('school_id')->nullable()->default(1)->unsigned();
            $table->foreign('school_id')->references('id')->on('sm_schools')->onDelete('cascade');
            
            $table->integer('academic_id')->nullable()->default(1)->unsigned();
            $table->foreign('academic_id')->references('id')->on('sm_academic_years')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sm_result_stores');
    }
}
