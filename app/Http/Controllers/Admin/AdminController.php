<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Admin;
use App\Models\UserRoles;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $title = "Manage Users";
        $search = $request->get('search');
        
        $users = Admin::where('email', 'like', '%' . $search . '%')
                ->paginate(10);
        
        return view('admin.users.index')->with(compact('title','users', 'search'));
    }

    public function changeuserStatus(Request $request)
    {
        if($request->ajax())
        {
            $data = Admin::find($request->user_id);
            $data->status = $data->status ^ 1;
            $data->update();
            print_r(1);       
            return;
        }
        return redirect(route('users.index')) -> with( 'message', 'Wrong move!');
    }

    public function adduser()
    {
        $title = "Add New User";
        $userRoles = UserRoles::orderBy('id','ASC')->get();
        return view('admin.users.adduser')->with(compact('title','userRoles'));
    }

    public function saveuser(Request $request){
        $this->validation($request);

        $users = Admin::create( [     
            'name' => $request->name,           
            'email' => $request->email,           
            'username' => $request->username,           
            'role' => $request->role,           
            'password' => bcrypt($request->password),             
            'status' => '0',             
                      
        ]);

        // $product = Product::create($request->all());

        return redirect(route('useradd.page'))->with('msg','User Added Successfully');     
    }

    public function edituser($id)
    {
        $title = "Edit User";
        $userRoles = UserRoles::orderBy('id','ASC')->get();
        $users = Admin::where('id',$id)->first();
        return view('admin.users.updateuser')->with(compact('title','users','userRoles'));
    }

    public function userProfile($id){
        $title = "My Profile";
        $users = Admin::where('id',$id)->first();
        $userRoles = UserRoles::where('id',$users->role)->first();
        return view('admin.users.profile')->with(compact('title','users','userRoles'));
    }

   
    public function updateuser(Request $request){
        $this->validate(request(), [
            'role' => 'required',
            'name' => 'required',
            'email' => 'required',
            'username' => 'required',
            
        ]);
        $userId = $request->userId;

        $users = Admin::find($userId);

        $users->update( [
            'name' => $request->name,           
            'email' => $request->email,           
            'username' => $request->username,                
        ]);

        // $product = Product::create($request->all());

        return redirect(route('users.index'))->with('msg','User Updated Successfully');     
    }


     public function password($id)
     {
        $title = "Change Paaword";
        $users = Admin::where('id',$id)->first();
        return view('admin.users.changePassword')->with(compact('title','users'));
    }

    public function passwordChange(Request $request){
        $this->validate(request(), [
            'password' => 'required',
            
        ]);
        $userId = $request->userId;
        $users = Admin::find($userId);
        $users->update( [               
            'password' => bcrypt($request->password),                
        ]);

        // $product = Product::create($request->all());

        return redirect(route('users.index'))->with('msg','Password Changed Successfully');     
    }

    
    public function destroy(Admin $user, Request $request)
    {
        if($request->ajax())
        {
            $user->delete();
            print_r(1);       
            return;
        }

        $user->delete();
        return redirect(route('users.index')) -> with( 'message', 'Deleted Successfully');
    }


    public function validation(Request $request)
    {
        $this->validate(request(), [
            'role' => 'required',
            'name' => 'required',
            'email' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);
    }
}
