<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Task;
class msg extends Controller
{
     public function index(){

         $users = DB::table('message')->get();
          return $users;
       }
}
