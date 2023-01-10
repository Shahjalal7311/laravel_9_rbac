<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Settings extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'siteTitle','siteName','siteLogo','sitefavIcon','adminTitle','adminLogo','adminsmalLogo','adminfavIcon', 'mobile1', 'mobile2','siteEmail1','siteEmail2', 'siteAddress1','siteAddress2', 'sitestatus','metaTitle','metaKeyword','metaDescription'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
