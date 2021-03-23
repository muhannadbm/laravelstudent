<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="{{asset('js/app.js')}}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/now-ui-kit.css') }}" rel="stylesheet">
        <link href="{{ asset('vue/JavascriptComponents.vue') }}">
        <script src="{{asset('vue/JavascriptComponents.vue')}}" defer></script>



        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>

    <div id="app">


        <example-component></example-component>
<alert type="warning" dismissible="true">HELLO</alert>
        <n-button type="success" size="sm">Small</n-button>
        <n-button type="danger">Regular</n-button>
        <n-button type="info" size="lg">Large</n-button>
        <div class="container">
        <div class="row">
            <div class="col-md-3">
        <fg-input placeholder="Regular"></fg-input> </div>
            <n-navbar type="primary">
               <n-Tabs type="danger">hello</n-Tabs>

            </n-navbar>

</div>  </div>


        <template>
            <div class="section section-navbars">
                <div class="container" id="menu-dropdown">
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Menu</h4>
                            <n-navbar type="primary">
                                <a class="navbar-brand" href="#">Menu</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >

                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>

                                <template slot="navbar-menu">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">
                                            <p>Link</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <p>Link</p>
                                        </a>
                                    </li>
                                    <drop-down class="nav-item" title="Dropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </drop-down>
                                </template>
                            </n-navbar>
                        </div>
                        <div class="col-md-6">
                            <h4>Menu with Icons</h4>
                            <n-navbar type="info" menu-classes="ml-auto">
                                <a class="navbar-brand" href="#">Icons</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-icons"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                                <template slot="navbar-menu">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#pablo"
                                        ><i class="now-ui-icons ui-1_send" aria-hidden="true"></i
                                            ></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#pablo"
                                        ><i
                                                class="now-ui-icons users_single-02"
                                                aria-hidden="true"
                                            ></i
                                            ></a>
                                    </li>
                                    <drop-down
                                        class="nav-item dropdown"
                                        icon="now-ui-icons ui-1_settings-gear-63"
                                    >
                                        <a class="dropdown-header">Dropdown header</a>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                        <div class="divider"></div>
                                        <a class="dropdown-item" href="#">One more separated link</a>
                                    </drop-down>
                                </template>
                            </n-navbar>
                        </div>
                    </div>
                    <h4>Navigation</h4>
                </div>
                <div id="navbar">
                    <div
                        class="navigation-example"
                        style="background-image:url('img/bg7.jpg')"
                    >
                        <!-- Navbar Primary  -->
                        <n-navbar type="primary" menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#pablo">Primary color</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-primary"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>

                            <template slot="navbar-menu">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons objects_globe"></i>
                                        <p>Discover</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons users_circle-08"></i>
                                        <p>Profile</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons ui-1_settings-gear-63"></i>
                                        <p>Settings</p>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Primary -->
                        <!-- Navbar Info -->
                        <n-navbar type="info" menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#pablo">Info Color</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-info"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <template slot="navbar-menu">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#pablo">
                                        <p>Discover</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <p>Profile</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <p>Settings</p>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Info -->
                        <!-- Navbar Success -->
                        <n-navbar type="success" menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#">Success Color</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-success"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <template slot="navbar-menu">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons objects_globe"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons users_circle-08"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons ui-1_settings-gear-63"></i>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Success -->
                        <!-- Navbar Warning -->
                        <n-navbar type="warning" menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#">Success Color</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-success"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <template slot="navbar-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-google-plus"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Warning -->
                        <!-- Navbar Danger -->
                        <n-navbar type="danger" menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#pablo">Danger Color</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-danger"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <template slot="navbar-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-facebook-square"></i>
                                        <p>Share</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-twitter"></i>
                                        <p>Tweet</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-pinterest"></i>
                                        <p>Pin</p>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Danger -->
                        <!-- Navbar Transparent -->
                        <n-navbar transparent menu-classes="ml-auto">
                            <div class="navbar-translate">
                                <a class="navbar-brand" href="#pablo">Transparent</a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-transparent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <template slot="navbar-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-facebook-square"></i>
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-twitter"></i>
                                        <p>Twitter</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="fab fa-instagram"></i>
                                        <p>Instagram</p>
                                    </a>
                                </li>
                            </template>
                        </n-navbar>
                        <!-- End Navbar Transparent-->
                    </div>
                </div>
            </div>
        </template>
        <script>
            import { Navbar, DropDown } from '@/components';

            export default {
                components: {
                    Navbar,
                    DropDown
                }
            };
        </script>









    </div>


    </body>
</html>
