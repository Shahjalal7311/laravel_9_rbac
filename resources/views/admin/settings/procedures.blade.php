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
            <div class="card-body">
                <h4 class="card-title">Md's message</h4>
                @if(Session::get('message'))
                <h3 class="text-center alert-success alert" id="xyz">{{ Session::get('message') }}</h3>
                @endif
                    <form action="{{ route('settings.procedures') }}" method="POST">
                        {{ csrf_field() }}

                        <div class="form-group row {{ $errors->has('description') ? ' has-danger' : '' }}">
                            <div class="col-sm-12">
                                <textarea class="summernote form-control form-control-danger" name="message">{!! \App\helperClass::_readFile('uploads/procedures.txt') !!}</textarea>
                            </div>
                        </div>

                        <div class="col-md-12 m-b-20 text-right">    
                            <button type="submit" class="btn btn-info waves-effect">Update</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->


@endsection

@section('custom-js')
<script type="text/javascript">
    $(document).ready(function() {
            $('.summernote').summernote({
                height: 600, // set editor height
                minHeight: null, // set minimum height of editor
                maxHeight: null, // set maximum height of editor
                focus: false // set focus to editable area after initializing summernote
            });
        });
</script>
@endsection