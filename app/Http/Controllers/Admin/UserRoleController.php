<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\UserRoles;
use App\Models\UserMenu;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        $title = "Manage Users Role";
        $search = $request->get('search');
        
        $userRoles = UserRoles::where('name', 'like', '%' . $search . '%')
                ->orderBy('id','ASC')
                ->paginate(10);
        
        return view('admin.userRole.index')->with(compact('title','userRoles', 'search'));
    }

    public function changeuserRoleStatus(Request $request)
    {
        if($request->ajax())
        {
            $data = UserRoles::find($request->userRole_id);
            $data->status = $data->status ^ 1;
            $data->update();
            print_r(1);       
            return;
        }
        return redirect(route('user-roles.index')) -> with( 'message', 'Wrong move!');
    }

    public function adduserRole()
    {
        $title = "Add User Roles";
        return view('admin.userRole.adduserRole')->with(compact('title'));
    }

    public function saveuserRole(Request $request){
        $this->validation($request);

        $userRoles = UserRoles::create( [     
            'name' => $request->name,                      
            'status' => '0',             
                      
        ]);

        // $product = Product::create($request->all());

        return redirect(route('userRoleAdd.page'))->with('msg','User Role Added Successfully');     
    }

    public function edituserRole($id)
    {
        $title = "Edit User Role";
        $userRoles = UserRoles::where('id',$id)->first();
        return view('admin.userRole.updateuserRole')->with(compact('title','userRoles'));
    }
   
    public function updateuserRole(Request $request){
        $this->validate(request(), [          
            'name' => 'required',
        ]);

        $userroleId = $request->userroleId;

        $userRoles = UserRoles::find($userroleId);

        $userRoles->update( [
            'name' => $request->name,                     
        ]);

        // $product = Product::create($request->all());

        return redirect(route('user-roles.index'))->with('msg','User Role Updated Successfully');     
    }



    
    public function destroy(UserRoles $userRole, Request $request)
    {
        if($request->ajax())
        {
            $userRole->delete();
            print_r(1);       
            return;
        }

        $userRole->delete();
        return redirect(route('users.index')) -> with( 'message', 'Deleted Successfully');
    }


    public function validation(Request $request)
    {
        $this->validate(request(), [  
            'name' => 'required',

        ]);
    }

    public function permission($id)
    {
        $title = "User Permission";
        $userMenus = UserMenu::orderBy('id','ASC')->where('menuStatus',1)->get();
        $userRoles = UserRoles::where('id',$id)->first();
        return view('admin.userRole.userRolePermission')->with(compact('title','userRoles','userMenus'));
    }

    public function permissionUpdate(Request $request){
        $userroleId = $request->userroleId;
        $userRoles = UserRoles::find($userroleId);
       
            $usermenus = implode(',', $request->usermenu);
        
        if(@$request->usermenuAction){
            $usermenuAction = implode(',', @$request->usermenuAction);
        }else{
            $usermenuAction = '';
        }
        $userRoles->update( [
            'permission' => @$usermenus,                     
            'actionPermission' => @$usermenuAction,                     
        ]);

        return redirect(route('user-roles.index'))->with('msg','User Role Permission Updated Successfully');     
    }
}
