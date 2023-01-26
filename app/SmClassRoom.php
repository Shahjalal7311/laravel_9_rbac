<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmClassRoom extends Model
{
   
    protected static function boot(){
        parent::boot();
    }
    use HasFactory;

}