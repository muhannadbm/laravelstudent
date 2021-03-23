<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class aHomeController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin');
    }
    public function index(){

        return redirect()->route('universityy');
    }

    public function university(){

        $message=DB::select('select * from university ORDER BY name ');
//        $data=DB::select('select * from university ORDER BY name ');
        $data = DB::table('university')->paginate(8);
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();

        return view('admin.university',['datas' => $data,'dato'=>$dato]);
    }

    public function scholarship(){


        $data= DB::table('scholarship')->paginate(8);
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        return view('admin.scholarship',compact('data','dato'));
    }
    public function turkeyscholar(){

        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $data=DB::select("select * from scholarship  where typee='تركيا' ORDER BY name ");

        return view('admin.scholarship',compact('data','dato'));
    }

    public function europscholar(){

        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $data=DB::select("select * from scholarship  where typee='اوروبا' ORDER BY name ");

        return view('admin.scholarship',compact('data','dato'));
    }


    public function adduniversity(){

            $type = DB::select('SELECT typee FROM university ORDER by name ');
            $place = DB::select('SELECT place FROM university ORDER by name');
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
            return view('admin.adduniversity',['type'=>$type],['place'=>$place],['dato'=>$dato]);

    }

    public function saveuniversity(Request $request)
    {
        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);

        }


        DB::table('university')->insert([
            ['name'=>$request->get('name'),
                'typee'=>$request->typee,
                'place'=>$request->place,
                'description'=>$request->description,

                'status'=>$request->get('status'),
                'date'=>$request->date,

                //'notes'=>$request->get('notes'),

                'photo'=> $name]
        ]);

        return redirect('admin/university')->with('success', 'University Saved');

    }

    public function edituniversity($id)
    {
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
//        $type = DB::select('SELECT typee FROM university ORDER by name');

        $data=DB::select('select * from university where Id=?',[$id]);

        //return view('admin.edit',['md'=>$data],['models'=>$models],['categories'=>$categories]);
        return view('admin.edituniversity',compact('data','dato'));

    }


    public function updateuniversity(Request $request, $id)
    {
        //
        //echo "update it" .$id;
        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);
       DB::table('university')->where('Id',$id)->update(
            ['name'=>$request->get('name'),
                'description'=>$request->description,
                'typee'=>$request->typee,

                'date'=>$request->get('date'),
                'status'=>$request->get('status'),
                'place'=>$request->place,

                //'notes'=>$request->get('notes'),

                'photo'=> $name
            ]);        }
        else{
            DB::table('university')->where('Id',$id)->update(
                ['name'=>$request->get('name'),
                    'description'=>$request->description,
                    'typee'=>$request->typee,

                    'date'=>$request->get('date'),
                    'status'=>$request->get('status'),
                    'place'=>$request->place,

                    //'notes'=>$request->get('notes'),


                ]);


        }



        return redirect('admin/university')->with('success',$request->name.'Updated Successfully');

    }

    public function deleteuniversity($id)
    {

        DB::select('DELETE  FROM university where Id=?',[$id]);
        return redirect('admin/university')->with('success','Deleted Successfully');

    }






    public function addscholarship(){

        $type = DB::select('SELECT typee FROM scholarship ORDER by name ');
//        $place = DB::select('SELECT place FROM scholarship ORDER by name');

        return view('admin.addscholarship',['type'=>$type]);

    }



    public function savescholarship(Request $request)
    {
        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);

        }


        DB::table('scholarship')->insert([
            ['name'=>$request->get('name'),
                'typee'=>$request->typee,
                'detail'=>$request->detail,

//                'place'=>$request->place,
                'description'=>$request->description,

                'status'=>$request->get('status'),
                'date'=>$request->date,

                //'notes'=>$request->get('notes'),

                'photo'=> $name]
        ]);

        return redirect('admin/scholarship')->with('success', 'Scholarship Saved');

    }

    public function editscholarship($id)
    {
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
//        $type = DB::select('SELECT typee FROM university ORDER by name');

        $data=DB::select('select * from scholarship where Id=?',[$id]);

        //return view('admin.edit',['md'=>$data],['models'=>$models],['categories'=>$categories]);
        return view('admin.editscholarship',compact('data','dato'));

    }


    public function updatescholarship(Request $request, $id)
    {
        //
        //echo "update it" .$id;
        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);

        DB::table('scholarship')->where('Id',$id)->update(
            ['name'=>$request->get('name'),
                'description'=>$request->description,
                'detail'=>$request->detail,

                'typee'=>$request->typee,

                'date'=>$request->get('date'),
                'status'=>$request->get('status'),

                //'notes'=>$request->get('notes'),

                'photo'=> $name
            ]);   }
        else {
            DB::table('scholarship')->where('Id',$id)->update(
                ['name'=>$request->get('name'),
                    'description'=>$request->description,
                    'detail'=>$request->detail,

                    'typee'=>$request->typee,

                    'date'=>$request->get('date'),
                    'status'=>$request->get('status'),

                    //'notes'=>$request->get('notes'),

                ]);

        }


        return redirect('admin/scholarship')->with('success','Updated Successfully');

    }

    public function deletescholarship($id){



        DB::select('DELETE  FROM scholarship where Id=?',[$id]);
        return redirect('admin/scholarship')->with('success','Deleted Successfully');

    }






    public function message()
    {      $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $dat= DB::table('message')->orderBy('status', 'desc')->paginate(8);
        return view('admin.listmessage',['dat'=>$dat],['dato'=>$dato]);
    }

    public function messageedit($id)
    {
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        DB::table('message')->where('Id',$id)->update(
           ['status'=>'تمت قرائتها'] );
        $data=DB::select('select * from message where Id='.$id);
        return view('admin.messageedit',['data'=>$data],['dato'=>$dato]);
    }


    public function messageupdate(Request $request, $id)
    {

        DB::table('message')->where('Id',$id)->update(
            ['notes'=>$request->get('notes'),
                'status'=>'تمت قرائتها'

            ]);


        return redirect('admin/messages')->with('success',$request->name.'The Message Read Successfully');

    }

    public function messagedel($id)
    {
        DB::select('delete from message where Id=?',[$id]);
        return redirect()->route('message');
    }

    public function settings(){

        //
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $data=DB::select('select * from site ');
        // return view("admin.settings",['data',$data]);
        return view("admin.settings",compact('data','dato'));



    }

    public function updatesettings(Request $request)
    {

        DB::table('site')->update(
            ['name'=>$request->get('name'),
                'description'=>$request->description,
                'address'=>$request->address,
                'email'=>$request->get('email'),
                'aboutus'=>$request->info,
                'phone'=>$request->get('phone'),

            ]);


        return redirect('admin/settings')->with('success',$request->name.'Settings Updated Successfully');

    }

    public function department(){

        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();

        $data=DB::select('select d.Id,d.namee,d.seats,d.photo,d.description,un.name
                                from department d,university un where d.university_name=un.name; ')->paginate(8);

        return view('admin.department',compact('data','dato'));
    }

    public function adddepartment(){
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $univerid = DB::select('SELECT * FROM university  ');
        $nam = DB::select('SELECT namee FROM department ');

        return view('admin.adddepartment',['univerid'=>$univerid,'nam'=>$nam],['dato'=>$dato]);

    }

    public function savedepartment(Request $request)
    {
        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);

        }

        DB::table('department')->insert([
            ['namee'=>$request->get('namee'),
//                'university_id'=>$request->university_id,
                'university_name'=>$request->university_name,
                'seats'=>$request->seats,
                'description'=>$request->description,
                'photo'=> $name]
        ]);

        return redirect('admin/department')->with('success', 'Department Saved');

    }

    public function editdepartment($id)
    {

//        $type = DB::select('SELECT typee FROM university ORDER by name');
        $dato=DB::table('message')->get()->where('status','غير مقروءة')->count();
        $tes=DB::select('select * from department where Id=?',[$id]);
        $loka=DB::select('select * from university ');
        $data=DB::select('select d.*,un.name
                                from department d,university un where d.university_name=un.name and d.Id=?',[$id]);

        //return view('admin.edit',['md'=>$data],['models'=>$models],['categories'=>$categories]);
        return view('admin.editdepartment',compact('data','tes','loka','dato'));

    }


    public function updatedepartment(Request $request, $id)
    {

        if($request->hasfile('photo'))
        {
            $file = $request->file('photo');
            $name=time().$file->getClientOriginalName();
            $file->move(public_path().'/userfotos',$name);
            DB::table('department')->where('Id',$id)->update(
                ['namee'=>$request->get('namee'),
                    'description'=>$request->description,
//                'university_id'=>$request->university_id,
                    'university_name'=>$request->university_name,

                    'seats'=>$request->seats,
                    'photo'=> $name
                ]);

        }
else{

    DB::table('department')->where('Id',$id)->update(
        ['namee'=>$request->get('namee'),
            'description'=>$request->description,
//                'university_id'=>$request->university_id,
            'university_name'=>$request->university_name,

            'seats'=>$request->seats,

        ]);



}




        return redirect('admin/department')->with('success',$request->name.'Updated Successfully');

    }

    public function deletedepartment($id)
    {


        DB::select('DELETE FROM department where Id=?',[$id]);
        return redirect('admin/department')->with('success','Deleted Successfully');

    }



}
