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
                            <a  class="btn btn-outline-info btn-lg" href="{{ route('menuadd.page')}}">
                                <i class="fa fa-plus-circle"></i> Add
                            </a>
                        </span>
                    </div>
                </div>   
                <div class="row float-right">
                    <form action="{{ route('menu.index') }}" method="get">
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
                <div class="table-responsive">
                    <table id="menusTable" class="table table-bordered table-striped"  name="menusTable">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Menu Name</th>
                                <th>Title</th>                                
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
                            @endphp                        	
                            <tr>
                                <td>{{ $sl }}</td>
                                <td>{{ $menu->menuName }}</td>
                                <td>{{ $menu->menuTitle }}</td>
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
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->

<!-- sample modal content for show menu-->
<div id="showmenu" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel1">Show menu</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
                <div class="container" id="showContent"  style="max-height: 80vh; overflow-y: scroll;">
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->



@endsection

@section('custom-js')

<script>
    $(document).ready(function () {
        $('.summernote').summernote({
            height: 200, // set editor height
            minHeight: null, // set minimum height of editor
            maxHeight: null, // set maximum height of editor
            focus: false // set focus to editable area after initializing summernote
        });

        var updateThis;

        // Switchery
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        $('.js-switch').each(function () {
            new Switchery($(this)[0], $(this).data());
        });

        //ajax            


        //ajax show code
        $('#menusTable tbody').on('click', 'i.fa-eye', function () {
            updateThis = this;
            menu_id = $(this).parent().data('id');
            $.ajax({
                type: "GET",
                url: "{{ route('menu.index') }}" + "/" + menu_id + "/edit",
                data: "menu_id=" + menu_id,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    menu = response.menu;
                    showFunction(menu);
                },
                error: function (response) {
                    error = "Something wrong.";
                    swal({
                        title: "<small class='text-danger'>Error!</small>",
                        type: "error",
                        text: error,
                        timer: 1000,
                        html: true,
                    });
                }
            });
        });

        //seperate the show function to understand
        function showFunction(menu) {

            if (menu.menuStatus == 1)
                menuStatus = `<div class="form-group row">
                                <span class="badge badge-pill badge-success">Active</span>
                            </div>`;
            else
                menuStatus = `<div class="form-group row">
                                <span class="badge badge-pill badge-danger">In-active</span>
                            </div>`
            var content = `<div class="form-group row">
                                <label class="col-sm-4 col-form-label form-control"><b>Menu Name</b></label>
                                <div class="col-sm-8 form-control">` + menu.menuName + `</div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label form-control"><b>Menu Title</b></label>
                                <div class="col-sm-8 form-control">` + menu.menuTitle + `</div>
                            </div>` + menuStatus;

            $('#showContent').html(content);
            $("#showmenu").modal();
        }

        //ajax delete code
        $('#menusTable tbody').on('click', 'i.fa-trash', function () {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            menu_id = $(this).parent().data('id');
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
            }, function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        type: "DELETE",
                        url: "{{ route('menu.index') }}" + "/" + menu_id,
                        dataType: "JSON",
                        data: {
                            id: menu_id
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (response) {
                            swal({
                                title: "<small class='text-success'>Success!</small>",
                                type: "success",
                                text: "menu deleted Successfully!",
                                timer: 1000,
                                html: true,
                            });
                            table
                                    .row($(menu).parents('tr'))
                                    .remove()
                                    .draw();
                        },
                        error: function (response) {
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
            url: "{{ route('menu.changeStatus', 0) }}",
            data: "menu_id=" + menu_id,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                swal({
                    title: "<small class='text-success'>Success!</small>",
                    type: "success",
                    text: "Status successfully updated!",
                    timer: 1000,
                    html: true,
                });
            },
            error: function (response) {
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

    function summernote() {
        $('.summernote').summernote({
            height: 200, // set editor height
            minHeight: null, // set minimum height of editor
            maxHeight: null, // set maximum height of editor
            focus: false // set focus to editable area after initializing summernote
        });
    }
</script>
@endsection