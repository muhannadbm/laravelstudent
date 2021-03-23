
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



                        <th>رقم الرسالة</th>
                        <th>الاسم</th>
                        <th>العنوان</th>
                        <th>البريد الالكتروني</th>
                        <th>الرسالة</th>
                        <th>الحالة</th>
                        <th>ملاحظات</th>
                        <th>ا</th>

                        <th>اقرأ</th>

                        <th>حذف</th>

                    </tr>
                    @foreach($dat as $cat)
                        <tr>
                            <td>{{$cat -> Id}}</td>
                            <td>{{$cat->name}}</td>
                            <td>{{$cat->subject}}</td>
                            <td>{{$cat->email}}</td>
                            <td>{{$cat->msg}}</td>
                            <td  @if($cat->status=="غير مقروءة") style="color: green; font-weight: bold;" @else style="color: maroon; font-weight: bold;"  @endif>{{$cat->status}}</td>
                            <td>{{$cat->notes}}</td>
                            <td>{{$cat->created_at}}</td>
                            <td ><a href="{{url('/')}}/admin/messages/edit/{{$cat->Id}}"  class="btn btn-block btn-success btn-sm" >
                                    اقرأ الرسالة</a>
                            </td>

                            <td>
                                <a href="{{url('/')}}/admin/messages/delete/{{$cat->Id}}" class="btn btn-block btn-danger btn-sm"
                                   onclick="return confirm('Are You Sure!!??')">
                                    حذف</a>
                            </td>
                        </tr>
                    @endforeach


                    </tbody></table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <ul class="pagination pagination-sm no-margin pull-right">
                    <li>{{$dat->links()}}</li>
                </ul>
            </div>
        </div>

        <!-- /.box -->

    </section>
    <!-- /.content -->

@endsection
<!-- /.box -->


<!-- /.content -->
