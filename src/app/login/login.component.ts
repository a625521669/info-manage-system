import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'Login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})


export class LoginComponent {
    @Output() newUser = new EventEmitter();

    constructor(private loginService: LoginService, public authService: AuthService, public router: Router) { }

    login() {
        let data = new FormData(document.forms['formData']);

        this.loginService.login(data)
            .then((result) => {
                if (result.success) {
                    alert("登陆成功！");
                    //弹出一个事件
                    //this.newUser.emit();

                    localStorage.setItem('userId', result.userId);
                    localStorage.setItem('userName', result.userName);
                    localStorage.setItem('pemission', result.pemission);

                    this.authService.login();
                    var redirectUrl = this.authService.redirectUrl;

                    //this.router.navigate([redirectUrl == undefined ? "/" : redirectUrl]);
                    window.location.href = redirectUrl == undefined ? "/" : redirectUrl;
                }
                else {
                    alert(result.reason);
                }
            })
    }
}
