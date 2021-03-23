@extends('layouts.admin.fadmin')

@section('content')
    <section class="content-header">
        <h1>
            Edit University

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home Page</a></li>
            <li><a href="{{url('/')}}/admin/university"><i class="fa fa-dashboard"></i>University List</a></li>

            <li><a href="#">Edit University</a></li>
        </ol>
    </section>
    <div class="box box-primary">
        <!-- <div class="box-header with-border">
             <h3 class="box-title">Add</h3>
         </div> -->
        <!-- /.box-header -->
        <!-- form start -->
        <form  action="{{url('/')}}/admin/university/update/{{$data[0]->Id}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="box-body">
                <div class="form-group">
                    <label>Name of University</label>
                    <input type="text" name="name" class="form-control" value="{{$data[0]->name}}" id="name" placeholder="Enter Name">
                </div>
                {{--<div class="form-group">--}}
                    {{--<label >Keywords</label>--}}
                    {{--<input type="text" name="keywords" class="form-control" value="{{$data[0]->keywords}}" id="keyword" placeholder="Keywords">--}}
                {{--</div>--}}


                <div class="form-group">
                    <label >Description</label>
                    <input type="text" name="description" value="{{$data[0]->description}}" class="form-control" id="desc" placeholder="description">
                </div>


                <!-- <div class="form-group">
                     <label >Keywords</label>
                     <input type="text" name="keywords"class="form-control" id="exampleInputPassword1" placeholder="Keywords">
                 </div> -->


                <div class="form-group">
                    <label>Type</label>
                    <select class="form-control" name="typee">
                        <option selected value="{{$data[0]->typee}}">{{$data[0]->typee}}</option>
                        @foreach($data as $md)
                            <option value="{{$md->Id}}">{{$md->typee}}</option>
                        @endforeach
                    </select>
                </div>



                <div class="form-group">
                    <label >Place</label>
                    <input type="text" name="place" value="{{$data[0]->place}}" class="form-control" id="" placeholder="place">
                </div>

                <div class="form-group">
                    <label >Date</label>
                    <input type="text" name="date" value="{{$data[0]->date}}" class="form-control" id="" placeholder="date">
                </div>



                {{--<div class="form-group">--}}
                    {{--<label >Notes</label>--}}
                    {{--<textarea name="notes"  id="note" rows="10" cols="80" class="form-control">--}}
                  {{--<p>{{$data[0]->notes}}</p>--}}
                {{--</textarea>--}}

                {{--</div>--}}

                <div class="form-group">
                    <label>Status</label>
                    <select class="form-control" name="status">
                        <option selected>{{$data[0]->status}}</option>
                        <option>Available</option>
                        <option>UnAvailable</option>
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
        <a href="{{url('/')}}/admin/university"><button  class="btn btn-primary" >Cancel</button></a>


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
