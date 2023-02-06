<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExamMeritPosition extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected static function boot()
    {
        parent::boot();
    }

    protected $casts = [
        'total_mark' => 'float',
        'gpa' => 'float'
    ];
}
