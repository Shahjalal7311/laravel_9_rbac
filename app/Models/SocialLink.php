<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{	protected $table = 'social_links';
    protected $fillable = [
        'name','icon','link','orderBy','status'
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ]; 
}
