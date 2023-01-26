<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmSection extends Model
{
    //
    use HasFactory;
    protected static function boot()
    {
        parent::boot();
    }

    public function students()
    {
        return $this->hasMany('App\SmStudent', 'section_id', 'id');
    }
    public function unAcademic()
    {
        return $this->belongsTo('Modules\University\Entities\UnAcademicYear', 'un_academic_id', 'id')->withDefault();
    }
}
