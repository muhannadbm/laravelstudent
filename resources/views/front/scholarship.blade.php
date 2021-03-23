<head>
    <title>المنح</title>
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


<section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('assets/front/images/bg_1.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" style="height: 93px">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">المنح</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                    <span>المنح <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>


<section class="ftco-section bg-light pt-3">
    <div class="container">
        <h2 class="text-center">المنح المتاحة حاليا</h2>
        <div class="row">

            @foreach($results as $res)

                @if(\Carbon\Carbon::parse($res->date)->diffInDays(\Carbon\Carbon::now())<=360 and
\Carbon\Carbon::now()->diffInDays(\Carbon\Carbon::parse($res->date),false)>=0 and
\Carbon\Carbon::now()->diffInMonths(\Carbon\Carbon::parse($res->date))<=1 and
\Carbon\Carbon::parse($res->date)->diffInMonths(\Carbon\Carbon::now(),false)>=0 and
\Carbon\Carbon::now()->diffInYears(\Carbon\Carbon::parse($res->date))<=1 and
\Carbon\Carbon::parse($res->date)->diffInYears(\Carbon\Carbon::now(),false)>=0)


                <div class="col-md-6 col-lg-4 ftco-animate">
                    <div class="blog-entry">
                        <a href="{{url('/')}}/scholarshipdet" class="block-20 d-flex align-items-end" style="background-image: url('assets/front/images/image_1.jpg');">
                            <div class="meta-date text-center p-2" style="background-color: red">
                                <span class="day">{{\Carbon\Carbon::parse($res->date)->format('d')}}</span>
                                <span class="mos">{{\Carbon\Carbon::parse($res->date)->format('M')}}</span>
                                <span class="yr">{{\Carbon\Carbon::parse($res->date)->format('Y')}}</span>
                            </div>
                        </a>
                        <div class="text bg-white p-4">
                            <h3 class="heading"><a href="#">{{ $res->name }}</a></h3>
                            <p>{{$res->description}}</p>
                            <div class="d-flex align-items-center mt-4">
                                <p class="mb-0"><a href="{{url('/')}}/scholarshipdet/{{$res->Id}}" class="btn btn-primary">اقرأ المزيد <span class="ion-ios-arrow-round-forward"></span></a></p>
                                {{--<p class="ml-auto mb-0">--}}
                                {{--<a href="#" class="mr-2">Admin</a>--}}
                                {{--<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>--}}
                                {{--</p>--}}
                            </div>
                        </div>
                    </div>
                </div>         @endif   @endforeach

        </div>




        <h2 class="mt-5 text-center">المنح الأخرى</h2>
    <div class="row">

              @foreach($results as $res)

                  @if(!(\Carbon\Carbon::parse($res->date)->diffInDays(\Carbon\Carbon::now())<=360 and
  \Carbon\Carbon::now()->diffInDays(\Carbon\Carbon::parse($res->date),false)>=0 and
  \Carbon\Carbon::now()->diffInMonths(\Carbon\Carbon::parse($res->date))<=1 and
  \Carbon\Carbon::parse($res->date)->diffInMonths(\Carbon\Carbon::now(),false)>=0 and
  \Carbon\Carbon::now()->diffInYears(\Carbon\Carbon::parse($res->date))<=1 and
  \Carbon\Carbon::parse($res->date)->diffInYears(\Carbon\Carbon::now(),false)>=0))
            <div class="col-md-6 col-lg-4 ftco-animate">
                <div class="blog-entry">
                    <a href="{{url('/')}}/scholarshipdet" class="block-20 d-flex align-items-end" style="background-image: url('assets/front/images/image_1.jpg');">
                        <div class="meta-date text-center p-2">
                            <span class="day">{{\Carbon\Carbon::parse($res->date)->format('d')}}</span>
                            <span class="mos">{{\Carbon\Carbon::parse($res->date)->format('M')}}</span>
                            <span class="yr">{{\Carbon\Carbon::parse($res->date)->format('Y')}}</span>
                        </div>
                    </a>
                    <div class="text bg-white p-4">
                        <h3 class="heading"><a href="#">{{ $res->name }}</a></h3>
                        <p>{{$res->description}}</p>
                        <div class="d-flex align-items-center mt-4">
                            <p class="mb-0"><a href="{{url('/')}}/scholarshipdet/{{$res->Id}}" class="btn btn-primary">اقرأ المزيد <span class="ion-ios-arrow-round-forward"></span></a></p>
                            {{--<p class="ml-auto mb-0">--}}
                                {{--<a href="#" class="mr-2">Admin</a>--}}
                                {{--<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>--}}
                            {{--</p>--}}
                        </div>
                    </div>
                </div>
            </div>  @endif   @endforeach


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
