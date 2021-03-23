@extends('layouts.admin.fadmin')
@section('title','List of Department')
@section('keywords','test words')
@section('description','about us')

@section('content')
    <section class="content-header">
        <h1>
            List of Department
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Department</a></li>
            <!-- <li class="active">Blank page</li>-->
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <i class="far fa-images animated infinite rollIn fa-lg" ></i>
                <h3 class="box-title"><a href="{{url('/')}}/admin/department/add"
                                         class="btn  btn-primary btn-sm" >Add Department</a></h3>
            </div>


            @if(session()->get('success'))
                <div class="alert alert-success">
                    {{ session()->get('success') }}
                </div><br />
            @endif

            <div class="col-md-4">
                <form action="{{url('/')}}/admin/search" method="get"   >
                    <div class="input-group">
                        <input type="search" name="search" class="form-control">
                        <span class="input-group-prepend">
                                <button type="submit" class="btn btn-primary" style="">search</button>
                            </span>
                    </div>
                </form>
            </div>


            <!-- /.box-header -->
            <div class="box-body">
                <table class="table table-bordered">
                    <tbody><tr>



                        <th>ID</th>
                        <th>Name</th>
                        {{--<th>University_id</th>--}}
                        <th>University_name</th>
                        <th>Seats</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                    @foreach($data as $dept)
                        <tr>
                            <td>{{$dept -> Id}}</td>
                            <td>{{$dept->namee}}</td>
                            {{--<td>{{$dept->university_id}}</td>--}}
                            <td>{{$dept->name}}</td>
                            <td>{{$dept->seats}}</td>
                            <td>{{$dept->description}}</td>
                            <td><img src="{{url('/')}}/userfotos/{{$dept->photo}} " height= "50" ></td>

                            {{--<td> <a href="{{url('/')}}/admin/prod/gallery/{{$univers->Id}}"onclick="return !window.open(this.href,--}}
                            {{--'','top=100 left 200 width=700,height=600')">Gallery</a></td>--}}


                            <td ><a href="{{url('/')}}/admin/department/edit/{{$dept->Id}}"  class="btn btn-block btn-success btn-sm" >
                                    Edit</a></td>


                            <td>
                                <a href="{{url('/')}}/admin/department/delete/{{$dept->Id}}"
                                   class="btn btn-block btn-danger btn-sm"
                                   onclick="return confirm('Are You Sure!!??')">
                                    Delete</a>
                            </td>



                        </tr>
                    @endforeach


                    </tbody></table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <ul class="pagination pagination-sm no-margin pull-right">
                    <li>{{$data->links()}}</li>
                </ul>
            </div>
        </div>

        <!-- /.box -->

    </section>
    <!-- /.content -->

@endsection
<!-- /.box -->


<!-- /.content -->
