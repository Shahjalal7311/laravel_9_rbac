@extends('admin.layouts.master')

@section('content')

@php
    use App\UserMenu;
    use App\UserMenuActions;
    $userMenus = UserMenu::where('id',$menuId)->first();
    $userMenusAction = UserMenuActions::orderBy('orderBy','DESC')->first();
    $orderBy = @$userMenusAction->orderBy+1;
    $actionStatus = array('1' => 'Add', '2' => 'Edit', '3' => 'Publication Status', '4' => 'Delete', '5' => 'Permission',
        '6' => 'Changepassword', '7' => 'View PopUp', '8' => 'View','9'=>'Shipping Status','10'=>'Product List','11'=>'View PDF');   
@endphp


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
                    <div class="col-md-6"><h4 class="card-title">{{$title}} ({{$userMenus->menuName}})</h4> </div>
                    <div class="col-md-6">
                        <span class="shortlink">
                            <a style="margin-left: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg"  href="{{ route('usermenuLink.index',$menuId) }}">
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
                        <form class="form-horizontal" action="{{ route('userMenu.ActionLinkSave',$menuId) }}" method="POST" enctype="multipart/form-data" id="newMenu" name="newMenu">
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

                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="Menu-type">Menu Type</label>
                                        <div class="form-group {{ $errors->has('menuType') ? ' has-danger' : '' }}">
                                            <select class="form-control chosen-select" name="menuType">
                                                <option value=" ">Select Menu Type</option>
                                                @foreach ($actionStatus as $key => $value)
                                                    <option value="{{$key}}">{{$value}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="name">Name</label>
                                        <div class="form-group {{ $errors->has('actionName') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="Add" name="actionName" value="{{ old('actionName') }}" required>
                                            @if ($errors->has('actionName'))
                                                @foreach($errors->get('actionName') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="link">Link</label>
                                        <div class="form-group {{ $errors->has('actionLink') ? ' has-danger' : '' }}">
                                            <input type="text" class="form-control form-control-danger" placeholder="menu.add" name="actionLink" value="{{ old('actionLink') }}" required>
                                            @if ($errors->has('actionLink'))
                                                @foreach($errors->get('actionLink') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="order-by">Order By</label>
                                        <div class="form-group {{ $errors->has('orderBy') ? ' has-danger' : '' }}">
                                            <input type="number" class="form-control form-control-danger" placeholder="order by" name="orderBy" value="{{ $orderBy }}" required>
                                            @if ($errors->has('orderBy'))
                                                @foreach($errors->get('orderBy') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="publication-status">Publication status</label>
                                        <div class="form-group {{ $errors->has('actionStatus') ? ' has-danger' : '' }}" style="height: 40px; line-height: 40px;">
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" id="published" name="actionStatus" class="form-check-input" checked="" value="1" required>Published
                                                </label>
                                            </div>
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" id="unpublished" name="actionStatus" class="form-check-input" value="0">Unpublished
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

<script src="{{ asset('/public/admin-elite/assets/node_modules/datatables/jquery.dataTables.min.js') }}"></script>


 <script>
        $(document).ready(function() {
            $('.summernote').summernote({
                height: 200, // set editor height
                minHeight: null, // set minimum height of editor
                maxHeight: null, // set maximum height of editor
                focus: false // set focus to editable area after initializing summernote
            });

            var updateThis ;

            // Switchery
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            $('.js-switch').each(function() {
                new Switchery($(this)[0], $(this).data());
            });

            var table = $('#MenusTable').DataTable( {
                "order": [[ 0, "asc" ]]
            } );

            

        });
 

            function summernote(){
                $('.summernote').summernote({
                    height: 200, // set editor height
                    minHeight: null, // set minimum height of editor
                    maxHeight: null, // set maximum height of editor
                    focus: false // set focus to editable area after initializing summernote
                });
            }
    </script>

@endsection