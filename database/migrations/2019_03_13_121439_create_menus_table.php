<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('menuName',255)->nullable();
            $table->string('menuTitle',255)->nullable();
            $table->string('menuContent',255)->nullable();
            $table->boolean('menuStatus')->default(1);
            $table->integer('menuType')->default(1); //1 mean product. 2 mean service
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
        Schema::dropIfExists('menus');
    }
}
