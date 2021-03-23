<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', 'front\HomeController@index')->name('home');
Route::get('/aboutus', 'front\HomeController@aboutus')->name('about');
Route::get('/contact', 'front\HomeController@contact')->name('contact');
Route::get('/university', 'front\HomeController@university')->name('university');
Route::get('/universitydet', 'front\HomeController@universitydetail')->name('universitydetail');
Route::get('/scholarship', 'front\HomeController@scholarship')->name('scholarship');
Route::get('/scholarshipdet/{id}', 'front\HomeController@scholarshipdetail')->name('scholarshipdetail');
Route::post('/message', 'front\HomeController@message')->name('message');





Route::get('/admin', 'admin\aHomeController@index' );







Route::get('/universitydet/{id}', 'front\HomeController@universitydetail')->name('universitydetail');

Route::get('/admin/university', 'admin\aHomeController@university' )->name('universityy') ;
Route::get('/admin/university/gvuniversity', 'admin\aHomeController@gvuniversity' ) ;
Route::get('/admin/university/pvuniversity', 'admin\aHomeController@pvuniversity' ) ;
Route::get('/admin/university/add', 'admin\aHomeController@adduniversity' ) ;
Route::post('/admin/university/save', 'admin\aHomeController@saveuniversity' ) ;
Route::get('/admin/university/edit/{id}', 'admin\aHomeController@edituniversity' ) ;
Route::post('/admin/university/update/{id}', 'admin\aHomeController@updateuniversity' ) ;
Route::get('/admin/university/delete/{id}', 'admin\aHomeController@deleteuniversity' ) ;

Route::get('/admin/department', 'admin\aHomeController@department' ) ;
Route::get('/admin/department/add', 'admin\aHomeController@adddepartment' ) ;
Route::post('/admin/department/save', 'admin\aHomeController@savedepartment' ) ;
Route::get('/admin/department/edit/{id}', 'admin\aHomeController@editdepartment' ) ;
Route::post('/admin/department/update/{id}', 'admin\aHomeController@updatedepartment' ) ;
Route::get('/admin/department/delete/{id}', 'admin\aHomeController@deletedepartment' )->name('deldep') ;

Route::get('/admin/scholarship', 'admin\aHomeController@scholarship' ) ;
Route::get('/admin/scholarship/turkey', 'admin\aHomeController@turkeyscholar' ) ;
Route::get('/admin/scholarship/europ', 'admin\aHomeController@europscholar' ) ;
Route::get('/admin/scholarship/add', 'admin\aHomeController@addscholarship' ) ;
Route::post('/admin/scholarship/save', 'admin\aHomeController@savescholarship' ) ;
Route::get('/admin/scholarship/edit/{id}', 'admin\aHomeController@editscholarship' ) ;
Route::post('/admin/scholarship/update/{id}', 'admin\aHomeController@updatescholarship' ) ;
Route::get('/admin/scholarship/delete/{id}', 'admin\aHomeController@deletescholarship' ) ;



Route::get('/admin/messages', 'admin\aHomeController@message')->name('message');
Route::get('/admin/messages/edit/{id}', 'admin\aHomeController@messageedit' ) ;
Route::post('/admin/messages/update/{id}', 'admin\aHomeController@messageupdate' ) ;
Route::get('/admin/messages/delete/{id}', 'admin\aHomeController@messagedel' ) ;



Route::get('/admin/settings', 'admin\aHomeController@settings' )->name('setting') ;
Route::post('/admin/updatesettings', 'admin\aHomeController@updatesettings')->name('updatesetting') ;

Route::get('/admin/login', 'admin\LoginController@index' )->name('login');
Route::post('/admin/login', 'admin\LoginController@login' )->name('login');
Route::get('/admin/logout', 'admin\LoginController@logout' )->name('logout');
Route::get('/admin/register', 'admin\LoginController@register_form' )->name('register');
Route::post('/admin/register', 'admin\LoginController@register_save' )->name('register');

//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');

//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
