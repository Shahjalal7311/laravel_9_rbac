<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('siteTitle',255)->nullable();
            $table->string('siteName',255)->nullable();
            $table->string('siteLogo',255)->nullable();
            $table->string('sitefavIcon',255)->nullable();
            $table->string('adminTitle',255)->nullable();
            $table->string('adminLogo',255)->nullable();
            $table->string('adminsmalLogo',255)->nullable();
            $table->string('adminfavIcon',255)->nullable();
            $table->string('mobile1',255)->nullable();
            $table->string('mobile2',255)->nullable();
            $table->string('siteEmail1',255)->nullable();
            $table->string('siteEmail2',255)->nullable();
            $table->text('siteAddress1')->nullable();
            $table->text('siteAddress2')->nullable();
            $table->integer('sitestatus')->length(11)->nullable();
            $table->text('metaTitle')->nullable();
            $table->text('metaKeyword')->nullable();
            $table->text('metaDescription')->nullable();
            $table->integer('orderBy')->length(11)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
