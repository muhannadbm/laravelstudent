@if ($message = Session::get('success'))

    <div id="app3">
        <alert type="success" dismissible>
            <div class="alert-icon">
                <i class="now-ui-icons ui-2_like"></i>
            </div>
            <strong>تهانينا !</strong> {{ $message }}.
        </alert>
    </div>

@endif



@if ($message = Session::get('error'))

    <div class="alert alert-danger alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>

@endif



@if ($message = Session::get('warning'))

    <div class="alert alert-warning alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>

@endif



@if ($message = Session::get('info'))

    <div class="alert alert-info alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>

@endif



@if ($errors->any())

    <div class="alert alert-danger">

        <button type="button" class="close" data-dismiss="alert">×</button>

        Please check the form below for errors

    </div>

@endif
