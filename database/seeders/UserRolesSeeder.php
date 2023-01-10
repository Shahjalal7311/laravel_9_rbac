<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			DB::table('user_roles')->insert([
				['id' => '2','name' => 'Super User','status' => '1','permission' => '3,20,36,37,38,39,40','actionPermission' => '24,25,26,27,55,56,57,58,64,65,66,67,59,60,61,62,86','created_at' => '2019-04-17 00:50:05','updated_at' => '2020-12-29 04:30:29'],
[				'id' => '3','name' => 'Admin','status' => '1','permission' => '3,20,36,37,38,39,40','actionPermission' => '24,25,26,27,55,56,57,58,64,65,66,67,59,60,61,62,86','created_at' => '2019-04-17 00:52:54','updated_at' => '2020-12-29 04:30:57']
			]);
			echo "User Role Sucessfully Added";
    }
}
