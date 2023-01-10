<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
	protected $fillable = [
        'menuName','menuTitle','menuContent', 'menuStatus', 'menuType','metaTitle','metaKeyword','metaDescription','orderBy'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];

    

    public function setRouteKeyName(){
        return 'menuTitle';
    }
}