@extends('admin.layouts.master')

@section('custom-css')
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')
<?php
    use App\Models\UserRoles;
    use App\Models\UserMenuActions;
?>

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
                        <form class="form-horizontal" action="{{ route('userRole.permissionUpdate') }}" method="POST" enctype="multipart/form-data" id="editUser" name="editUser">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <input type="hidden" name="userroleId" value="{{$userRoles->id}}">

                                <div class="row">
                                    <div class="col-md-10">
                                        <input type="checkbox" class="select_all" name="select_all"> Select All                                        
                                    </div>
                                    <div class="col-md-2 m-b-20 text-right">
                                        <button type="submit" class="btn btn-outline-info waves-effect">Update</button>                        
                                    </div>
                                </div>

                                <div class="row">
                                    @foreach ($userMenus as $menu)
                                        @php
                                            $userMenuAction = UserMenuActions::where('actionStatus',1)->orderBy('orderBy','ASC')->where('parentmenuId',$menu->id)->get();
                                            $rolePermission = explode(',', $userRoles->permission);
                                            if (in_array($menu->id, $rolePermission))
                                            {
                                                $checked = "checked";
                                            }
                                            else
                                            {
                                                $checked = "";
                                            }                                            
                                        @endphp

                                        <div class="col-md-2" style="margin-bottom: 12px;">
                                            <input class="parentMenu_{{$menu->parentMenu}} menu" type="checkbox" name="usermenu[]" value="{{$menu->id}}" {{$checked}}  data-id="{{$menu->id}}">
                                            <span>{{$menu->menuName}}</span>
                                            <div style="margin-left: 26px;margin-top: 3px;">
                                                @foreach ($userMenuAction as $action)
                                                    @php
                                                        $actionPermission = explode(',', $userRoles->actionPermission);
                                                        if (in_array($action->id, $actionPermission))
                                                        {
                                                            $actionChecked = "checked";
                                                        }
                                                        else
                                                        {
                                                            $actionChecked = "";
                                                        }                                                    
                                                    @endphp
                                                    <input class="childMenu_{{$action->parentmenuId}}" type="checkbox" name="usermenuAction[]" value="{{$action->id}}" style="margin-bottom: 8px;" {{$actionChecked}}> {{$action->actionName}} <br>
                                                @endforeach
                                            </div>
                                        </div>
                                    @endforeach
                                </div>

                                <div class="row">
                                    <div class="col-md-12 m-b-20 text-right">
                                        <button type="submit" class="btn btn-outline-info waves-effect">Update</button>                        
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
<script src="{{ asset('/public/admin-elite/assets/node_modules/jquery/jquery-3.2.1.min.js') }}"></script>
 <script type="text/javascript">
   $(document).ready(function(){
        $('.select_all').click(function(event) {   
            if(this.checked) {
                // Iterate each checkbox
                $(':checkbox').each(function() {
                    this.checked = true;                        
                });
            } else {
                $(':checkbox').each(function() {
                    this.checked = false;                       
                });
            }
        });

        $('.menu').click(function(event) {
            var menuId = $(this).data('id');
            if(this.checked) {
                $('.parentMenu_'+menuId).each(function() {
                    this.checked = true; 

                });

                $('.childMenu_'+menuId).each(function() {
                    this.checked = true; 

                });
            }else{
              $('.parentMenu_'+menuId).each(function() {
                    this.checked = false; 
                });

              $('.childMenu_'+menuId).each(function() {
                    this.checked = false; 

                });
            }
         });

    });

    document.forms['editUser'].elements['role'].value = "{{$userRoles->role}}";
    
</script>

@endsection


