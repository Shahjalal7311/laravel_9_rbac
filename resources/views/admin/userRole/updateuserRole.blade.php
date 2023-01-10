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
                            <a style="margin-right: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg"  href="{{ route('user-roles.index') }}">
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
                        <form class="form-horizontal" action="{{ route('userRole.update') }}" method="POST" enctype="multipart/form-data" id="editUser" name="editUser">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <div class="row">
                                    <input type="hidden" name="userroleId" value="{{$userRoles->id}}">
                                    <div class="col-md-11">
                                        <label for="name">Name</label>
                                        <div class="form-group {{ $errors->has('name') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="Name" name="name" value="{{ $userRoles->name }}" required>
                                            @if ($errors->has('name'))
                                                @foreach($errors->get('name') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-1 m-b-20">
                                        <label for=""></label>
                                        <div class="form-group">
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

 <script type="text/javascript">
   
        document.forms['editUser'].elements['role'].value = "{{$userRoles->role}}";
       

        
    </script>

@endsection


