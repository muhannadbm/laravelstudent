<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Study</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="{{asset('assets/front/css/open-iconic-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/front/css/animate.css')}}">

    <link rel="stylesheet" href="{{asset('assets/front/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/front/css/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/front/css/magnific-popup.css')}}">

    <link rel="stylesheet" href="{{asset('assets/front/css/aos.css')}}">

    <link rel="stylesheet" href="{{asset('assets/front/css/ionicons.min.css')}}">

    <link rel="stylesheet" href="{{asset('assets/front/css/flaticon.css')}}">
    <link rel="stylesheet" href="{{asset('assets/front/css/icomoon.css')}}">
    <link rel="stylesheet" href="{{asset('assets/front/css/style.css')}}">
      {{--<link rel="stylesheet" href="{{asset(' ')}}assets/front/css/style1.css">--}}
      {{--<link rel="stylesheet" href="{{asset(' ')}}assets/front/lib/bootstrap/css/bootstrap.min.css">--}}
      {{--<link rel="stylesheet" href="{{asset(' ')}}assets/front/lib/bootstrap/css/bootstrap.css">--}}
      {{--<link rel="stylesheet" href="{{asset(' ')}}assets/front/lib/wow/wow.min.css">--}}
      <link rel="stylesheet" href="{{asset('css/open-iconic-bootstrap.min.css')}}">
      <link rel="stylesheet" href="{{asset('css/animate.css')}}">

      <link rel="stylesheet" href="{{asset('css/owl.carousel.min.css')}}">
      <link rel="stylesheet" href="{{asset('css/owl.theme.default.min.css')}}">
      <link rel="stylesheet" href="{{asset('css/magnific-popup.css')}}">

      <link rel="stylesheet" href="{{asset('css/aos.css')}}">

      <link rel="stylesheet" href="{{asset('css/ionicons.min.css')}}">

      <link rel="stylesheet" href="{{asset('css/flaticon.css')}}">
      <link rel="stylesheet" href="{{asset('css/icomoon.css')}}">
      <link rel="stylesheet" href="{{asset('css/style.css')}}">
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

      <link href="{{ asset('css/app.css') }}" rel="stylesheet">
      <link href="{{ asset('css/now-ui-kit.css') }}" rel="stylesheet">
      <link href="{{ asset('vue/JavascriptComponents.vue') }}">
      <script defer src="{{asset('js/app.js')}}"></script>






  </head>
  <body>
  <style>
      .navbar .navbar-nav .nav-item.active .nav-link:not(.btn), .navbar .navbar-nav .nav-item .nav-link:not(.btn):focus, .navbar .navbar-nav .nav-item .nav-link:not(.btn):hover, .navbar .navbar-nav .nav-item .nav-link:not(.btn):active {
          background-color:
              #f96332;
          border-radius: 0.900rem;
          color: whitesmoke;
          font-weight: bolder;
      }

      .float{
          position:fixed;
          width:60px;
          height:60px;
          bottom:40px;
          right:40px;
          background-color:#25d366;
          color:#FFF;
          border-radius:50px;
          text-align:center;
          font-size:30px;
          box-shadow: 2px 2px 3px #999;
          z-index:100;
      }

      .my-float{
          margin-top:16px;
      }

  </style>


  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <a href="https://api.whatsapp.com/send?phone=+905378291629" class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
  </a>



      <div id="app3">
          @include('layouts.front.flash-message') </div>


	  <div class="bg-top navbar-light">
    	<div class="container">
    		<div class="row no-gutters d-flex align-items-center align-items-stretch">
    			<div class="col-4 d-flex align-items-center py-4">
    				<a style="font-size: x-large" class="navbar-brand" href="{{url('/aboutus')}}">{{$test[0]->name}} <span>University</span></a>
    			</div>
	    		<div class="col-8 d-block">
		    		<div class="row d-flex">
					    <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
					    	<div class="icon d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
					    	<div class="text">
					    		<span>البريد الالكتروني</span>
						    	<span>{{$test[0]->email}}</span>
						    </div>
					    </div>
					    <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
					    	<div class="icon d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
						    <div class="text">
						    	<span>الإتصال</span>
						    	<span>اتصل بنا: {{$test[0]->phone}}</span>
						    </div>
					    </div>
					    {{--<div class="col-md topper d-flex align-items-center justify-content-end">--}}
					    	{{--<p class="mb-0">--}}
					    		{{--<a href="#" class="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">--}}
					    			{{--<span>Apply now</span>--}}
					    		{{--</a>--}}
					    	{{--</p>--}}
					    {{--</div>--}}
				    </div>
			    </div>
		    </div>
		  </div>
    </div>



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
	        	<li class="nav-item active"><a href="{{url('/')}}" class="nav-link pl-0">Home</a></li>
	        	<li class="nav-item"><a href="{{url('/aboutus')}}" class="nav-link">About</a></li>
	        	{{--<li class="nav-item"><a href="courses.html" class="nav-link">Courses</a></li>--}}
	        	<li class="nav-item"><a href="{{{url('/university')}}}" class="nav-link">Universites</a></li>
	        	<li class="nav-item"><a href="{{url('/scholarship')}}" class="nav-link">Scholarships</a></li>
	          <li class="nav-item"><a href="{{url('/contact')}}" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
