<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SmEvent extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
}
