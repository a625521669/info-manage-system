import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { CourseService } from './course.service';
import { UserService } from '../user/user.service';

@Component({
    selector: 'CourseModify',
    templateUrl: './course-modify.component.html',
    providers: [CourseService, UserService]
})

export class ExamModifyComponent {
    public data = {};
    public teacherList = [];


    //构造方法
    constructor(private service: CourseService, private uService: UserService, public router: Router, public route: ActivatedRoute) {
    }

    ngOnInit() {
        //方法一，直接获取id
        //let id = +this.route.snapshot.params['id'];

        //方法二，用观察者模式获取id
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap(params => this.service.courseInfo(params['id']))
            .subscribe(data => this.data = data);


        //获取教师数据
        this.uService.infoList("", "教师")
            .then(res => {
                this.teacherList = res.list;
            })
    }

    saveData(id) {
        let data = new FormData(document.forms['formData']);

        data.append('ID', id);

        this.service.examModify(data)
            .then((result) => {
                if (result.success) {
                    alert('修改成功！');
                    this.router.navigate(['/course-list/admin']);

                } else {
                    alert(result.Reason);
                }
            })
    }
};