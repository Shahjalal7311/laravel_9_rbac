@extends('admin.layouts.master')

@section('content')

<style type="text/css">
    .chosen-single{
        height: 33px !important;
    }
</style>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6"><h4 class="card-title">{{$title}}</h4> </div>
                    <div class="col-md-6">  
                        <span class="shortlink">
                         <a style="margin-right: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg"  href="{{ route($goBackLink) }}">
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
                        <form class="form-horizontal" action="{{ route('usermenu.update') }}" method="POST" enctype="multipart/form-data" id="newMenu" name="newMenu">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12 m-b-20 text-right">    
                                        <button type="submit" class="btn btn-outline-info waves-effect">Save</button> 
                                   </div>
                                </div>

                                <input type="hidden" name="usermenuId" value="{{$menuItem->id}}">

                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="parent">Parent</label>
                                        <div class="form-group {{ $errors->has('parentMenu') ? ' has-danger' : '' }}">
                                            <select class="form-control chosen-select" name="parentMenu">
                                                <option value=" ">Select Parent</option>
                                                @foreach ($menus as $menu)
                                                    @php
                                                        if ($menu->id == $menuItem->parentMenu)
                                                        {
                                                            $selected = 'selected';
                                                        }
                                                        else
                                                        {
                                                            $selected = '';
                                                        }                                                       
                                                    @endphp
                                                    <option {{$selected}} value="{{$menu->id}}">{{$menu->menuName}}</option>
                                                @endforeach
                                            </select>
                                        </div>                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label for="menu-name">Menu Name</label>
                                        <div class="form-group {{ $errors->has('menuName') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="Menu name" name="menuName" value="{{ $menuItem->menuName }}" required>
                                            @if ($errors->has('menuName'))
                                                @foreach($errors->get('menuName') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="menu-link">Menu Link</label>
                                        <div class="form-group {{ $errors->has('menuLink') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="Menu link" name="menuLink" value="{{ $menuItem->menuLink }}" required>
                                            @if ($errors->has('menuLink'))
                                                @foreach($errors->get('menuLink') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label for="menu-icon">Menu Icon</label>
                                        <div class="form-group {{ $errors->has('menuIcon') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="fa fa-icon" name="menuIcon" value="{{ $menuItem->menuIcon }}">
                                            @if ($errors->has('menuIcon'))
                                                @foreach($errors->get('menuIcon') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="order-by">Order By</label>
                                        <div class="form-group {{ $errors->has('orderBy') ? ' has-danger' : '' }}">
                                            <input type="number" class="form-control form-control-danger" placeholder="order by" name="orderBy" value="{{ $menuItem->orderBy }}" required>
                                            @if ($errors->has('orderBy'))
                                                @foreach($errors->get('orderBy') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="publication-status">Publication Status</label>
                                        <div class="form-group {{ $errors->has('status') ? ' has-danger' : '' }}" style="height: 40px; line-height: 40px;">
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" id="published" name="menuStatus" class="form-check-input" value="1" required>Published
                                                </label>
                                            </div>
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" id="unpublished" name="menuStatus" class="form-check-input" checked="" value="0">Unpublished
                                                </label>
                                            </div>                           
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

@section('custom-js')

<script type="text/javascript">
    document.forms['newMenu'].elements['menuStatus'].value = "{{$menuItem->menuStatus}}";
</script>

@endsection