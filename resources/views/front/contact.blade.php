<head>
    <title>تواصل معنا</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/animate.css">

    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/owl.carousel.min.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/magnific-popup.css">

    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/aos.css">

    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/ionicons.min.css">

    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/flaticon.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/icomoon.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/style.css">
    <link rel="stylesheet" href="{{url('/')}}/assets/front/css/style1.css">
    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/bootstrap/css/bootstrap.min.css">--}}
    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/bootstrap/css/bootstrap.css">--}}
    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/wow/wow.min.css">--}}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/now-ui-kit.css') }}" rel="stylesheet">
    <link href="{{ asset('vue/JavascriptComponents.vue') }}">

</head>


@extends('layouts.front.fhome')

@section('content')


<section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('assets/front/images/bg_1.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" style="height: 93px">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">تواصل معنا</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                    <span>تواصل معنا <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<section class="py-0 ftco-section contact-section">
    <div class="container">
        <div class="row d-flex contact-info">
            <div class="col-md-3 d-flex">
                <div class="align-self-stretch box p-4 text-center" style="background-color: #232323">
                    <h3 class="mb-4" style="color: darkorange">العنوان</h3>
                    <p style="color: white">{{$test[0]->address}}</p>
                </div>
            </div>
            <div class="col-md-3  d-flex">
                <div class="bg-site align-self-stretch box p-4 text-center"style="background-color: #232323">
                    <h3 class="mb-4" style="color: darkorange">رقم التواصل</h3>
                    <p><a href="tel://{{$test[0]->phone}}"style="color: white">{{$test[0]->phone}}</a></p>
                </div>
            </div>
            <div class="col-md-3  d-flex">
                <div class="bg-site align-self-stretch box p-4 text-center"style="background-color: #232323">
                    <h3 class="mb-4"style="color: darkorange">البريد الالكتروني</h3>
                    <p><a href="mailto:{{$test[0]->email}}"style="color: white">{{$test[0]->email}}</a></p>
                </div>
            </div>
            <div class="col-md-3 d-flex">
                <div class="bg-site align-self-stretch box p-4 text-center"style="background-color: #232323" >
                    <h3 class="mb-4" style="color: darkorange">الموقع الالكتروني</h3>
                    <p><a href="#"style="color: white">yoursite.com</a></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section mt-4 ftco-no-pt ftco-no-pb contact-section">
    <div class="container">
        <div class="row d-flex align-items-stretch no-gutters">
            <div class="col-md-6 p-4 p-md-5 order-md-last bg-light">
                <form action="{{url('/message')}}" method="post">
                    <div class="form-group">
                        <input name="name" type="text" class="form-control" placeholder="الاسم">
                    </div>
                    <div class="form-group">
                        <input name="email" type="text" class="form-control" placeholder="البريد الالكتروني">
                    </div>
                    <div class="form-group">
                        <input name="subject" type="text" class="form-control" placeholder="العنوان">
                    </div>
                    <div class="form-group">
                        <textarea name="msg" id="" cols="30" rows="7" class="form-control" placeholder="الرسالة"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="إرسال الرسالة" class="btn btn-primary py-3 px-5">
                    </div>
                    <input type="hidden" name="status" value="غير مقروءة"></input>
                    {{ csrf_field() }}
                </form>
            </div>
            <div class="col-md-6 d-flex align-items-stretch">
                <div id="map"></div>
            </div>
        </div>
    </div>
</section>
@endsection
<script src="{{url('/')}}/assets/front/js/jquery.min.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery-migrate-3.0.1.min.js"></script>
<script src="{{url('/')}}/assets/front/js/popper.min.js"></script>
<script src="{{url('/')}}/assets/front/js/bootstrap.min.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery.easing.1.3.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery.waypoints.min.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery.stellar.min.js"></script>
<script src="{{url('/')}}/assets/front/js/owl.carousel.min.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery.magnific-popup.min.js"></script>
<script src="{{url('/')}}/assets/front/js/aos.js"></script>
<script src="{{url('/')}}/assets/front/js/jquery.animateNumber.min.js"></script>
<script src="{{url('/')}}/assets/front/js/scrollax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
<script src="{{url('/')}}/assets/front/js/google-map.js"></script>
<script src="{{url('/')}}/assets/front/js/main.js"></script>
