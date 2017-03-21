import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';

//声明jquery
declare const $: any;

@Component({
    selector: 'user-info-list',
    templateUrl: './user-info-list.component.html',
    providers: [UserService]
})

export class UserInfoListComponent {
    @Input() showType;

    private _ownPart = '';

    //构造方法
    constructor(private userService: UserService) { }

    public data = {};
    public changedName = '';
    public keywords = '';
    public type = '';

    //绑定列表数据
    bindData = () => {
        this.userService.infoList(this.keywords, this.type, this._ownPart)
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

    @Input()
    set ownPart(ownPart: string) {
        this._ownPart = ownPart;
        this.bindData();
    }

    @Input()
    set studentNoOrName(studentNoOrName: string) {
        this.keywords = studentNoOrName;
        this.bindData();
    }

    @Input()
    set teacherNoOrName(teacherNoOrName: string) {
        this.keywords = teacherNoOrName;
        this.bindData();
    }

    @Input()
    set userType(userType: string) {
        this.type = userType;
        this.bindData();
    }
}