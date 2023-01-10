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
    <span class="shortlink">
         <a class="btn btn-info"  href="{{ route('users.index') }}"> Back</a> 
         
    </span>
            <div class="card-body">
                <?php
                    use Illuminate\Support\Facades\Session;
                    $message = Session::get('msg');
                    if (isset($message)) {
                        echo"<div style='display:inline-block;width: auto;' class='alert alert-success'><strong>" .$message."</strong></div>";
                    }
                    Session::forget('msg')
                ?>
                <h4 class="card-title">Change Password of {{$users->name}}</h4>

                <div id="addNewProduct" class="">
                    <div class="">        
                        <div class="">
                            
                            <form class="form-horizontal" action="{{ route('user.changePassword') }}" method="POST" enctype="multipart/form-data" id="newProduct" name="newProduct">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                
                            <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            
                            @endif
                                <div class="modal-body">
                                    <div class="col-md-12 m-b-20 text-right">    
                                        <button type="submit" class="btn btn-info waves-effect">Save</button> 
                                    </div>
                                    <br>

                                    <input type="hidden" name="userId" value="{{$users->id}}">

                                    <div class="form-group row {{ $errors->has('password') ? ' has-danger' : '' }}">
                                        <label for="inputHorizontalDnger" class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control form-control-danger" placeholder="Password" name="password" value="" required>
                                            @if ($errors->has('password'))
                                            @foreach($errors->get('password') as $error)
                                            <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>                
                            </form>
                        </div>
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                
            </div>
        </div>
    </div>
</div>

@endsection


