import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';


import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'RevieList',
    templateUrl: './review-list.component.html',
    providers: [OtherService]
})

export class ReviewListComponent {
    //构造方法
    constructor(private service: OtherService) {
    }

    public data = {};
    public keywords = '';



    //绑定列表数据
    bindData = () => {
        this.service.reviewList(this.keywords)
            .then((res) => {
                res.list = res.list.filter(item => {
                    return item.Contents != "" || item.Contents != null;
                })
                this.data = res
            });
    }

    //初始化数据
    ngOnInit(): void {

        this.bindData();
    }

    deleteFn = (id) => {
        if (window.confirm('你确定要删除吗？')) {
            this.service.reviewDelete(id)
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
