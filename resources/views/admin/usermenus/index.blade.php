@extends('admin.layouts.master')

@section('custom-css')
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

<!-- ============================================================== -->
<!-- Start Page Content -->
<!-- ============================================================== -->
<?php 
    use App\Models\UserMenu;
?>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6"><h4 class="card-title">{{ $title }}</h4></div>
                    <div class="col-md-6">
                        <span class="shortlink">
                            <a style="margin-right: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg" href="{{ url('/admin/user-menu/add') }}">
                                <i class="fa fa-plus-circle"></i> Add
                            </a>                            
                        </span>
                    </div>
                </div>
                <div class="row float-right">
                    <form action="{{ route('usermenu.index') }}" method="get">
                        <div class="input-group">
                            <input type="search" name="search" value="{{ $search }}"class="form-control">
                            <span class="input-group-prepend">
                                <button type="submit" class="btn btn-primary">Search</button>
                            </span>
                        </div>
                    </form>
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
                
                <div class="table-responsive">
                    <table id="menusTable" class="table table-bordered table-striped"  name="menusTable">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Parent</th>
                                <th>Link</th>
                                <th>Order</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            @php
                                $sl = 0;
                            @endphp
                        	@foreach($menus as $menu)
                                @php
                                    $sl++;
                                    $parentMenu = UserMenu::where('id',$menu->parentMenu)->first();
                                @endphp                     	
                            	<tr>
                                    <td>{{ $sl }}</td>
                                    <td>{{ $menu->menuName }}</td>
                                    <td>{{ @$parentMenu->menuName }}</td>
                                    <td>{{ $menu->menuLink }}</td>
                                    <td>{{ $menu->orderBy }}</td>
                                    <td>
                                        <?php echo App\Models\Link::status($menu->id,$menu->menuStatus)?>
                                    </td>
                                    <td class="text-nowrap">
                                    <?php echo App\Models\Link::action($menu->id)?>
                                    </td>
                                </tr>
                        	@endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="pagination justify-content-end">
    {{ $menus->appends(['search' => $search])->links('vendor.pagination.bootstrap-4') }}
</div>


@endsection

@section('custom-js')

    <script>
        $(document).ready(function() {
            var updateThis ;

            // Switchery
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            $('.js-switch').each(function() {
                new Switchery($(this)[0], $(this).data());
            });

            //ajax            

            //ajax delete code
            $('#menusTable tbody').on( 'click', 'i.fa-trash', function () {
                $.ajaxSetup({
                  headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  }
                });

                usermenuId = $(this).parent().data('id');
                var menu = this;
                swal({   
                    title: "Are you sure?",   
                    text: "You will not be able to recover this imaginary file!",   
                    type: "warning",   
                    showCancelButton: true,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "Yes, delete it!",   
                    cancelButtonText: "No, cancel plx!",   
                    closeOnConfirm: false,   
                    closeOnCancel: false 
                }, function(isConfirm){   
                    if (isConfirm) {     
                       $.ajax({
                            type: "POST",
                           url : "{{ route('usermenu-delete') }}",
                            data : {usermenuId:usermenuId},
                           
                            success: function(response) {
                                swal({
                                    title: "<small class='text-success'>Success!</small>", 
                                    type: "success",
                                    text: "Menu Deleted Successfully!",
                                    timer: 1000,
                                    html: true,
                                });
                                table
                                    .row( $(menu).parents('tr'))
                                    .remove()
                                    .draw();
                            },
                            error: function(response) {
                                error = "Failed.";
                                swal({
                                    title: "<small class='text-danger'>Error!</small>", 
                                    type: "error",
                                    text: error,
                                    timer: 1000,
                                    html: true,
                                });
                            }
                        });    
                    } else { 
                        swal({
                            title: "Cancelled", 
                            type: "error",
                            text: "Your menu is safe :)",
                            timer: 1000,
                            html: true,
                        });    
                    } 
                });
            }); 

        });
                
        //ajax status change code
        function statusChange(menu_id) {
            $.ajax({
                    type: "GET",
                    url: "{{ route('usermenu.status', 0) }}",
                    data: "menu_id=" + menu_id,
                    cache:false,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        swal({
                            title: "<small class='text-success'>Success!</small>", 
                            type: "success",
                            text: "Status successfully updated!",
                            timer: 1000,
                            html: true,
                        });
                    },
                    error: function(response) {
                        error = "Failed.";
                        swal({
                            title: "<small class='text-danger'>Error!</small>", 
                            type: "error",
                            text: error,
                            timer: 2000,
                            html: true,
                        });
                    }
                });
            }

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