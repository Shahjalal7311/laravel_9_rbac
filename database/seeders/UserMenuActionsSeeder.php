<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserMenuActionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('user_menu_actions')->insert([
				['id' => '24','parentmenuId' => '20','menuType' => '1','actionName' => 'Add','actionLink' => 'menuadd.page','orderBy' => '21','actionStatus' => '1','created_at' => '2019-09-03 10:48:02','updated_at' => '2019-09-03 10:48:02'],
				['id' => '25','parentmenuId' => '20','menuType' => '3','actionName' => 'Status','actionLink' => 'menu.changeStatus','orderBy' => '22','actionStatus' => '1','created_at' => '2019-09-03 10:48:43','updated_at' => '2019-09-03 10:48:43'],
				['id' => '26','parentmenuId' => '20','menuType' => '2','actionName' => 'Edit','actionLink' => 'menu.edit','orderBy' => '23','actionStatus' => '1','created_at' => '2019-09-03 10:49:08','updated_at' => '2019-09-03 10:49:08'],
				['id' => '27','parentmenuId' => '20','menuType' => '4','actionName' => 'Delete','actionLink' => 'menu.delete','orderBy' => '24','actionStatus' => '1','created_at' => '2019-09-03 10:49:40','updated_at' => '2019-09-03 10:49:40'],
				['id' => '28','parentmenuId' => '21','menuType' => '1','actionName' => 'Add','actionLink' => 'slideradd.page','orderBy' => '25','actionStatus' => '1','created_at' => '2019-09-03 10:50:35','updated_at' => '2019-09-03 10:50:35'],
				['id' => '29','parentmenuId' => '21','menuType' => '3','actionName' => 'Status','actionLink' => 'sliders.changeStatus','orderBy' => '26','actionStatus' => '1','created_at' => '2019-09-03 10:52:05','updated_at' => '2019-09-03 10:52:05'],
				['id' => '34','parentmenuId' => '21','menuType' => '2','actionName' => 'Edit','actionLink' => 'slider.edit','orderBy' => '27','actionStatus' => '1','created_at' => '2019-09-03 10:58:11','updated_at' => '2019-09-03 10:58:11'],
				['id' => '35','parentmenuId' => '21','menuType' => '4','actionName' => 'Delete','actionLink' => 'slider.delete','orderBy' => '28','actionStatus' => '1','created_at' => '2019-09-03 10:58:58','updated_at' => '2019-09-03 10:58:58'],
				['id' => '55','parentmenuId' => '38','menuType' => '1','actionName' => 'Add','actionLink' => 'usermenu.add','orderBy' => '47','actionStatus' => '1','created_at' => '2019-09-03 11:19:40','updated_at' => '2019-09-03 11:19:40'],
				['id' => '56','parentmenuId' => '38','menuType' => '2','actionName' => 'Edit','actionLink' => 'usermenu.edit','orderBy' => '48','actionStatus' => '1','created_at' => '2019-09-03 11:19:55','updated_at' => '2019-09-03 11:19:55'],
				['id' => '57','parentmenuId' => '38','menuType' => '3','actionName' => 'Status','actionLink' => 'usermenu.status','orderBy' => '49','actionStatus' => '1','created_at' => '2019-09-03 11:20:21','updated_at' => '2019-09-03 11:20:21'],
				['id' => '58','parentmenuId' => '38','menuType' => '4','actionName' => 'Delete','actionLink' => 'usermenu-delete','orderBy' => '51','actionStatus' => '1','created_at' => '2019-09-03 11:20:37','updated_at' => '2019-09-06 09:25:44'],
				['id' => '59','parentmenuId' => '40','menuType' => '1','actionName' => 'Add','actionLink' => 'useradd.page','orderBy' => '51','actionStatus' => '1','created_at' => '2019-09-03 11:23:08','updated_at' => '2019-09-03 11:23:08'],
				['id' => '60','parentmenuId' => '40','menuType' => '3','actionName' => 'Status','actionLink' => 'user.changeuserStatus','orderBy' => '52','actionStatus' => '1','created_at' => '2019-09-03 11:23:26','updated_at' => '2019-09-03 11:23:26'],
				['id' => '61','parentmenuId' => '40','menuType' => '2','actionName' => 'Edit','actionLink' => 'user.edit','orderBy' => '53','actionStatus' => '1','created_at' => '2019-09-03 11:23:47','updated_at' => '2019-09-03 11:23:47'],
				['id' => '62','parentmenuId' => '40','menuType' => '6','actionName' => 'Change Password','actionLink' => 'user.password','orderBy' => '54','actionStatus' => '1','created_at' => '2019-09-03 11:24:12','updated_at' => '2019-09-03 11:24:12'],
				['id' => '63','parentmenuId' => '40','menuType' => '7','actionName' => 'View','actionLink' => 'user.profile','orderBy' => '55','actionStatus' => '0','created_at' => '2019-09-03 11:24:50','updated_at' => '2019-09-06 09:31:03'],
				['id' => '64','parentmenuId' => '39','menuType' => '1','actionName' => 'Add','actionLink' => 'userRoleAdd.page','orderBy' => '56','actionStatus' => '1','created_at' => '2019-09-03 11:25:46','updated_at' => '2019-09-03 11:25:46'],
				['id' => '65','parentmenuId' => '39','menuType' => '3','actionName' => 'Status','actionLink' => 'userRole.changeuserRoleStatus','orderBy' => '57','actionStatus' => '1','created_at' => '2019-09-03 11:26:03','updated_at' => '2019-09-03 11:26:03'],
				['id' => '66','parentmenuId' => '39','menuType' => '2','actionName' => 'Edit','actionLink' => 'userRole.edit','orderBy' => '58','actionStatus' => '1','created_at' => '2019-09-03 11:26:24','updated_at' => '2019-09-03 11:26:24'],
				['id' => '67','parentmenuId' => '39','menuType' => '5','actionName' => 'Permission','actionLink' => 'userRole.permission','orderBy' => '59','actionStatus' => '1','created_at' => '2019-09-03 11:26:59','updated_at' => '2019-09-03 11:26:59'],
				['id' => '86','parentmenuId' => '38','menuType' => '8','actionName' => 'View Action Menu','actionLink' => 'usermenuLink.index','orderBy' => '50','actionStatus' => '1','created_at' => '2019-09-03 11:26:59','updated_at' => '2019-09-03 11:26:59'],
			]);
			echo "User Menu Action Sucessfully Added";
    }
}
