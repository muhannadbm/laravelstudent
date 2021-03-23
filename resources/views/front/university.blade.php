<head>
    <title>الجامعات</title>
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

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/now-ui-kit.css') }}" rel="stylesheet">


    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/bootstrap/css/bootstrap.min.css">--}}
    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/bootstrap/css/bootstrap.css">--}}
    {{--<link rel="stylesheet" href="{{url('/')}}/assets/front/lib/wow/wow.min.css">--}}


</head>
@extends('layouts.front.fhome')

@section('content')



<section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('assets/front/images/image_6.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" style="height: 93px">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">الجامعات</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                    <span>الجامعات <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<div id="app2">


<div class="text-center">

<b style="font-size: large;letter-spacing: 1px;line-height: 23px;" class="badge badge-primary text-wrap mt-3 mb-2">  أدخل اسم الجامعة لمعرفة مواعيد التسجيل و الأوراق المطلوبة الخاصة بها</b>

    <div class="row d-flex justify-content-center" style="height: 75px;">

        <!--Grid column-->
        <div class="col-md-4">
    <div class="sidebar-box d-block">
        <form action="#" class="search-form">
            <div class="form-group">
                <span class="icon icon-search"></span>
                <input  type="text" v-model="search" class="form-control" placeholder="أدخل اسم المدينة أو الجامعة أو نوع الجامعة(خاصة-عامة) ">
            </div>
        </form>
    </div> </div> </div>

        <section class="ftco-section bg-light" style="padding-top: 0px; padding-bottom: 20px">
            <div class="container-fluid px-4">
                <div class="row">

                    <div class="col-md-6 col-lg-3 " v-for="task in filteredenq">
                        <div class="staff">

                            <a v-bind:href="'{{url('/')}}/universitydet/'+ task.name">
                       <div class="img-wrap d-flex align-items-stretch" style="padding-top: 12px; height: 213px">
                              <div class="img align-self-stretch" v-bind:style="'background-image: url({{url('/')}}/userfotos/'+ task.photo" style="background-size: contain;"></div>
                       </div>
                            <div class="text text-center">
                                <h3> @{{ task.name }}</h3> </a>
                                <span class="position mb-2" style="letter-spacing: unset;font-size: 18px;
font-weight: 600;">المدينة: @{{ task.place }}</span>
                                <div class="faded">
                                    <p>@{{ task.description }}</p>
                                    <ul class="ftco-social text-center">
                                        <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                                        <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                                        <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
                                        <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
</section> </div>


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

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/now-ui-kit.css') }}" rel="stylesheet">
        <link href="{{ asset('vue/JavascriptComponents.vue') }}">

