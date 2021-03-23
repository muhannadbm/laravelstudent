<head>
    <title>تفاصيل المنحة</title>
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


</head>

@extends('layouts.front.fhome')

@section('content')
<section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe97c4DFFKUeJtVxPF9mQSbfvxQq8V-l_IYM88T0g8TwDvGku9');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center"  style="height: 93px">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">تفاصيل المنحة</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                    <span class="mr-2"><a href="{{url('/')}}/scholarship">المنح <i class="ion-ios-arrow-forward"></i></a></span>
                    <span>تفاصيل المنحة <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>
@foreach($results as $res)



<section class="p-5 ftco-section">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-8 ftco-animate">
                <div class="row d-flex justify-content-center" style="height: 54px;">
                    <h2 class="mb-0">{{$res->name}}</h2> </div>
                <div class="row d-flex justify-content-center" style="height: 62px;">
                    <h4 class="mt-0 mb-0"style="color: brown;">{{$res->date}} :تاريخ انتهاء التسجيل</h4></div>
                <p><a href="{{url('/')}}/contact" class="btn btn-primary">تواصل معنا الأن للتسجيل</a></p>
                <p>{!! $res->detail !!}</p>
                <p>
                    <img src="{{url('/')}}/userfotos/{{$res->photo}}" alt="" class="img-fluid">
                </p>
                <div class="row d-flex justify-content-center" style="height: 54px;">
                    <h3>عن المنحة</h3> </div>
                <p>{!! $res->description !!}</p>
                {{--<div class="tag-widget post-tag-container mb-5 mt-5">--}}
                    {{--<div class="tagcloud">--}}
                        {{--<a href="#" class="tag-cloud-link">Life</a>--}}
                        {{--<a href="#" class="tag-cloud-link">Sport</a>--}}
                        {{--<a href="#" class="tag-cloud-link">Tech</a>--}}
                        {{--<a href="#" class="tag-cloud-link">Travel</a>--}}
                    {{--</div>--}}
                {{--</div>--}}





            </div> <!-- .col-md-8 -->


        </div>
    </div>
</section>
@endforeach
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