-->
    <!-- END nav -->

<div id="app">


  <n-navbar class="test" style="background-color: #232323">

      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
          <span class="navbar-toggler-bar1" style="color: white"></span>
          <span class="navbar-toggler-bar2" style="color: white"></span>
          <span class="navbar-toggler-bar3" style="color: white">Menu</span>
      </button>

      <template id="test2" slot="navbar-menu">

          <li @if(Route::current()->getName() == 'home') class="nav-item active" @else class="nav-item" @endif><a href="{{url('/')}}/" class="nav-link"style="font-size: 0.95em;">الصفحة الرئيسية</a></li>
          <li  @if(Route::current()->getName() == 'about') class="nav-item active" @else class="nav-item" @endif><a href="{{url('/')}}/aboutus" class="nav-link" style="font-size: 0.95em;">من نحن</a></li>
          <li  @if(Route::current()->getName() == 'university') class="nav-item active" @else class="nav-item" @endif><a href="{{url('/')}}/university" class="nav-link" style="font-size: 0.95em;">الجامعات</a></li>
          <li  @if(Route::current()->getName() == 'scholarship') class="nav-item active" @else class="nav-item" @endif><a href="{{url('/')}}/scholarship" class="nav-link" style="font-size: 0.95em;">المنح</a></li>
          <li  @if(Route::current()->getName() == 'contact') class="nav-item active" @else class="nav-item" @endif><a href="{{url('/')}}/contact" class="nav-link" style="font-size: 0.95em;">تواصل معنا</a></li>
      </template>
  </n-navbar>
</div>


  @yield('slider')

@yield('content')



    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-5">
            	<h2 class="ftco-heading-2">لديك سؤال ؟</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">{{$test[0]->phone}}</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">{{$test[0]->email}}</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-5 ml-md-4">
              <h2 class="ftco-heading-2">روابط مفيدة</h2>
                <ul class="list-unstyled">
                    <li><a href="{{url('/')}}"><span class="ion-ios-arrow-round-forward mr-2"></span>الصفحة الرئيسية</a></li>

                    <li><a href="{{url('/university')}}"><span class="ion-ios-arrow-round-forward mr-2"></span>الجامعات</a></li>
                    <li><a href="{{url('/scholarship')}}"><span class="ion-ios-arrow-round-forward mr-2"></span>المنح</a></li>
                    <li><a href="{{url('/aboutus')}}"><span class="ion-ios-arrow-round-forward mr-2"></span>من نحن</a></li>
                    <li><a href="{{url('/contact')}}"><span class="ion-ios-arrow-round-forward mr-2"></span>تواصل معنا</a></li>
                </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">

            <div class="ftco-footer-widget mb-5">
            	<h2 class="ftco-heading-2 mb-0">تواصل معنا</h2>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li class="ftco-animate" ><a href="#"><span class="icon-twitter"style="color: #0b93d5"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-facebook"style="color: #2d49ff"></span></a></li>
                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"style="color: indianred"></span></a></li>
                </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;<script defer>document.write(new Date().getFullYear());</script> All rights reserved by <a href="https://idesigns.info" target="https://idesigns.info">SMART</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>



  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


  <script defer src="{{asset('assets/front/js/jquery.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery-migrate-3.0.1.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/popper.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/bootstrap.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery.easing.1.3.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery.waypoints.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery.stellar.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/owl.carousel.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery.magnific-popup.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/aos.js')}}"></script>
  <script defer src="{{asset('assets/front/js/jquery.animateNumber.min.js')}}"></script>
  <script defer src="{{asset('assets/front/js/scrollax.min.js')}}"></script>
  <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script defer src="{{asset('assets/front/js/google-map.js')}}"></script>
  <script defer src="{{asset('assets/front/js/main.js')}}"></script>
      {{--<script defer src="{{asset(' ')}}assets/front/js/wow/wow.min.js"></script>--}}
      {{--<script defer src="{{asset(' ')}}assets/front/js/wow/wow.js"></script>--}}
  <script >
      $(document).ready(function() {
          // get current URL path and assign 'active' class
          var pathname = window.location.pathname;
          $('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
      })
  </script>

  </body>



</html>
