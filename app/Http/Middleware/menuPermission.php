<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\UserRoles;
use App\Models\UserMenu;
use App\Models\UserMenuActions;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class menuPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   $routeName = Request::route()->getName();
        $userMenus = UserMenu::where('menuLink',$routeName)->first();
        $userMenuAction = UserMenuActions::where('actionLink',$routeName)->first();
        $roleId =  Auth::user()->role;
        $userRoles = UserRoles::where('id',$roleId)->first();
        $rolePermission = explode(',', $userRoles->permission);
        $actionLinkPermission = explode(',', $userRoles->actionPermission);
        if($userMenus != null){
            if (in_array($userMenus->id, @$rolePermission)) {
                return $next($request);
            }else{
                return redirect(route('admin.index'));
            }
        }elseif($userMenuAction != null){
            if (in_array($userMenuAction->id, @$actionLinkPermission)) {
                return $next($request);
            }else{
                return redirect(route('admin.index'));
            }
        }else{
            return $next($request);
        }
    }
}
