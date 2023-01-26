<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmItem extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }

    
    public function category()
    {
        return $this->belongsTo('App\SmItemCategory', 'item_category_id', 'id');
    }
}
