<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class CustomerLoginController extends Controller 
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:customer')->except('customerLogout');
    }
    /**
     * Show the customer's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {
        return view('auth.customer-login');
    }

    /**
     * Functionalities for login
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        //validate data
        $this->validate($request, [
            'email'=>'required|email',
            'password'=>'required|min:6'
        ]);

        //attemt to log the customer in
        if(Auth::guard('customer')->attempt(['email'=> $request->email, 'password'=> $request->password], $request->remember)){
            //if successful, then redirect to their intended location
            return redirect()->intended(route('customer.index'));
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
    public function customerLogout(Request $request)
    {
        $this->guard()->logout();

        return redirect('/');
    }
}
