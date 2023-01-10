<?php

namespace App\Models;

use Intervention\Image\ImageManagerStatic as Image;
use  File;
use App\Models\UserRoles;
use App\Models\UserMenu;
use Illuminate\Support\Facades\Auth;

class Link
{
    public static function action($id = null) {
        $roleId =  Auth::user()->role;
        $userRoles = UserRoles::where('id',$roleId)->first();
        $rolePermission = explode(',', $userRoles->actionPermission);
        $routeName = \Request::route()->getName();
        $userMenus = UserMenu::where('menuLink',$routeName)->first();
        $userMenuAction = UserMenuActions::orderBy('orderBy','ASC')->where('parentmenuId',@$userMenus->id)->where('actionStatus',1)->get();
        $data_link = '';

        if (!empty(@$userMenuAction)) {
            foreach ($userMenuAction as $action) {
                if (in_array($action->id, @$rolePermission)) {
                    // Edit Option
                    if($action->menuType == 2){
                        $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" data-original-title="'.$action->actionName.'"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>';     
                    }

                    if($action->menuType == 7){
                        $data_link .= '<a href="javascript:void(0)" data-toggle="tooltip" data-original-title="'.$action->actionName.'" data-id="'.$id.'"> <i class="fa fa-eye text-success m-r-10"></i> </a>';
                    }

                    if($action->menuType == 8){
                    $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" data-original-title="'.$action->actionName.'" data-toggle="tooltip" data-original-title="'.$action->actionName.'" data-id="'.$id.'"> <i class="fa fa-eye text-success m-r-10"></i> </a>';
                    }

                    // Delete Option
                    if($action->menuType == 4){
                    $data_link .= '<a id="cancel_'.$id.'" href="javascript:void(0)" data-toggle="tooltip" data-original-title="'.$action->actionName.'" data-id="'.$id.'"  data-token="{{ csrf_token() }}"> <i class="fa fa-trash text-danger"></i> </a>';
                    }

                    if($action->menuType == 5){
                    $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" data-original-title="'.$action->actionName.'" onclick="confirm('."'".'Are you sure you want to Permission ?'."'".')"> <i class="fa fa-lock text-inverse m-r-10"></i> </a>';
                    }

                    if($action->menuType == 6){
                    $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" data-original-title="'.$action->actionName.'"> <i class="fa fa-exchange text-inverse m-r-10"></i> </a>';
                    }

                    if($action->menuType == 9){
                    $data_link .= '<a href="javascript:void(0)" data-toggle="tooltip" data-original-title="'.$action->actionName.'" data-id="'.$id.'"> <i class="fa fa-shopping-bag text-danger m-r-10"></i> 
                        </a>';
                    }

                    if($action->menuType == 10){
                    $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" data-original-title="'.$action->actionName.'"> <i class="fa fa-list text-success m-r-10"></i> </a>';
                    }
                    
                    if($action->menuType == 11){
                    $data_link .= '<a href="'.route($action->actionLink,$id).'" data-toggle="tooltip" target="_blank" data-original-title="'.$action->actionName.'"> <i class="fa fa-print text-success m-r-10"></i> </a>';
                    }
                }
            }
        }
        
        return $data_link;
    }

    public static function status($id = null,$status = null) {
        $roleId =  Auth::user()->role;
        $userRoles = UserRoles::where('id',$roleId)->first();
        $rolePermission = explode(',', $userRoles->actionPermission);
        $routeName = \Request::route()->getName();
        $userMenus = UserMenu::where('menuLink',$routeName)->first();
        $userMenuAction = UserMenuActions::orderBy('orderBy','ASC')->where('parentmenuId',$userMenus->id)->where('actionStatus',1)->get();
        $data_link = '';

        if (!empty(@$userMenuAction)) {
            foreach ($userMenuAction as $action) {
                if (in_array($action->id, @$rolePermission)) {
                    if($action->menuType == 3){
                        if($status == 1){
                            $checked = 'checked';
                        }else{
                            $checked = ''; 
                        }
                        $data_link .= '<span class="switchery-demo m-b-30" onclick="statusChange('.$id.')">
                            <input type="checkbox"'.$checked.' class="js-switch" data-color="#00c292" data-switchery="true" style="display: none;" >
                            </span>';     
                        }
                }
            }
        }
        
        return $data_link;
    }
}
