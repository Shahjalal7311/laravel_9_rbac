<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmComplaint extends Model
{
        
    use HasFactory;
    protected static function boot()
    {
        parent::boot();
    }
   
    public function complaintType(){
    	return $this->belongsTo('App\SmSetupAdmin', 'complaint_type', 'id');
    }

    public function complaintSource(){
    	return $this->belongsTo('App\SmSetupAdmin', 'complaint_source', 'id');
    }
}
