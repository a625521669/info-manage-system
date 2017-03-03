import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';

import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'UserList',
    templateUrl: './user-list.component.html',
    providers: [UserService]
})

export class UserListComponent {
    //构造方法
    constructor(private userService: UserService) {
    }

    public data = {};
    public changedName = "";

    public userType = Config.userType;

    //绑定列表数据
    bindData = () => {
        this.userService.list()
            .then((result) => {
                this.data = result
            });
    }

    //初始化数据
    ngOnInit(): void {
        this.bindData();
    }

    //删除用户
    deleteFn = (userName) => {
        if (window.confirm('你确定要删除' + userName + '吗？')) {
            this.userService.deleteUser(userName)
                .then((result) => {
                    this.bindData();
                    result.success == true ? alert("删除成功！") : alert(result.reason);
                });
            return true;
        } else {
            return false;
        }

    }

    //显示密码修改面板
    showPasswprdChangeFn = (userName) => {
        console.log(userName);
        this.changedName = userName;
        $("#myModal").modal("show");
    }

    //修改密码
    changePasswordFn = () => {

    }
}