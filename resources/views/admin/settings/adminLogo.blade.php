@extends('admin.layouts.master')

@section('content')
<div class="car-pad"></div>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12"><h4 class="card-title">{{$title}}</h4> </div>
                </div>                   
            </div>
            <div class="card-body">
                <?php
                    $message = Session::get('msg');
                      if (isset($message)) {
                        echo"<div style='display:inline-block;width: auto;' class='alert alert-success'><strong>" .$message."</strong></div>";
                      }

                      Session::forget('msg')
                  
                ?>
                <div id="editlogos" class="">
                    <div class="">        
                        <div class="">  
                            <form class="form-horizontal" action="{{route('adminLogo.update')}}" method="POST" enctype="multipart/form-data" name="editlogos">
                                {{ csrf_field() }}

                                <div class="form-group row {{ $errors->has('adminTitle') ? ' has-danger' : '' }}">
                                       <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Admin Panel Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="adminTitle" value="{{@$logos->adminTitle}}" name="adminTitle" required>
                                            
                                            @if ($errors->has('adminTitle'))
                                            @foreach($errors->get('adminTitle') as $error)
                                            <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>

                                  <div class="form-group row {{ $errors->has('adminLogo') ? ' has-danger' : '' }}">
                                       <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Main Logo</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control" id="adminLogo" aria-describedby="fileHelp" name="adminLogo">
                                            <img src="{{ asset('/').@$logos->adminLogo }}" style="width:75px;">
                                            @if ($errors->has('adminLogo'))
                                            @foreach($errors->get('adminLogo') as $error)
                                            <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row {{ $errors->has('adminsmalLogo') ? ' has-danger' : '' }}">
                                       <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Small Logo</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control" id="adminsmalLogo" aria-describedby="fileHelp" name="adminsmalLogo">
                                            <img src="{{ asset('/').@$logos->adminsmalLogo }}" style="width:75px;">
                                            @if ($errors->has('adminsmalLogo'))
                                            @foreach($errors->get('adminsmalLogo') as $error)
                                            <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row {{ $errors->has('adminfavIcon') ? ' has-danger' : '' }}">
                                       <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Fav Icon</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control" id="adminfavIcon" aria-describedby="fileHelp" name="adminfavIcon">
                                            <img src="{{ asset('/').@$logos->adminfavIcon }}" style="width:75px;">
                                            @if ($errors->has('adminfavIcon'))
                                            @foreach($errors->get('adminfavIcon') as $error)
                                            <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                            @endif
                                        </div>
                                    </div>

                                    <input type="hidden" name="adminLogoId" value="{{@$logos->id}}">

                                    <div class="col-md-11 m-b-20 text-right">    
                                        <button type="submit" class="btn btn-outline-info waves-effect">Update Information</button> 
                                    </div>
                                </div>                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
