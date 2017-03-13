import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { UserService } from '../user/user.service';
@Component({
    selector: 'CourseAdd',
    templateUrl: './course-add.component.html',
    providers: [CourseService, UserService]
})

export class CourseAddComponent {
    public teacherList = [];

    //构造方法
    constructor(private service: CourseService, private uService: UserService) { }

    ngOnInit() {
        //获取教师数据
        this.uService.infoList("", "教师")
            .then(res => {
                this.teacherList = res.list;
            })
    }

    saveData = () => {
        let data = new FormData(document.forms['formData']);
        data.append('Author', localStorage.getItem('userName'));

        this.service.courseAdd(data)
            .then((result) => {
                if (result.success) {
                    alert('添加成功！');
                    document.forms['formData'].reset();
                } else {
                    alert(result.Reason);
                }
            })
    }
};