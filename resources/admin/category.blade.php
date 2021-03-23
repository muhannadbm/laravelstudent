
@extends('layouts.admin.fadmin')
@section('title','categories')
@section('keywords','test words')
@section('description','about us')

@section('content')
    <section class="content-header">
        <h1>
            List of Category

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Categories</a></li>
            <li class="active">Blank page</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title"><a href="{{url('/')}}/admin/category/add" class="btn  btn-primary btn-sm">Add Category</a></h3>
            </div>


            @if(session()->get('success'))
                <div class="alert alert-success">
                    {{ session()->get('success') }}
                </div><br />
        @endif
        <!-- /.box-header -->
            <div class="box-body">
                <table class="table table-bordered">
                    <tbody><tr>



                        <th>ID</th>
                        <th>Name</th>
                        <th>Up-Category</th>
                        <th>Keywords</th>
                        <th>Description</th>
                        <th>fotos</th>
                        <th>status</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                    {{--@foreach($category as $cat)--}}
                        {{--<tr>--}}
                            {{--<td>{{$cat -> Id}}</td>--}}
                            {{--<td>{{$cat->ad}}</td>--}}
                            {{--<td>{{$cat->up_id}}</td>--}}
                            {{--<td>{{$cat->keywords}}</td>--}}
                            {{--<td>{{$cat->description}}</td>--}}
                            {{--<td><img src="{{url('/')}}/userfotos/{{$cat->foto}} " height= "50" ></td>--}}
                            {{--<td>{{$cat->status}}</td>--}}
                            {{--<td ><a href="{{url('/')}}/admin/category/edit/{{$cat->Id}}"  class="btn btn-block btn-success btn-sm" >--}}
                                    {{--Edit</a></td>--}}
                            {{--<td>--}}
                                {{--<a href="{{url('/')}}/admin/category/delete/{{$cat->Id}}"class="btn btn-block btn-danger btn-sm"--}}
                                   {{--onclick="return confirm('Are You Sure!!??')">--}}
                                    {{--Delete</a>--}}
                            {{--</td>--}}
                        {{--</tr>--}}
                    {{--@endforeach--}}


                    </tbody></table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <ul class="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">«</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>

        <!-- /.box -->

    </section>
    <!-- /.content -->

@endsection
<!-- /.box -->


<!-- /.content -->
