<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmItemReceive extends Model
{
    use HasFactory;
    protected static function boot(){
        parent::boot();
    }
    
    public function suppliers(){
    	return $this->belongsTo('App\SmSupplier', 'supplier_id', 'id');
    }

    public function paymentMethodName(){
        return $this->belongsTo('App\SmPaymentMethhod','payment_method','id');
    }

    public function bankName(){
        return $this->belongsTo('App\SmBankAccount','account_id','id');
    }

}
