<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SmBankAccount extends Model
{
    protected static function boot(){
        parent::boot();
    }
    use HasFactory;
}
