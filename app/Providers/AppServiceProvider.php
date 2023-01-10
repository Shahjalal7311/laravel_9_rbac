<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Models\Settings;
use App\Models\SocialLink;
use App\Models\Social;
use App\Models\UserMenu;
use App\Models\UserMenuActions;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        View::composer('*', function($siteInfo) {
            $information = Settings::where('id', 1)->first();
            $siteInfo->with('information', $information);
        });

        View::composer('*', function($socialInfo) {
            $socialLink = SocialLink::where('status', 1)->get();
            $socialInfo->with('socialLink', $socialLink);
        });

        View::composer('*', function($blankImage) {
            $blank = asset('/public/frontend/no-image-icon.png');
            $blankImage->with('noImage', $blank);
        });

        View::composer('*', function($socialInfo) {
            $socialLink = Social::where('status', 1)->first();
            $socialInfo->with('socialLink', $socialLink);
        });

        //Link for Add New Button
        View::composer('*', function($addLink) {
            $routeName = Route::currentRouteName();
            $userMenus = UserMenu::where('menuLink', $routeName)->first();
            $userMenuAction = UserMenuActions::where('parentmenuId', @$userMenus->id)->where('menuType', 1)->first();
            $addLink->with('addNewLink', @$userMenuAction->actionLink);
        });

        //Link for Go Back
        View::composer('*', function($backLink) {
            $routeName = Route::currentRouteName();
            $userMenuAction = UserMenuActions::where('actionLink', @$routeName)->first();
            $userMenu = UserMenu::where('id', @$userMenuAction->parentmenuId)->first();
            $backLink->with('goBackLink', @$userMenu->menuLink);
        });
    }
}
