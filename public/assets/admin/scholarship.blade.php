
@extends('layouts.admin.fadmin')
@section('title','List of Universities')
@section('keywords','test words')
@section('description','about us')

@section('content')
    <section class="content-header">
        <h1>
            List of Scholarships

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Scholarships</a></li>
            <!-- <li class="active">Blank page</li>-->
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <i class="far fa-images animated infinite rollIn fa-lg" ></i>
                <h3 class="box-title"><a href="{{url('/')}}/admin/scholarship/add"
                                         class="btn  btn-primary btn-sm" >Add Scholarship</a></h3>
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
                        <th>Type</th>
                        {{--<th>Place</th>--}}
                        <th>Date</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Detail</th>

                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                    @foreach($data as $scholar)
                        <tr>
                            <td>{{$scholar -> Id}}</td>
                            <td>{{$scholar->name}}</td>
                            <td>{{$scholar->typee}}</td>
                            {{--<td>{{$scholar->place}}</td>--}}
                            <td>{{$scholar->date}}</td>

                            <td><img src="{{url('/')}}/userfotos/{{$scholar->photo}} " height= "50" ></td>
                            <td>{{$scholar->description}}</td>
                            <td>{{$scholar->detail}}</td>

                            {{--<td> <a href="{{url('/')}}/admin/prod/gallery/{{$univers->Id}}"onclick="return !window.open(this.href,--}}
                            {{--'','top=100 left 200 width=700,height=600')">Gallery</a></td>--}}

                            <td>{{$scholar->status}}</td>
                            <td ><a href="{{url('/')}}/admin/scholarship/edit/{{$scholar->Id}}"  class="btn btn-block btn-success btn-sm" >
                                    Edit</a></td>


                            <td>
                                <a href="{{url('/')}}/admin/scholarship/delete/{{$scholar->Id}}"data-toggle="modal"
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
