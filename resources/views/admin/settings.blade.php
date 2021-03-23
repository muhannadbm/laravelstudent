@extends('layouts.admin.fadmin')

@section('content')





    <section class="content-header">
        <h1>
            Settings page
            <small>it all starts here</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home</a></li>

            <li class="active">Settings page</li>
        </ol>
    </section>

    <!-- Main content -->

    @if (\Session::has('message'))
        <div class="alert alert-success">
            <p>{{\Session::get('message')}}</p>
        </div><br/>
    @endif

    <section class="content">

        <!-- Default box -->
        <div class="box">


            <div class="row">
                <div class="col-md-12">


                    <!-- Custom Tabs -->
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#tab_1" data-toggle="tab">General</a></li>
                            <li><a href="#tab_2" data-toggle="tab">About us</a></li>



                            <li class="pull-right"><a href="#" class="text-muted">setting<i class="fa fa-gear"></i></a></li>
                        </ul>
                        <br/>

                        <div class="box">
                            <form method="post" action="{{route('updatesetting')}}">
                                @csrf
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab_1">


                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Site Title</label>

                                            <div class="col-sm-10">
                                                <input type="text" name="name" class="form-control" value="{{$data[0]->name}}">
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label  class="col-sm-2 control-label">Description</label>

                                            <div class="col-sm-10">
                                                <input type="text" name="description" value="{{$data[0]->description}}" class="form-control" id="inputPassword3" >
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label  class="col-sm-2 control-label">Address</label>

                                            <div class="col-sm-10">
                                                <input type="text" name="address" value="{{$data[0]->address}}" class="form-control"  >
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label  class="col-sm-2 control-label">Tel</label>

                                            <div class="col-sm-10">
                                                <input type="text" name="phone" value="{{$data[0]->phone}}" class="form-control"  >
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label  class="col-sm-2 control-label">Email</label>

                                            <div class="col-sm-10">
                                                <input type="text" name="email" value="{{$data[0]->email}}" class="form-control"  >
                                            </div>
                                        </div>

                                        <!-- /.box-body -->

                                        <!-- /.box-footer -->


                                    </div>
                                    <!-- /.tab-pane -->

                                    <!-- /.tab-pane -->
                                    <div class="tab-pane" id="tab_2">
                                        <b>About Us</b>

                                        <textarea name="info">
                                        {{$data[0]->aboutus}}
                                     </textarea>

                                    </div>


                                    <!-- /.tab-pane -->
                                </div>
                                <div class="box-footer">
                                    <button type="submit" value="update" class="btn btn-info pull-right">Update</button>
                                </div>

                            </form>
                        </div>

                        <!-- /.tab-content -->
                    </div>
                    <!-- nav-tabs-custom -->


                </div></div>



            <!-- /.box-footer-->
        </div>
        <!-- /.box -->

    </section>




@endsection

@section('java')
    <script src="{{url('/')}}/assets/admin/bower_components/ckeditor/ckeditor.js"></script>

    <script>
        $(function () {
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            CKEDITOR.replace('info')
            //bootstrap WYSIHTML5 - text editor
            // $('.textarea').wysihtml5()
        })
    </script>




@endsection
