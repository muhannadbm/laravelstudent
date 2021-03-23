
@extends('layouts.admin.fadmin')


@section('content')
    <section class="content-header">
        <h1>
            Edit Message

        </h1>
        <ol class="breadcrumb">
            <li><a href="{{url('/')}}/admin"><i class="fa fa-dashboard"></i> Home Page</a></li>
            <li><a href="{{url('/')}}/admin/messages"><i class="fa fa-dashboard"></i>MessageList</a></li>

            <li><a href="#">Edit Message</a></li>
        </ol>
    </section>
    <div class="box box-primary">
        <!-- <div class="box-header with-border">
             <h3 class="box-title">Add</h3>
         </div> -->
        <!-- /.box-header -->
        <!-- form start -->
        <form  action="{{url('/')}}/admin/messages/update/{{$data[0]->Id}}" method="post" >
            @csrf
            <div class="box-body">
                <div class="form-group">
                    <label>Name</label>
                    {{$data[0]->name}}
                </div>
                <div class="form-group">
                    <label >Email</label>
                    {{$data[0]->email}}
                </div>


                <div class="form-group">
                    <label >Subject</label>
                    {{$data[0]->subject}}
                </div>



                <div class="form-group">
                    <label >Date</label>
                    Sent at:{{$data[0]->created_at}}
                    updated at:{{$data[0]->updated_at}}

                </div>

                <div class="form-group">
                    <label >Message</label>
                    {{$data[0]->msg}}

                </div>



                <div class="form-group">
                    <label>Status</label>
                    {{$data[0]->status}}
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea name="notes" class="form-control" rows="5">{{$data[0]->notes}}</textarea>
                </div>



            </div>
            <!-- /.box-body -->

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
@endsection

