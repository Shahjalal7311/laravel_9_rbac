<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmOnlineExamQuestionAssign extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
    
    public function questionBank()
    {
        return $this->belongsTo('App\SmQuestionBank', 'question_bank_id', 'id');
    }
}
