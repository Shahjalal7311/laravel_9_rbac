<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmRoomList extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
   
    public function dormitory()
    {
        return $this->belongsTo('App\SmDormitoryList', 'dormitory_id');
    }

    public function roomType()
    {
        return $this->belongsTo('App\SmRoomType', 'room_type_id');
    }
}
