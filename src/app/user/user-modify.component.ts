import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'UserModify',
    templateUrl: './user-modify.component.html',
    providers: [UserService]
})

export class UserModifyComponent {
    public data = {};

    //构造方法
    constructor(private userService: UserService, public router: Router, public route: ActivatedRoute) {
    }

    ngOnInit() {
        //方法一，直接获取id
        //let id = +this.route.snapshot.params['id'];

        //方法二，用观察者模式获取id
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap(params => this.userService.getInfo(params['id']))
            .subscribe(data => this.data = data);
    }

    saveData() {
        let data = new FormData(document.forms['formData']);

        data.append('UserID', this.route.snapshot.params['id']);

        this.userService.modifyUser(data)
            .then((result) => {
                if (result.success) {
                    alert('修改成功！');
                    this.router.navigate(['/user-list/info']);

                } else {
                    alert(result.Reason);
                }
            })
    }
};