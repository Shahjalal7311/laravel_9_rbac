<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\FrontendController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [FrontendController::class,'index']);
Auth::routes();
Route::prefix('admin')->group(function() {
    Route::middleware('auth:admin')->group(function() {
        Route::group(['middleware' => 'menuPermission'], function() {
            Route::get('/', [App\Http\Controllers\HomeController::class,'index'])->name('admin.index');
            Route::get('/permission-deny', [App\Http\Controllers\HomeController::class,'permission_view'])->name('admin.permission');
            //Start Menu Section
            Route::resource('menu', App\Http\Controllers\Admin\MenuController::class);
            Route::get('/menu-add', [App\Http\Controllers\Admin\MenuController::class, 'addmenu'])->name('menuadd.page');
            Route::post('/menu-save', [App\Http\Controllers\Admin\MenuController::class,'savemenu'])->name('menu.save');
            Route::get('/menu/status/{id}', [App\Http\Controllers\Admin\MenuController::class,'changeStatus'])->name('menu.changeStatus');
            Route::get('/menu-edit/{id}', [App\Http\Controllers\Admin\MenuController::class,'editmenu'])->name('menu.edit');
            Route::post('/menu-update', [App\Http\Controllers\Admin\MenuController::class,'updatemenu'])->name('menu.update');
            Route::get('/menu-delete/{id}', [App\Http\Controllers\Admin\MenuController::class,'deleteMenu'])->name('menu.delete');
            Route::get('/admin-logo', [App\Http\Controllers\Admin\SettingsController::class,'adminLogo'])->name('admin.logo');
            Route::post('/adminLogo-update', [App\Http\Controllers\Admin\SettingsController::class,'updatadminLogo'])->name('adminLogo.update');

            //User Menu 
            Route::get('/user-menu', [App\Http\Controllers\Admin\UserMenuController::class,'index'])->name('usermenu.index');
            Route::get('/user-menu/add', [App\Http\Controllers\Admin\UserMenuController::class,'add'])->name('usermenu.add');
            Route::post('/user-menu/save', [App\Http\Controllers\Admin\UserMenuController::class,'save'])->name('usermenu.save');
            Route::get('/user-menu/edit/{id}', [App\Http\Controllers\Admin\UserMenuController::class,'edit'])->name('usermenu.edit');
            Route::post('/user-menu/update', [App\Http\Controllers\Admin\UserMenuController::class,'update'])->name('usermenu.update');
            Route::get('/user-menu/status', [App\Http\Controllers\Admin\UserMenuController::class,'status'])->name('usermenu.status');
            Route::post('/usermenu-delete', [App\Http\Controllers\Admin\UserMenuController::class,'destroy'])->name('usermenu-delete');

            //End User Menu
            //User Menu link action
            Route::get('/user-menu-link/{id}', [App\Http\Controllers\Admin\UserMenuController::class,'usermenuLink'])->name('usermenuLink.index');
            Route::get('/user-menu-link-add/{menuId}', [App\Http\Controllers\Admin\UserMenuController::class,'usermenuLinkAdd'])->name('userMenu.ActionLinkAdd');
            Route::post('/user-menu-link-save/{parentMenuId}', [App\Http\Controllers\Admin\UserMenuController::class,'usermenuLinkSave'])->name('userMenu.ActionLinkSave');
            Route::get('/user-menu-link-edit/{menuId}/{id}', [App\Http\Controllers\Admin\UserMenuController::class,'usermenuLinkEdit'])->name('userMenu.ActionLinkEdit');
            Route::post('/user-menu-link-update/{parentMenuId}', [App\Http\Controllers\Admin\UserMenuController::class,'usermenuLinkUpdate'])->name('userMenu.ActionLinkUpdate');
            Route::get('/user-menu-action/status', [App\Http\Controllers\Admin\UserMenuController::class,'actionStatus'])->name('usermenuAction.status');
            Route::post('/user-menu-action/delete', [App\Http\Controllers\Admin\UserMenuController::class,'actionDestroy'])->name('usermenuAction.delete');

            //User Manage

            Route::resource('users', App\Http\Controllers\Admin\AdminController::class);
            Route::get('/user-add', [App\Http\Controllers\Admin\AdminController::class,'adduser'])->name('useradd.page');
            Route::post('/user-save', [App\Http\Controllers\Admin\AdminController::class,'saveuser'])->name('user.save');
            Route::get('/user/status/{id}', [App\Http\Controllers\Admin\AdminController::class,'changeuserStatus'])->name('user.changeuserStatus');
            Route::get('/user-edit/{id}', [App\Http\Controllers\Admin\AdminController::class,'edituser'])->name('user.edit');
            Route::post('/user-upate', [App\Http\Controllers\Admin\AdminController::class,'updateuser'])->name('user.update');
            Route::get('/user-password/{id}', [App\Http\Controllers\Admin\AdminController::class,'password'])->name('user.password');
            Route::get('/user-profile/{id}', [App\Http\Controllers\Admin\AdminController::class,'userProfile'])->name('user.profile');
            Route::post('/user-changePassword', [App\Http\Controllers\Admin\AdminController::class,'passwordChange'])->name('user.changePassword');
            //User Roll Manage
            Route::resource('user-roles', App\Http\Controllers\Admin\UserRoleController::class);
            Route::get('/user-role-add', [App\Http\Controllers\Admin\UserRoleController::class,'adduserRole'])->name('userRoleAdd.page');
            Route::post('/user-role-save', [App\Http\Controllers\Admin\UserRoleController::class,'saveuserRole'])->name('userRole.save');
            Route::get('/userRole/status/{id}', [App\Http\Controllers\Admin\UserRoleController::class,'changeuserRoleStatus'])->name('userRole.changeuserRoleStatus');
            Route::get('/user-role-edit/{id}', [App\Http\Controllers\Admin\UserRoleController::class,'edituserRole'])->name('userRole.edit');
            Route::post('/user-role-upate', [App\Http\Controllers\Admin\UserRoleController::class,'updateuserRole'])->name('userRole.update');
            Route::get('/user-role-permission/{id}', [App\Http\Controllers\Admin\UserRoleController::class,'permission'])->name('userRole.permission');
            Route::post('/user-role-permission-update', [App\Http\Controllers\Admin\UserRoleController::class,'permissionUpdate'])->name('userRole.permissionUpdate');
        });
    });

    //Admin Login Url
    Route::get('/login', [App\Http\Controllers\Auth\AdminLoginController::class,'showLoginForm'])->name('admin.login');
    Route::post('/login', [App\Http\Controllers\Auth\AdminLoginController::class,'login'])->name('admin.login');
    Route::get('/logout', [App\Http\Controllers\Auth\AdminLoginController::class,'adminLogout'])->name('admin.logout');
    // Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    // Route::post('/login', 'Auth\AdminLoginController@login');
    Route::post('/logout', [App\Http\Controllers\Auth\AdminLoginController::class,'adminLogout'])->name('admin.logout');

    // Password Reset Routes...
    Route::get('/password/reset', [App\Http\Controllers\Auth\AdminForgotPasswordController::class,'passwordForget'])->name('admin.password.forget');
    Route::post('/password/email', [App\Http\Controllers\Auth\AdminForgotPasswordController::class,'passwordEmail'])->name('admin.password.email');
    Route::get('/new-password/{email}', [App\Http\Controllers\Auth\AdminForgotPasswordController::class,'newPassword'])->name('admin.password.newPassword');
    Route::post('/password/save', [App\Http\Controllers\Auth\AdminForgotPasswordController::class,'changePasswordSave'])->name('admin.password.save');
});

//Admin part end
Route::get('/clear', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    Artisan::call('clear-compiled');

    return "Cleared!";
});
