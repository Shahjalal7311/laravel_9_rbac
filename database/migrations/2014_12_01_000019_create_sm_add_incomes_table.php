<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\SmAddIncome;

class CreateSmAddIncomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_add_incomes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255)->nullable();
            $table->date('date')->nullable();
            $table->float('amount', 10, 2)->nullable();
            $table->string('file')->nullable();
            $table->text('description')->nullable();
            $table->integer('item_sell_id')->nullable();
            $table->integer('fees_collection_id')->nullable();
            $table->integer('inventory_id')->nullable();
            $table->tinyInteger('active_status')->default(1);
            $table->timestamps();



            $table->integer('income_head_id')->nullable()->unsigned();

            $table->integer('account_id')->nullable()->unsigned();
            $table->foreign('account_id')->references('id')->on('sm_bank_accounts')->onDelete('cascade');

            $table->integer('payment_method_id')->nullable()->unsigned();
            $table->foreign('payment_method_id')->references('id')->on('sm_payment_methhods')->onDelete('cascade');

            $table->integer('created_by')->nullable()->default(1)->unsigned();

            $table->integer('updated_by')->nullable()->default(1)->unsigned();

            $table->integer('school_id')->nullable()->default(1)->unsigned();
            $table->foreign('school_id')->references('id')->on('sm_schools')->onDelete('cascade');

            $table->integer('academic_id')->nullable()->unsigned();
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
        Schema::dropIfExists('sm_add_incomes');
    }
}
