<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmPaymentGatewaySettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_payment_gateway_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('gateway_name')->nullable();
            $table->string('gateway_username')->nullable();
            $table->string('gateway_password')->nullable();
            $table->string('gateway_signature')->nullable();
            $table->string('gateway_client_id')->nullable();
            $table->string('gateway_mode')->nullable();
            $table->string('gateway_secret_key')->nullable();
            $table->string('gateway_secret_word')->nullable();
            $table->string('gateway_publisher_key')->nullable();
            $table->string('gateway_private_key')->nullable();
            $table->tinyInteger('active_status')->default(0);
            $table->timestamps();

            $table->text('bank_details')->nullable();
            $table->text('cheque_details')->nullable();

            $table->integer('created_by')->nullable()->default(1)->unsigned();
            $table->integer('updated_by')->nullable()->default(1)->unsigned();

            $table->integer('school_id')->nullable()->default(1)->unsigned();
            $table->foreign('school_id')->references('id')->on('sm_schools')->onDelete('cascade');

        });
        DB::table('sm_payment_gateway_settings')->insert([
            [
                'gateway_name'          => 'Bank',
                'created_at' => date('Y-m-d h:i:s'),
            ],

        ]);
        DB::table('sm_payment_gateway_settings')->insert([
            [
                'gateway_name'          => 'Cheque',
                'created_at' => date('Y-m-d h:i:s'),
            ],

        ]);
    } 

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sm_payment_gateway_settings');
    }
}
