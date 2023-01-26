<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmFeesAssignDiscount extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected static function boot()
    {
        parent::boot();
    }
    
    public function feesDiscount(){
    	return $this->belongsTo('App\SmFeesDiscount', 'fees_discount_id', 'id');
    }
}
