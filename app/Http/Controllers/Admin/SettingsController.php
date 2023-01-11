<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Settings;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function adminLogo()
    {
        $title = "Update Admin Info";
        $logos = Settings::where('id',1)->first();
        return view('admin.settings.adminLogo')->with(compact('title','logos'));
    }

    public function updatadminLogo(Request $request){
        $this->validate(request(), [
            'adminLogo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',           
            'adminsmalLogo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',           
            'adminfavIcon' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',           
                    
        ]);
        
        $adminLogoId = $request->adminLogoId;
        $setting = Settings::find($adminLogoId);

        if($setting){
            if($request->hasFile('adminLogo') && $request->file('adminLogo')->isValid()){
                $setting->addMediaFromRequest('adminLogo')->toMediaCollection('adminLogo');
            }
            if($request->hasFile('adminfavIcon') && $request->file('adminfavIcon')->isValid()){
                $setting->addMediaFromRequest('adminfavIcon')->toMediaCollection('adminfavIcon');
            }
            if($request->hasFile('adminsmalLogo') && $request->file('adminsmalLogo')->isValid()){
                $setting->addMediaFromRequest('adminsmalLogo')->toMediaCollection('adminsmalLogo');
            }
            $setting->update( [
                'adminTitle' => @$request->adminTitle,          
            ]);
        }else{
            $input = $request->all();
            $setting = Settings::create($input);
            if($request->hasFile('adminLogo') && $request->file('adminLogo')->isValid()){
                $setting->addMediaFromRequest('adminLogo')->toMediaCollection('adminLogo');
            }
            if($request->hasFile('adminfavIcon') && $request->file('adminfavIcon')->isValid()){
                $setting->addMediaFromRequest('adminfavIcon')->toMediaCollection('adminfavIcon');
            }
            if($request->hasFile('adminsmalLogo') && $request->file('adminsmalLogo')->isValid()){
                $setting->addMediaFromRequest('adminsmalLogo')->toMediaCollection('adminsmalLogo');
            }
        }
        
        return redirect(route('admin.logo'))->with('msg','Logo Updated Successfully');     
    }

    
}
