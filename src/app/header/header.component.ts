import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';


import 'rxjs/add/operator/switchMap';

declare const $: any;

@Component({
    selector: 'Header',
    templateUrl: './header.component.html',
    providers: [UserService]
})

export class HeaderComponent {
    constructor(public authService: AuthService, private router: Router, private userService: UserService) {
    }

    
    userName = this.authService.userName != undefined ? this.authService.userName : "请登陆";

    logout() {
        this.authService.logout();
        // this.authService.redirectUrl = this.router
        this.router.navigate(["/login"]);
    }


    //显示密码修改面板
    showPasswprdChangeFn = () => {
        $("#myPswModal").modal("show");
    }

    //修改密码
    changePasswordFn = () => {
        let data = new FormData(document.forms['myPswData']);

        data.append('userId', localStorage.getItem("userId"));
        
        this.userService.changePassword(data)
            .then(res => {
                if (res.success) {
                    alert("密码修改成功！");
                    $("#myPswModal").modal("hide");
                } else {
                    alert(res.reason);
                }
            })
    }
}