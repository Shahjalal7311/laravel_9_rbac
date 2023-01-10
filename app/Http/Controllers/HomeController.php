<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $title = "Dashboard";
        return view('admin.dashboard.index')->with(compact('title'));
    }

    public function permission_view(){
        $title = "Dashboard";
        return view('admin.dashboard.permission')->with(compact('title'));
    }
}
