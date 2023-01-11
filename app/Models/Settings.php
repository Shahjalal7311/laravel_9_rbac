<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;

class Settings extends Model implements HasMedia
{
    use Notifiable, HasFactory, InteractsWithMedia;

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
