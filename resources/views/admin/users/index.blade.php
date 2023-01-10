@extends('admin.layouts.master')

@section('custom-css')
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

<!-- ============================================================== -->
<!-- Start Page Content -->
<!-- ============================================================== -->
<?php 

?>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6"><h4 class="card-title">{{ $title }}</h4></div>
                    <div class="col-md-6">
                        <span class="shortlink">
                            <a style="margin-right: 0px; font-size: 16px;" class="btn btn-outline-info btn-lg" href="{{ route('useradd.page') }}">
                                <i class="fa fa-plus-circle"></i> Add
                            </a>                            
                        </span>
                    </div>
                </div>
                <div class="row float-right">
                    <form action="{{ route('users.index') }}" method="get">
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
                    @php
                        $message = Session::get('msg');
                        if (isset($message))
                        {
                            echo"<div style='display:inline-block;width: auto;' class='alert alert-success'><strong>" .$message."</strong></div>";
                        }

                        Session::forget('msg');
                    @endphp
                    <table id="usersTable" class="table table-bordered table-striped"  name="usersTable">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            @php
                                $sl = 0;
                            @endphp
                        	@foreach($users as $user)
                                @php
                                    $sl++;
                                @endphp                        	
                            	<tr>
                                    <td>{{ $sl }}</td>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td>
                                        <?php echo App\Models\Link::status($user->id,$user->status)?>
                                    </td>
                                    <td class="text-nowrap">
                                    <?php echo App\Models\Link::action($user->id)?>
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
    {{ $users->appends(['search' => $search])->links('vendor.pagination.bootstrap-4') }}
</div>
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->


<!-- sample modal content for show category-->
<div id="showCategory" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel1">Show Category</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
                <div class="container" id="showContent">
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
        $(document).ready(function() {
            var updateThis ;

            // Switchery
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            $('.js-switch').each(function() {
                new Switchery($(this)[0], $(this).data());
            });

            //ajax          
            
            //ajax delete code
            $('#usersTable tbody').on( 'click', 'i.fa-trash', function () {
                $.ajaxSetup({
                  headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  }
                });

                user_id = $(this).parent().data('id');
                var user = this;
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
                            type: "DELETE",
                            // url: "{!! url('categories' ) !!}" + "/" + user_id,
                            url: "{{ route('users.index') }}" + "/" + user_id,
                            // data: "user_id=" + user_id,
                            dataType: "JSON",
                            data: {
                                id:user_id
                            },
                            cache:false,
                            contentType: false,
                            processData: false,
                            success: function(response) {
                                swal({
                                    title: "<small class='text-success'>Success!</small>", 
                                    type: "success",
                                    text: "user deleted Successfully!",
                                    timer: 1000,
                                    html: true,
                                });
                                table
                                    .row( $(user).parents('tr'))
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
                            text: "Your category is safe :)",
                            timer: 1000,
                            html: true,
                        });    
                    } 
                });
            }); 

        });
                
        //ajax status change code
        function statusChange(user_id) {
            $.ajax({
                    type: "GET",
                    url: "{{ route('user.changeuserStatus', 0) }}",
                    data: "user_id=" + user_id,
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
    </script>
@endsection