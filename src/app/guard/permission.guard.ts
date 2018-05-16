import { CanActivate } from '@angular/router';
/**路由守卫 */

// 处理进来的情况

export class PermissionGuard implements CanActivate {

    canActivate() {
        let hasPermission:boolean =  Math.random() < 0.5;

        if(hasPermission){
            console.log("用户无权访问")
        }

        return hasPermission;
    }

}