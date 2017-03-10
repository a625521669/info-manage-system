//该服务能让用户登录，并且保存当前用户的信息


import { userRoutesModule } from './user/user.router';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLogin: boolean;

    //登陆之后返回的url
    redirectUrl: string;

    userName: string;
    userId: string;
    userPemission: number;


    login() {
        if (localStorage.getItem('userId') != undefined) {
            this.userName = localStorage.getItem('userName');
            this.userId = localStorage.getItem('userId');
            this.userPemission = parseInt(localStorage.getItem('userPemission'));
            this.isLogin = true;
        }
    }

    logout(): void {
        localStorage.clear();

        this.isLogin = false;
    }
}

