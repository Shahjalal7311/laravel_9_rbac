<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmItemReceiveChild extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
   
    public function items(){
    	return $this->belongsTo('App\SmItem', 'item_id', 'id');
    }
}
