import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';

//声明jquery
declare const $: any;

@Component({
    selector: 'UserInfoList',
    templateUrl: './user-info-list.component.html',
    providers: [UserService]
})

export class UserInfoListComponent {
    //构造方法
    constructor(private userService: UserService) { }

    public data = {};
    public changedName = '';
    public keywords = '';

    //绑定列表数据
    bindData = () => {
        this.userService.infoList(this.keywords)
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

    //搜索
    search(keywords) {
        this.keywords = keywords;

        this.bindData();
    }
}