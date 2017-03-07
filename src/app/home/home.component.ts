import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    providers: [UserService]
})

export class HomeComponent {
    public data = {};

    //构造方法
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getInfo(localStorage.getItem('userId'))
            .then(res => {
                this.data = res;
            })
    }

    saveData() {
        let data = new FormData(document.forms['formData']);

        data.append('UserID', localStorage.getItem('userId'));

        this.userService.modifyUser(data)
            .then((result) => {
                if (result.success) {
                    alert('修改成功！');
                } else {
                    alert(result.Reason);
                }
            })
    }

};