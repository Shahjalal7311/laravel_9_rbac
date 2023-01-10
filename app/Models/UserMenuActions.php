<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMenuActions extends Model
{
    protected $fillable = [
        'parentmenuId','menuType','actionName','actionLink','orderBy','actionStatus',
    ];
}
