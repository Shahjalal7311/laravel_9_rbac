<?php

namespace App;

use Intervention\Image\ImageManagerStatic as Image;
use  File;
use Illuminate\Support\Facades\DB;

class ImageHelper
{
   /*This is last modified function for upload any image*/
    public static function UploadImage($file,$table=null,$directory=null)
    {   
        $lastData = DB::table($table)->find(DB::table($table)->max('id'));
        if(@$lastData){
            $maxId = $lastData->id+1+rand(100000000,99999999999);
        }else{
           $maxId = '1'.+rand(100000000,99999999999); 
        }
        
        $data = getimagesize($file);
        $filename = $file->getClientOriginalName(); 
        $name = pathinfo($filename, PATHINFO_FILENAME);
        $logoExtension = $file->getClientOriginalExtension();
        if(!file_exists ($directory))
        mkdir($directory);
        move_uploaded_file($file, "$directory$name".'_'.$maxId.'.'."$logoExtension");
        return $directory.($name.'_'.$maxId.'.'.$logoExtension);
    }
}
