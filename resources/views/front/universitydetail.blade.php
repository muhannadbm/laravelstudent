
<head>
    <title>الأقسام</title>
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
<section class="h-25 hero-wrap hero-wrap-2" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9pIi7-Q8TJmFc8CxuZtOuBXRNZ7JgrGZ4r4FI-zo4kIXCE-DT');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" style="height: 93px">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">الأقسام</h1>
                <p class="breadcrumbs" >
                    <span class="mr-2" ><a href="{{url('/')}}/">الصفحة الرئيسية <i class="ion-ios-arrow-forward"></i></a></span>
                    <span><a href="{{url('/')}}/university">الجامعات</a> <i class="ion-ios-arrow-forward"></i></span>
                    <span>ألأقسام <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section">
    <div class="container-fluid px-4">
        <div class="row">
            @foreach($results as $res)


            <div class="col-md-3 course ftco-animate">

                <div class="img" style="background-image: url({{url('/')}}/userfotos/{{$res->photo}});"></div>
                <div class="text pt-2">
                    <p class="meta mb-1 d-flex" style="letter-spacing: normal;font-size: 16px;">
                        <span><i class="icon-building mr-2"></i>{{$res->university_name}}</span>
                        <span><i class="icon-event_seat mr-2"></i>مقعد {{$res->seats}}</span>
                        <span><i class="icon-calendar mr-2"></i>4 السنوات</span>
                    </p>
                    <h3 class="mb-1"><a href="#">{{$res->namee}}</a></h3>
                    <p class="mb-1">{{$res->description}}</p>
                    <p class="text-center"><a href="{{url('/')}}/contact" class="btn btn-primary">تواصل معنا الأن للتسجيل</a></p>
                </div>
            </div>
@endforeach
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
