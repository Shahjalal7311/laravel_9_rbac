<?php

namespace App;

use App\Scopes\ActiveStatusSchoolScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class SmVehicle extends Model
{
    use HasFactory;
    
    public function driver()
    {
        return $this->belongsTo("App\SmStaff", "driver_id", "id");
    }

    public static function findVehicle($id)
    {
        try {
            return SmVehicle::find($id);
        } catch (\Exception $e) {
            $data = [];
            return $data;
        }
    }
}
