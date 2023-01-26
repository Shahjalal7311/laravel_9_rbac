<?php

namespace App;

use App\Scopes\StatusAcademicSchoolScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\RolePermission\Entities\InfixRole;

class SmNoticeBoard extends Model
{
    use HasFactory;
    protected static function boot()
    {
        parent::boot();
    }

    public function users()
    {
        return $this->belongsTo('App\User', 'created_by', 'id');
    }
}
