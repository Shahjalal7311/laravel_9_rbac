<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserMenusSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('user_menus')->insert([
			['id' => '3','parentMenu' => NULL,'menuName' => 'Dashboard','menuLink' => 'admin.index','menuIcon' => 'fa fa-shopping-bag','orderBy' => '1','menuStatus' => '1','created_at' => '2019-08-30 04:08:49','updated_at' => '2019-08-31 01:52:17'],
			['id' => '20','parentMenu' => '18','menuName' => 'menu','menuLink' => 'menu.index','menuIcon' => 'fa fa-caret-right','orderBy' => '15','menuStatus' => '1','created_at' => '2019-08-30 05:49:27','updated_at' => '2019-08-30 05:49:27'],
			['id' => '36','parentMenu' => NULL,'menuName' => 'User Management','menuLink' => 'admin.index','menuIcon' => 'fa fa-bars','orderBy' => '10','menuStatus' => '1','created_at' => '2019-08-30 06:00:46','updated_at' => '2019-10-30 09:48:00'],
			['id' => '37','parentMenu' => '36','menuName' => 'Admin Panel Logo','menuLink' => 'admin.logo','menuIcon' => 'fa fa-caret-right','orderBy' => '32','menuStatus' => '1','created_at' => '2019-08-30 06:01:24','updated_at' => '2019-08-30 06:01:24'],
			['id' => '38','parentMenu' => '36','menuName' => 'Menus','menuLink' => 'usermenu.index','menuIcon' => 'fa fa-caret-right','orderBy' => '33','menuStatus' => '1','created_at' => '2019-08-30 06:01:52','updated_at' => '2019-08-30 06:01:52'],
			['id' => '39','parentMenu' => '36','menuName' => 'Role','menuLink' => 'user-roles.index','menuIcon' => 'fa fa-caret-right','orderBy' => '34','menuStatus' => '1','created_at' => '2019-08-30 06:02:12','updated_at' => '2019-08-30 06:03:06'],
			['id' => '40','parentMenu' => '36','menuName' => 'User','menuLink' => 'users.index','menuIcon' => 'fa fa-caret-right','orderBy' => '35','menuStatus' => '1','created_at' => '2019-08-30 06:02:35','updated_at' => '2019-08-30 06:04:03']
		]);
		echo "User Menu Sucessfully Added";
	}
}
