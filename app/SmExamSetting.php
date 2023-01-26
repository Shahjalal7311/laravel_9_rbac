<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmExamSetting extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
    
    public function examName(){
        return $this->belongsTo('App\SmExamType', 'exam_type', 'id');
    }

}
