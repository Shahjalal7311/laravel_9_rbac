<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LibrarySubject extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
    public function subjectBook()
    {
        return $this->belongsTo('App\Book', 'book', 'id');
    }
}
