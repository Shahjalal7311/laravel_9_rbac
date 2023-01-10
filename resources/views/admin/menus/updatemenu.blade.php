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
                    <div class="col-md-6"><h4 class="card-title">{{$title}}</h4> </div>
                    <div class="col-md-6">  
                        <span class="shortlink">
                         <a style="margin-right: 30px; font-size: 16px;" class="btn btn-outline-info btn-lg"  href="{{ route('menu.index') }}">
                            <i class="fa fa-arrow-circle-left"></i> Go Back
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
                        <form class="form-horizontal" action="{{ route('menu.update') }}" method="POST" enctype="multipart/form-data" id="editMenu" name="editMenu">
                            {{ csrf_field() }}

                            @if( count($errors) > 0 )
                                <div style="display:inline-block;width: auto;" class="alert alert-danger">{{ $errors->first() }}</div>
                            @endif

                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12 m-b-20 text-right">    
                                        <button type="submit" class="btn btn-info waves-effect">Save</button> 
                                    </div>
                                </div>

                                <input type="hidden" name="menuId" value="{{$menu->id}}">

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('menuName') ? ' has-danger' : '' }}">
                                            <label for="menu-name">Menu Name</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="Menu name" name="menuName" value="{{ $menu->menuName }}" required>
                                            @if ($errors->has('menuName'))
                                                @foreach($errors->get('menuName') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('menuTitle') ? ' has-danger' : '' }}">
                                            <label for="">Menu Title</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="Menu Title" name="menuTitle" value="{{ $menu->menuTitle }}" required>
                                            @if ($errors->has('menuTitle'))
                                                @foreach($errors->get('menuTitle') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('metaTitle') ? ' has-danger' : '' }}">
                                            <label for="">Meta Title</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="Meta Title" name="metaTitle" value="{{ $menu->metaTitle }}">
                                            @if ($errors->has('metaTitle'))
                                                @foreach($errors->get('metaTitle') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('metaKeyword') ? ' has-danger' : '' }}">
                                            <label for="">Meta keyword</label>
                                            <input type="text" class="form-control form-control-danger" placeholder="Meta Keyword" name="metaKeyword" value="{{ $menu->metaKeyword }}">
                                            @if ($errors->has('metaKeyword'))
                                                @foreach($errors->get('metaKeyword') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('description') ? ' has-danger' : '' }}">
                                            <label for="">Menu Content</label>
                                            <textarea class="summernote form-control form-control-danger" name="menuContent"  required> {{ $menu->menuContent }}</textarea>
                                            @if ($errors->has('menuContent'))
                                                @foreach($errors->get('menuContent') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('description') ? ' has-danger' : '' }}">
                                            <label for="">Meta description</label>
                                            <textarea style="min-height: 100px;" class="form-control" name="metaDescription">{{ $menu->metaDescription }}</textarea>
                                            @if ($errors->has('metaDescription'))
                                                @foreach($errors->get('metaDescription') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group {{ $errors->has('orderBy') ? ' has-danger' : '' }}">
                                            <label for="">Order By</label>
                                            <input type="number"   name="orderBy" value="{{ $menu->orderBy }}" required>
                                            @if ($errors->has('orderBy'))
                                                @foreach($errors->get('orderBy') as $error)
                                                    <div class="form-control-feedback">{{ $error }}</div>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="publication-status">Publication Status</label>
                                        <div class="form-group {{ $errors->has('status') ? ' has-danger' : '' }}" style="height: 45px; line-height: 45px;">
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" value="1" id="published" name="menuStatus" required>Published
                                                </label>
                                            </div>
                                            <div class="form-check-inline">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" value="0" id="unpublished" name="menuStatus" checked>Unpublished
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

     <script type="text/javascript">
        document.forms['editMenu'].elements['menuStatus'].value = "{{$menu->menuStatus}}";

        
    </script>

@endsection