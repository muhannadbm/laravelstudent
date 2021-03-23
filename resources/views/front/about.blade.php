<head>
    <title>من نحن</title>
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

<!--
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center px-4">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>
        <form action="#" class="searchform order-lg-last">
            <div class="form-group d-flex">
                <input type="text" class="form-control pl-3" placeholder="Search">
                <button type="submit" placeholder="" class="form-control search"><span class="ion-ios-search"></span></button>
            </div>
        </form>
        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a href="{{url('/')}}/" class="nav-link pl-0">Home</a></li>
                <li class="nav-item active"><a href="{{url('/')}}/aboutus" class="nav-link">About</a></li>
                {{--<li class="nav-item"><a href="courses.html" class="nav-link">Courses</a></li>--}}
                <li class="nav-item"><a href="{{url('/')}}/university" class="nav-link">Universites</a></li>
                <li class="nav-item"><a href="{{url('/')}}/scholarship" class="nav-link">Scholarships</a></li>
                <li class="nav-item"><a href="{{url('/')}}/contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </div>
</nav> -->
@extends('layouts.front.fhome')


{{--<section class="ftco-section ftco-no-pt ftc-no-pb">--}}
{{--<div class="container">--}}
{{--<div class="row d-flex">--}}
{{--<div class="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">--}}
{{--<div class="img" style="background-image: url(assets/front/images/about.jpg); border"></div>--}}
{{--</div>--}}
{{--<div class="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">--}}
{{--<h2 class="mb-4">Fox University Stablished Since 1960</h2>--}}
{{--<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>--}}
{{--<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>--}}
{{--<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--</section>--}}

@section('content')
<section id="about">
    <div class="container">

        <header class="section-header">
            <h3>من نحن</h3>
            <p>{!! $test[0]->aboutus!!}</p>
        </header>

        <div class="row about-cols">

            <div class="col-md-4 wow fadeInUp">
                <div class="about-col">
                    <div class="img">
                        <img src="assets/front/images/about.jpg" alt="" class="img-fluid">
                        <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Mission</a></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="about-col">
                    <div class="img">
                        <img src="assets/front/images/about.jpg" alt="" class="img-fluid">
                        <div class="icon"><i class="ion-ios-list-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Plan</a></h2>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                <div class="about-col">
                    <div class="img">
                        <img src="assets/front/images/about.jpg" alt="" class="img-fluid">
                        <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Vision</a></h2>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>
@endsection
@section('slider')
    <section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('assets/front/images/bg_1.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center" style="height: 93px">
                <div class="col-md-9 ftco-animate text-center">
                    <h1 class="mb-2 bread"></h1>
                    <p class="breadcrumbs"><span class="mr-2"><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                        <span>من نحن <i class="ion-ios-arrow-forward"></i></span></p>
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
