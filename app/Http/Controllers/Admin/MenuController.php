<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use URL;
use Session;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){
        $title = "Manage Menu";
        $search = $request->get('search');
        $menus = Menu::where('menuName', 'like', '%' . $search . '%')
                ->paginate(10);
        
        return view('admin.menus.index')->with(compact('title','menus', 'search'));
    }

    public function addmenu()
    {
        $title = "Add New Menu";
        return view('admin.menus.addmenu')->with(compact('title'));
    }    
    
    public function destroy(menu $menu, Request $request)
    {
        if($request->ajax())
        {
            $menu->delete();
            print_r(1);       
            return;
        }

        $menu->delete();
        return redirect(route('menus.index')) -> with( 'message', 'Deleted Successfully');
    }

    

    public function changeStatus(Request $request)
    {
        if($request->ajax())
        {
            $data = Menu::find($request->menu_id);
            $data->menuStatus = $data->menuStatus ^ 1;
            $data->update();
            print_r(1);       
            return;
        }
        return redirect(route('menu.index')) -> with( 'message', 'Wrong move!');
    }

    public function savemenu(Request $request){
        $this->validation($request);

    

        $menu = Menu::create( [
            'menuName' => $request->menuName,
            'menuTitle' => $request->menuTitle,
            'menuContent' => $request->menuContent,
            'menuStatus' => $request->menuStatus,
            'metaTitle' => $request->metaTitle,            
            'metaKeyword' => $request->metaKeyword,            
            'metaDescription' => $request->metaDescription,            
            'orderBy' => $request->orderBy, 
                   
        ]);

        // $menu = Menu::create($request->all());

        return redirect(route('menuadd.page'))->with('msg','Menu Added Successfully');     
    }

    public function editmenu($id)
    {
        $title = "";
        $menu = Menu::where('id',$id)->first();       

        return view('admin.menus.updatemenu')->with(compact('title','menu'));
    }

    public function updatemenu(Request $request){
        $this->validation($request);
        $menuId = $request->menuId;
        $menu = Menu::find($menuId);
        $menu->update( [
            'menuName' => $request->menuName,
            'menuTitle' => $request->menuTitle,
            'menuContent' => $request->menuContent,
            'menuStatus' => $request->menuStatus,
            'metaTitle' => $request->metaTitle,            
            'metaKeyword' => $request->metaKeyword,            
            'metaDescription' => $request->metaDescription,            
            'orderBy' => $request->orderBy,            
        ]);
        // $menu = Menu::create($request->all());
        return redirect(route('menu.edit',$menuId))->with('msg','Menu Updated Successfully');     
    }

    //View menu

    public function edit(menu $menu, Request $request)
    {
        $menu = Menu::find($request->menu_id);
        if($request->ajax())
            {
                return response()->json([
                    'menu'=>$menu
                    
                ]);
            }
        return view('admin.menus.edit')->with(compact('menu'));
    }

    public function frontMenu($menuName){
        $menus = Menu::where('menuName',$menuName)->first();
        return view('frontend.menuContents.menuContent')->with(compact('menus'));
    }

    public function deleteMenu($id){
        Menu::where('id',$id)->delete();
        return redirect(route('menu.index'))->with('msg','Menu Deleted Successfully');
    }


    /**
     * Internal function for validation.
     *
     * @param  $request
     * @return \validation
     */
    public function validation(Request $request)
    {
        $this->validate(request(), [
             'menuName' => 'required',
            'menuTitle' => 'required',
            'menuContent' => 'required',
            'menuStatus' => 'required',       
        ]);
    }
}