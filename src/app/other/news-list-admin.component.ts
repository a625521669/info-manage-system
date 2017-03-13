import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';

import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'NewsList',
    templateUrl: './news-list-admin.component.html',
    providers: [OtherService]
})

export class NewsListAdminComponent {
    //构造方法
    constructor(private service: OtherService) {
    }

    public data = {};
    public changedName = "";
    public keywords = '';
    public type = '所有';
    public userType = Config.userType;

    //绑定列表数据
    bindData = () => {
        this.service.newsList(this.keywords, this.type)
            .then((result) => {
                this.data = result
            });
    }

    //初始化数据
    ngOnInit(): void {
        this.bindData();
    }

    deleteFn = (id) => {
        if (window.confirm('你确定要删除吗？')) {
            this.service.newsDelete(id)
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

    changeType(type){
        this.type = type;
        this.bindData();
    }
}
