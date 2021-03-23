@extends('layouts.admin.fadmin')

@section('content')
    <section class="content-header">
        <h1>
            Add University

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Add University</a></li>
        </ol>
    </section>
    <div class="box box-primary">
        <!-- <div class="box-header with-border">
             <h3 class="box-title">Add</h3>
         </div> -->
        <!-- /.box-header -->
        <!-- form start -->
        <form  action="{{url('/')}}/admin/university/save" method="post" enctype="multipart/form-data">
            @csrf
            <div class="box-body">
                <div class="form-group">
                    <label>Name of University</label>
                    <input type="text" required name="name" class="form-control" id="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label >Keywords</label>
                    <input type="text"  name="keywords" class="form-control" id="keyword" placeholder="Keywords">
                </div>


                {{--<div class="form-group">--}}
                    {{--<label >Description</label>--}}
                    {{--<input type="text" name="description" class="form-control" id="desc" placeholder="description">--}}
                {{--</div>--}}


                <!-- <div class="form-group">
                     <label >Keywords</label>
                     <input type="text" name="keywords"class="form-control" id="exampleInputPassword1" placeholder="Keywords">
                 </div> -->


                <div class="form-group">
                    <label>Type</label>

                    <input type="text"  name="typee" class="form-control" id="type" placeholder="type">

                    {{--<select class="form-control" name="typee" required>--}}

                    {{--@foreach($type as $typ)--}}
                            {{--<option >{{$typ->typee}}</option>--}}
                        {{--@endforeach--}}
                    {{--</select>--}}
                </div>

                <div class="form-group">
                    <label>Place</label>
                    {{--<select class="form-control" name="place" >--}}
                        <input type="text"  name="place" class="form-control" id="keyword" placeholder="type">

                    {{--</select>--}}
                </div>

                <div class="form-group">
                    <label >Date</label>
                    <input type="text" name="date"  class="form-control" id="" placeholder="date">
                </div>


                <div class="form-group">
                    <label >Description</label>
                    <textarea name="description" id="note" rows="10" cols="80" class="form-control"></textarea>

                </div>

                <div class="form-group">
                    <label>Status</label>
                    <select class="form-control" name="status">
                        <option>Available</option>
                        <option>Unavailable</option>
                    </select>
                </div>


                <div class="form-group">
                    <label for="exampleInputFile">choose file</label>
                    <input type="file" id="fot" name="photo">

                    <p class="help-block">Choose Photos File</p>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Check me out
                    </label>
                </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
@endsection

@section('java')
    <script src="{{url('/')}}/assets/admin/bower_components/ckeditor/ckeditor.js"></script>

    <script>
        $(function () {
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            CKEDITOR.replace('note')
            //bootstrap WYSIHTML5 - text editor
            // $('.textarea').wysihtml5()
        })
    </script>
@endsection
