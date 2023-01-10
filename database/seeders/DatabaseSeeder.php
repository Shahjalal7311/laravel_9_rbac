<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Admin::create([
            'name'=>'admin',
            'username'=>'admin',
            'email'=>'root@gmail.com',
            'role'=>'2',
            'status'=>'1',
            'password'=>bcrypt(123456)
        ]);
        $this->call([
            UserMenusSeeder::class,
            UserMenuActionsSeeder::class,
            UserRolesSeeder::class,
        ]);
        echo "User Menu Sucessfully Added";
    }
}
