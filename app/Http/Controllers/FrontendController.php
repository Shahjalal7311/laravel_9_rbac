<?php

namespace App\Http\Controllers;

class FrontendController extends Controller
{
    public function index()
    {
      return view('frontend.home.home');
    }

    public function page404()
    {
      return view('frontend.pages.page404');
    }
}
