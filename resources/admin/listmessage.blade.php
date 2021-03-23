
@extends('layouts.admin.fadmin')


@section('content')
    <section class="content-header">
        <h1>
            List of Messages

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home page</a></li>
            <li><a href="#">Messages</a></li>
            <li class="active">Blank page</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title"></h3>
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
                        <th>Subject</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Notes</th>

                        <th>Read</th>

                        <th>Delete</th>

                    </tr>
                    @foreach($dat as $cat)
                        <tr>
                            <td>{{$cat -> Id}}</td>
                            <td>{{$cat->name}}</td>
                            <td>{{$cat->subject}}</td>
                            <td>{{$cat->email}}</td>
                            <td>{{$cat->msg}}</td>
                            <td>{{$cat->status}}</td>
                            <td>{{$cat->notes}}</td>
                            <td ><a href="{{url('/')}}/admin/messages/edit/{{$cat->Id}}"  class="btn btn-block btn-success btn-sm" >
                                    Edit</a>
                            </td>

                            <td>
                                <a href="{{url('/')}}/admin/messages/delete/{{$cat->Id}}" class="btn btn-block btn-danger btn-sm"
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
