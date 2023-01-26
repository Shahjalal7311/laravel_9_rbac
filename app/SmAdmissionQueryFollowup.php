<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmAdmissionQueryFollowup extends Model
{
    use HasFactory;
    protected static function boot()
    {
        parent::boot();
    }

    public function user(){
    	return $this->belongsTo('App\User', 'created_by', 'id');
    }
}
