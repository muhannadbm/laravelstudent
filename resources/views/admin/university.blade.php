@extends('layouts.admin.fadmin')
@section('title','List of Universities')
@section('keywords','test words')
@section('description','about us')

@section('content')
    <section class="content-header">
        <h1>
            List of Universities
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Universities</a></li>
            <!-- <li class="active">Blank page</li>-->
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <i class="far fa-images animated infinite rollIn fa-lg" ></i>
                <h3 class="box-title"><a href="{{url('/')}}/admin/university/add"
                                         class="btn  btn-primary btn-sm" >Add University</a></h3>
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
                        <th>Place</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                    @foreach($datas as $univers)
                        <tr>
                            <td>{{$univers -> Id}}</td>
                            <td>{{$univers->name}}</td>
                            <td>{{$univers->typee}}</td>
                            <td>{{$univers->place}}</td>
                            <td>{{$univers->date}}</td>

                            <td><img src="{{url('/')}}/userfotos/{{$univers->photo}} " height= "50" ></td>
                            <td>{{$univers->description}}</td>
                            {{--<td> <a href="{{url('/')}}/admin/prod/gallery/{{$univers->Id}}"onclick="return !window.open(this.href,--}}
                            {{--'','top=100 left 200 width=700,height=600')">Gallery</a></td>--}}

                            <td>{{$univers->status}}</td>
                            <td ><a href="{{url('/')}}/admin/university/edit/{{$univers->Id}}"  class="btn btn-block btn-success btn-sm" >
                                    Edit</a></td>


                            <td>
                                <a href="{{url('/')}}/admin/university/delete/{{$univers->Id}}"
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
                    <li>{{$datas->links()}}</li>
                </ul>
            </div>
        </div>

        <!-- /.box -->

    </section>
    <!-- /.content -->

@endsection
<!-- /.box -->


<!-- /.content -->
