@extends('layouts.admin.fadmin')

@section('content')
    <section class="content-header">
        <h1>
            Edit Department

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home Page</a></li>
            <li><a href="{{url('/')}}/admin/department"><i class="fa fa-dashboard"></i>Department List</a></li>

            <li><a href="#">Edit Department</a></li>
        </ol>
    </section>
    <div class="box box-primary">
        <!-- <div class="box-header with-border">
             <h3 class="box-title">Add</h3>
         </div> -->
        <!-- /.box-header -->
        <!-- form start -->
        <form  action="{{url('/')}}/admin/department/update/{{$data[0]->Id}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="box-body">
                <div class="form-group">
                    <label>Name of Department</label>
                    <input type="text" name="namee" class="form-control" value="{{$data[0]->namee}}" id="name" placeholder="Enter Name">
                </div>
                {{--<div class="form-group">--}}
                {{--<label >Keywords</label>--}}
                {{--<input type="text" name="keywords" class="form-control" value="{{$data[0]->keywords}}" id="keyword" placeholder="Keywords">--}}
                {{--</div>--}}


                <div class="form-group">
                    <label >Description</label>
                    <input type="text" name="description" value="{{$data[0]->description}}" class="form-control" id="desc" placeholder="description">
                </div>

                <div class="form-group">
                    <label >Seats</label>
                    <input type="text" name="seats" value="{{$data[0]->seats}}" class="form-control"  placeholder="seats">
                </div>

                {{--<div class="form-group">--}}
                    {{--<label >University_id</label>--}}
                    {{--<input type="text" name="university_id" value="{{$data[0]->university_id}}" class="form-control"  placeholder="university id">--}}
                {{--</div>--}}

                {{--<div class="form-group">--}}
                    {{--<label >University_name</label>--}}
                    {{--<input type="text" name="university_name" value="{{$data[0]->university_name}}" class="form-control"  placeholder="university name">--}}
                {{--</div>--}}


                <!-- <div class="form-group">
                     <label >Keywords</label>
                     <input type="text" name="keywords"class="form-control" id="exampleInputPassword1" placeholder="Keywords">
                 </div> -->


                <div class="form-group">
                    <label>University_name</label>
                    <select class="form-control" name="university_name">
                        <option >{{$data[0]->university_name}}</option>

                    @foreach($loka as $md)
                            <option >{{$md->name}}</option>
                        @endforeach
                    </select>
                </div>







                <div class="form-group">
                    <label for="exampleInputFile">choose file</label>
                    <input type="file"  value="{{$data[0]->photo}}" id="fot" name="photo">

                    <p class="help-block">Choose Photos File</p>
                </div>
                <img src="{{url('/')}}/userfotos/{{$data[0]->photo}}" height="100">
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        <a href="{{url('/')}}/admin/department"><button  class="btn btn-primary" >Cancel</button></a>


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
