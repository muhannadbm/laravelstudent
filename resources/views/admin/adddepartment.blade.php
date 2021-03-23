@extends('layouts.admin.fadmin')

@section('content')
    <section class="content-header">
        <h1>
            Add Department

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Add Department</a></li>
        </ol>
    </section>
    <div class="box box-primary">
        <!-- <div class="box-header with-border">
             <h3 class="box-title">Add</h3>
         </div> -->
        <!-- /.box-header -->
        <!-- form start -->
        <form  action="{{url('/')}}/admin/department/save" method="post" enctype="multipart/form-data">
            @csrf
            <div class="box-body">
                <div class="form-group">
                    <label>Name of department</label>
                    <input type="text" required name="namee" class="form-control" id="name" placeholder="Enter Name">
                </div>



                {{--<div class="form-group">--}}
                    {{--<label>University_id</label>--}}

                    {{--<input type="text"  name="university_id" class="form-control" id="type" placeholder="university id">--}}

                    {{--<select class="form-control" name="typee" required>--}}

                    {{--@foreach($type as $typ)--}}
                    {{--<option >{{$typ->typee}}</option>--}}
                    {{--@endforeach--}}
                    {{--</select>--}}
                {{--</div>--}}
                <div class="form-group">
                    <label>University_name</label>
                    <select class="form-control" name="university_name" required>
                        @foreach($univerid as $md)
                            <option >{{$md->name}}</option>
                        @endforeach
                    </select>
                </div>
                {{--<div class="form-group">--}}
                    {{--<label>University_name</label>--}}
                    {{--<select class="form-control" name="place" >--}}
                    {{--<input type="text"  name="university_name" class="form-control"  placeholder="name of university">--}}
                    {{--</select>--}}
                {{--</div>--}}

                <div class="form-group">
                    <label>Seats</label>
                    {{--<select class="form-control" name="place" >--}}
                    <input type="text"  name="seats" class="form-control" id="seats" placeholder="seats">
                    {{--</select>--}}
                </div>




                <div class="form-group">
                    <label >Description</label>
                    <textarea name="description" id="note" rows="10" cols="80" class="form-control"></textarea>

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
