<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserMenuActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_menu_actions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parentmenuId')->length(11)->nullable();
            $table->integer('menuType')->length(11);
            $table->string('actionName',255)->nullable();
            $table->string('actionLink',255)->nullable();
            $table->integer('orderBy')->length(11)->nullable();
            $table->integer('actionStatus')->length(11)->nullable();
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
        Schema::dropIfExists('user_menu_actions');
    }
}
