<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AdminLoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin')->except('adminLogout');
    }
    /**
     * Show the admin's login form.
     *
     * @return \Illuminate\Http\Response
     */
    

    public function showLoginForm()
    {
        $title = "Admin View";
        return view('auth.admin-login')->with(compact('title'));
    }

    /**
     * Functionalities for login
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $users = Admin::where('email',$request->email)->first();
        //$usersPassword = Hash::make($request->password);
        //validate data
        $this->validate($request, [
            'email'=>'required|email|exists:admins,email',
            'password'=>'required|min:6',
        ]);

        if ($users->status == 0) {
             $message = "<span class='help-block' style='color:#a94442;'><strong>You are not active for login.</strong></span>"; 
            return redirect(route('admin.login'))->with('msg',$message)->withInput();
        }

        /*if (@$users->password != $usersPassword) {
             $message = "<span class='help-block' style='color:#a94442;'><strong>password not matched.</strong></span>"; 
            return redirect(route('admin.login'))->with('passwordMessage',$message)->withInput();
        }*/


        //attemt to log the admin in
        if(Auth::guard('admin')->attempt(['email'=> $request->email, 'password'=> $request->password], $request->remember)){
            //if successful, then redirect to their intended location
            return redirect()->intended(route('admin.index'));
        }else{
            $message = "<span class='help-block' style='color:#a94442;'><strong>password not matched.</strong></span>"; 
            return redirect(route('admin.login'))->with('passwordMessage',$message)->withInput();
        }

        //if unsuccessful, then redirect back to the login with the form data
        return redirect()->back()->withInput($request->only('email', 'remember'));
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function adminLogout(Request $request)
    {
        $this->guard()->logout();
        return redirect(route('admin.login'));
    }
}
