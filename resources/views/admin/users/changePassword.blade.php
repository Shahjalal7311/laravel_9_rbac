@extends('admin.layouts.master')

@section('custom-css')
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

<!-- ============================================================== -->
<!-- Start Page Content -->
<!-- ============================================================== -->

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6"><h4 class="card-title">{{ $title }} Of {{ $users->name }}</h4></div>
                    <div class="col-md-6">
                        <span class="shortlink">
                            <a style="margin-right: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg"  href="{{ route('users.index') }}">
                                <i class="fa fa-arrow-circle-left"></i> Back
                            </a>                           
                        </span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                @php
                    $message = Session::get('msg');
                    if (isset($message))
                    {
                        echo"<div style='display:inline-block;width: auto;' class='alert alert-success'><strong>" .$message."</strong></div>";
                    }

                    Session::forget('msg')
                @endphp

                  <div id="row">
                    <div class="col-md-12">
                        <form class="form-horizontal" action="{{ route('user.changePassword') }}" method="POST" enctype="multipart/form-data" id="newProduct" name="newProduct">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <input type="hidden" name="userId" value="{{ $users->id }}">
                                <div class="row">
                                    <div class="col-md-11">                                        
                                        <div class="form-group {{ $errors->has('password') ? ' has-danger' : '' }}">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control form-control-danger" placeholder="Password" name="password" value="" required>
                                            @if ($errors->has('password'))
                                                @foreach($errors->get('password') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-md-1 m-b-20 text-right">
                                        <label for=""> </label>                                        
                                        <div class="form-group {{ $errors->has('password') ? ' has-danger' : '' }}">
                                            <button type="submit" class="btn btn-outline-info waves-effect">Save</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- /.modal-dialog -->
                    </div>
                </div>                
            </div>
        </div>
    </div>
</div>

@endsection


