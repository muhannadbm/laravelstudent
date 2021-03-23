<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Task;
use Illuminate\Http\Request;

class test extends Controller
{
 public function index(){

     $users = DB::table('university')->orderBy('name', 'asc')->get();

       return $users;
   }
}
