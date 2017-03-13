import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseService } from './course.service';

import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'CourseList',
    templateUrl: './course-list-student.component.html',
    providers: [CourseService]
})

export class CourseListStudentComponent {
    //构造方法
    constructor(private service: CourseService) {
    }

    public data = {};
    public changedName = "";
    public keywords = '';
    public type = '所有';
    public userType = Config.userType;

    //绑定列表数据
    bindData = () => {
        this.service.courseList(this.keywords, this.type)
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
            this.service.courseDelete(id)
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
