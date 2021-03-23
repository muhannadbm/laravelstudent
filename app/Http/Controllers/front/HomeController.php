<?php

namespace App\Http\Controllers\front;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Carbon\Carbon;


class HomeController extends Controller
{
    public function index(){
        $test=DB::select('select * from site');
        View::share('test', $test);
        return view('front.home',compact('test'));
    }

    public function aboutus(){
        $test=DB::select('select * from site');

        return view('front.about',compact('test'));
    }
    public function contact(){
        $test=DB::select('select * from site');

        return view('front.contact',compact('test'));
    }

    public function university(){

               $test=DB::select('select * from site');
                $users = DB::table('university')->get();

                return view('front.university', ['resultss' => $users,'test' => $test]);

        }


    public function universitydetail($id){
        $test=DB::select('select * from site');
        $users = DB::table('department')->get()->where('university_name',$id);


        return view('front.universitydetail', ['results' => $users,'test' => $test]);
    }

    public function scholarship(){

        $test=DB::select('select * from site');
        $users = DB::table('scholarship')->get();
        $ship= DB::table('scholarship')->get();
        return view('front.scholarship', ['results' => $users, 'results2' => $ship,'test' => $test]);
    }

        public function scholarshipdetail($id){

            $test=DB::select('select * from site');
        $var=DB::table('scholarship')->get()->where('Id',$id);

        return view('front.scholarshipdetail', ['results' => $var,'test' => $test]);
    }

    public function message(Request $request){

        DB::table('message')->insert([
            ['name' => $request->name,'email' => $request->email,'subject' => $request->subject,
                'msg' => $request->msg, 'status' =>$request->status]]
        );
      return back()->with('success','لقد تم استلام رسالتك بنجاح.');

}
    }




