@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12"><h4 class="card-title">{{ $title }}</h4></div>
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
                
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-horizontal" action="{{route('settings.update')}}" method="POST" enctype="multipart/form-data" name="editSettings">
                            {{ csrf_field() }}

                            <input type="hidden" name="settingId" value="{{$settings->id}}">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteTitle') ? ' has-danger' : '' }}">
                                        <label for="siteTitle">Website Title</label>
                                            <input type="text" class="form-control" name="siteTitle" value="{{ @$settings->siteTitle }}" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteName') ? ' has-danger' : '' }}">
                                        <label for="siteName">Website Name</label>
                                            <input type="text" class="form-control form-control-danger" name="siteName" value="{{ @$settings->siteName }}" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteLogo') ? ' has-danger' : '' }}">
                                        <label for="website-logo">Website Logo</label>
                                        <input type="file" class="form-control" id="siteLogo" aria-describedby="fileHelp" name="siteLogo">
                                        <img src="{{ asset('/').@$settings->siteLogo }}" style="width:75px;">
                                        @if ($errors->has('siteLogo'))
                                            @foreach($errors->get('siteLogo') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('sitefavIcon') ? ' has-danger' : '' }}">
                                        <label for="website-fav-icon">Website Fav Icon</label>
                                        <input type="file" class="form-control" id="sitefavIcon" aria-describedby="fileHelp" name="sitefavIcon">
                                        <img src="{{ asset('/').@$settings->sitefavIcon }}" style="width:75px;">
                                        @if ($errors->has('sitefavIcon'))
                                            @foreach($errors->get('sitefavIcon') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('mobile1') ? ' has-danger' : '' }}">
                                        <label for="phone-number-1">Phone Number 1</label>
                                        <input type="text" class="form-control form-control-danger" placeholder="First Phone Number" name="mobile1" value="{{ @$settings->mobile1 }}" required>
                                        @if ($errors->has('mobile1'))
                                            @foreach($errors->get('mobile1') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('mobile2') ? ' has-danger' : '' }}">
                                        <label for="phone-number-2">Phone Number 2</label>
                                        <input type="text" class="form-control form-control-danger" placeholder="Second Phone Number" name="mobile2" value="{{ @$settings->mobile2 }}">
                                        @if ($errors->has('mobile2'))
                                            @foreach($errors->get('mobile2') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteEmail1') ? ' has-danger' : '' }}">
                                        <label for="email-address-1">Email Address 1</label>
                                        <input type="text" class="form-control form-control-danger" placeholder="Email Address" name="siteEmail1" value="{{ @$settings->siteEmail1 }}">
                                        @if ($errors->has('siteEmail1'))
                                            @foreach($errors->get('siteEmail1') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteEmail2') ? ' has-danger' : '' }}">
                                        <label for="email-address-2">Email Address 2</label>
                                        <input type="text" class="form-control form-control-danger" placeholder="Email Address" name="siteEmail2" value="{{ @$settings->siteEmail2 }}">
                                        @if ($errors->has('siteEmail2'))
                                            @foreach($errors->get('siteEmail2') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteAddress1') ? ' has-danger' : '' }}">
                                        <label for="web-address-1">Website Address 1</label>
                                        <textarea class="form-control form-control-danger" name="siteAddress1" required>{{ @$settings->siteAddress1 }}</textarea>
                                        @if ($errors->has('siteAddress1'))
                                            @foreach($errors->get('siteAddress1') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('siteAddress2') ? ' has-danger' : '' }}">
                                        <label for="web-address-2">Website Address 2</label>
                                        <textarea class="form-control form-control-danger" name="siteAddress2" required>{{ @$settings->siteAddress2 }}</textarea>
                                        @if ($errors->has('siteAddress2'))
                                            @foreach($errors->get('siteAddress2') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group {{ $errors->has('metaTitle') ? ' has-danger' : '' }}">
                                                <label for="meta-title">Meta Title</label>
                                                <input type="text" class="form-control form-control-danger" placeholder="Meta Title" name="metaTitle" value="{{ @$settings->metaTitle }}">
                                                @if ($errors->has('metaTitle'))
                                                    @foreach($errors->get('metaTitle') as $error)
                                                        <div class="form-control-feedback">{{ $error }}</div>
                                                    @endforeach
                                                @endif
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                             <div class="form-group {{ $errors->has('metaKeyword') ? ' has-danger' : '' }}">
                                                <label for="meta-keyword">Meta keyword</label>
                                                <input type="text" class="form-control form-control-danger" name="metaKeyword" value="{{ @$settings->metaKeyword }}" data-role="tagsinput">
                                                @if ($errors->has('metaKeyword'))
                                                    @foreach($errors->get('metaKeyword') as $error)
                                                        <div class="form-control-feedback">{{ $error }}</div>
                                                    @endforeach
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group {{ $errors->has('description') ? ' has-danger' : '' }}">
                                        <label for="meta-description">Meta description</label>
                                        <textarea rows="8" class="form-control" name="metaDescription">{{ @$settings->metaDescription }}</textarea>
                                        @if ($errors->has('metaDescription'))
                                            @foreach($errors->get('metaDescription') as $error)
                                                <div class="form-control-feedback">{{ $error }}</div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 m-b-20 text-right">
                                    <button type="submit" class="btn btn-outline-info btn-lg waves-effect">Update Information</button>
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
    document.forms['editSettings'].elements['sitestatus'].value = "{{$settings->sitestatus}}";
</script>

@endsection