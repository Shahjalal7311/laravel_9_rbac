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
                    <div class="col-md-6"><h4 class="card-title">{{ $title }}</h4></div>
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
                        <form class="form-horizontal" action="{{ route('user.save') }}" method="POST" enctype="multipart/form-data" id="newProduct" name="newProduct">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12 m-b-20 text-right">    
                                        <button type="submit" class="btn btn-outline-info btn-lg waves-effect">Save</button> 
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12"> 
                                        <div class="form-group {{ $errors->has('parent') ? ' has-danger' : '' }}">
                                            <label for="role">Role</label>
                                            <select class="form-control" name="role" required>
                                                <option value=""> Select Role</option>
                                                @foreach($userRoles as $role)
                                                    <option value="{{$role->id}}">{{$role->name}}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('parent'))
                                                @foreach($errors->get('parent') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>                                       
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">                 
                                        <div class="form-group {{ $errors->has('name') ? ' has-danger' : '' }}">
                                            <label for="name">Name</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="Name" name="name" value="{{ old('name') }}" required>
                                            @if ($errors->has('name'))
                                                @foreach($errors->get('name') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>                                       
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('username') ? ' has-danger' : '' }}">
                                            <label for="user-name">User Name</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="User Name" name="username" value="{{ old('username') }}" required>
                                            @if ($errors->has('username'))
                                                @foreach($errors->get('username') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>                                        
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6"> 
                                        <div class="form-group {{ $errors->has('email') ? ' has-danger' : '' }}">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control form-control-danger" placeholder="Email" name="email" value="{{ old('email') }}" required>
                                            @if ($errors->has('email'))
                                                @foreach($errors->get('email') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>                                       
                                    </div>

                                    <div class="col-md-6">
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


