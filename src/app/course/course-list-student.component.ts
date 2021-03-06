import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseService } from './course.service';

import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'course-list',
    templateUrl: './course-list-student.component.html',
    providers: [CourseService]
})

export class CourseListStudentComponent {
    @Input() showType;

    //构造方法
    constructor(private service: CourseService) {
    }

    public data = {};
    public changedName = "";
    public keywords = '';
    public type = '';
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

    chooseFn = (id) => {
        if (window.confirm('你确定要选课吗？')) {
            this.service.courseChoose(id, localStorage.getItem("userName"))
                .then((result) => {
                    this.bindData();
                    result.success == true ? alert("选课成功！") : alert(result.reason);
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

    @Input()
    set subject(subject) {
        this.type = subject;
        this.bindData();
    }

    @Input()
    set courseNo(courseNo) {
        this.keywords = courseNo;
        this.bindData();
    }
}
