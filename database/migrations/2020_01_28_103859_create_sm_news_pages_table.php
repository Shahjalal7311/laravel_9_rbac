<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmNewsPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sm_news_pages', function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();
        $table->string('title')->nullable();
        $table->text('description')->nullable();
        $table->string('main_title')->nullable();
        $table->text('main_description')->nullable();
        $table->string('image')->nullable();
        $table->string('main_image')->nullable();
        $table->string('button_text')->nullable();
        $table->string('button_url')->nullable();
        $table->tinyInteger('active_status')->default(1);

        $table->integer('created_by')->nullable();
        // $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');

        $table->integer('updated_by')->nullable();
        // $table->foreign('updated_by')->references('id')->on('users')->onDelete('cascade');

        $table->integer('school_id')->nullable()->default(1)->unsigned();
        $table->foreign('school_id')->references('id')->on('sm_schools')->onDelete('cascade');
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sm_news_pages');
    }
}