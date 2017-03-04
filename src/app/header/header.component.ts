import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Component({
    selector: 'Header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    constructor(public authService: AuthService, private router: Router) {
    }

    userName = this.authService.userName != undefined ? this.authService.userName : "请登陆";

    logout(){
        this.authService.logout();
        // this.authService.redirectUrl = this.router
        this.router.navigate(["/login"]);
    }
}