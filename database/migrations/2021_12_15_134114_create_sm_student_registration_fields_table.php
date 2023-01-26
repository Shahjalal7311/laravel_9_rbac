<?php

use App\Models\SmStudentRegistrationField;
use App\SmSchool;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class CreateSmStudentRegistrationFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_student_registration_fields', function (Blueprint $table) {
            $table->id();
            $table->string('field_name')->nullable();
            $table->string('label_name')->nullable();  
            $table->tinyInteger('is_show')->nullable()->default(1);              
            $table->tinyInteger('active_status')->nullable()->default(1);
            $table->tinyInteger('is_required')->nullable()->default(0);
            $table->tinyInteger('student_edit')->nullable()->default(0);
            $table->tinyInteger('parent_edit')->nullable()->default(0);
            $table->tinyInteger('staff_edit')->nullable()->default(0);
            $table->tinyInteger('type')->nullable()->comment('1=student,2=staff');
            $table->tinyInteger('is_system_required')->nullable()->default('0');
            $table->tinyInteger('required_type')->nullable()->comment('1=switch on,2=off');
           
            $table->integer('position')->nullable();
            $table->integer('created_by')->nullable()->default(1)->unsigned();
            $table->integer('updated_by')->nullable()->default(1)->unsigned();

            $table->integer('school_id')->nullable()->default(1)->unsigned();
            $table->foreign('school_id')->references('id')->on('sm_schools')->onDelete('cascade');

            $table->integer('academic_id')->nullable()->unsigned();
            $table->foreign('academic_id')->references('id')->on('sm_academic_years')->onDelete('set null');

            $table->timestamps();
        });

        try {
            $request_fields=[
              'session',
              'class' ,
              'section',
              'roll_number', 
              'admission_number', 
              'first_name',
              'last_name',
              'gender',
              'date_of_birth',
              'blood_group',
              'email_address',
              'caste',
              'phone_number',
              'religion',
              'admission_date',
              'student_category_id',
              'student_group_id',
              'height', 
              'weight',
              'photo',
              'fathers_name',  
              'fathers_occupation',               
              'fathers_phone',
              'fathers_photo',
              'mothers_name',  
              'mothers_occupation',               
              'mothers_phone',
              'mothers_photo',
              'guardians_name',                        
              'guardians_email',
              'guardians_photo',
              'guardians_phone',  
              'guardians_occupation',
              'guardians_address',
              'current_address',  
              'permanent_address',
              'route',
              'vehicle',
              'dormitory_name',
              'room_number',
              'national_id_number',
              'local_id_number',
              'bank_account_number',
              'bank_name',
              'previous_school_details',
              'additional_notes',
              'ifsc_code',
              'document_file_1',
              'document_file_2',
              'document_file_3',
              'document_file_4',
              'custom_field'
          ];
        } catch(Exception $e){
            //
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sm_student_registration_fields');
    }
}
