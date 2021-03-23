<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
    {{--<div class="user-panel">--}}
    {{--<div class="pull-left image">--}}
    {{--<img src="{{url('/')}}/userfotos/{{Auth::user()->image}}" class="img-circle" alt="User Image">--}}
    {{--</div>--}}
    {{--<div class="pull-left info">--}}
    {{--<p>{{Auth::user()->name}}</p>--}}
    {{--<a href="#"><i class="fa fa-circle text-success"></i> Online</a>--}}
    {{--</div>--}}
    {{--</div>--}}
    <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">



            <li>
                <a href="{{route('universityy')}}">
                    <i class="fa fa-th"></i> <span>List of Universities</span>

                </a>
            </li>
            <li>
                <a href="{{url('/')}}/admin/scholarship">
                    <i class="fa fa-th"></i> <span>List of Scholarships</span>

                </a>
            </li>

            {{--<li>--}}
            {{--<a href="{{url('/')}}/admin">--}}
            {{--<i class="fa fa-th"></i> <span>Test2</span>--}}
            {{--<span class="pull-right-container">--}}
            {{--<small class="label pull-right bg-green">new</small>--}}
            {{--</span>--}}
            {{--</a>--}}
            {{--</li>--}}

            <li class="treeview">
                <a href="#">
                    <i class="fa fa-pie-chart"></i>
                    <span>University Operations</span>
                    <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="{{url('/')}}/admin/university/"><i class="fa fa-circle-o"></i> List of  Universities</a></li>

                    <li><a href="{{url('/')}}/admin/department"><i class="fa fa-circle-o"></i> List of  Departments</a></li>


                </ul>
            </li>


            <li class="treeview">
                <a href="#">
                    <i class="fa fa-pie-chart"></i>
                    <span>Scholarship Operations</span>
                    <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="{{url('/')}}/admin/scholarship/turkey"><i class="fa fa-circle-o"></i> List of Turkey Scholarships</a></li>
                    <li><a href="{{url('/')}}/admin/scholarship/europ"><i class="fa fa-circle-o"></i> List of Europ Scholarships</a></li>


                </ul>
            </li>


            {{--<li class="treeview">--}}
            {{--<a href="{{url('/')}}/admin/orders">--}}
            {{--<i class="fa fa-pie-chart"></i>--}}
            {{--<span>Orders</span>--}}
            {{--<span class="pull-right-container">--}}
            {{--<i class="fa fa-angle-left pull-right"></i>--}}
            {{--</span>--}}
            {{--</a>--}}

            {{--</li>--}}




            <li>
                <a href="{{url('/')}}/admin/messages">
                    <i class="fa fa-envelope"></i> <span>Students Messages</span>

                </a>
            </li>

            <li>
                <a href="{{url('/')}}/admin/settings">
                    <i class="fa fa-gear"></i> <span>Settings</span>

                </a>
            </li>

        </ul>
    </section>
    <!-- /.sidebar -->
</aside>
