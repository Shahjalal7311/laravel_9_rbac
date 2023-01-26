<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SmLeaveType extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
    public function leaveDefines()
    {
        return $this->hasMany(SmLeaveDefine::class, 'type_id');
    }
}
