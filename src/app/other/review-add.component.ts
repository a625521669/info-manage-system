import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ReviewAdd',
    templateUrl: './review-add.component.html',
    providers: [
        OtherService,
        UserService
    ]
})

export class ReviewAddComponent {
    public teacherList = [];
    public selectedUserName = "";

    //构造方法
    constructor(private service: OtherService, private uService: UserService) { }

    fetchTeacher = () => {
        this.uService.infoList("", "教师")
            .then(res => {
                res.list = res.list.filter(item => {
                    return item.Type == "教师";
                })
                this.teacherList = res.list;
            })
    }

    ngOnInit() {
        this.fetchTeacher();
    }

    saveData = () => {
        if (this.selectedUserName == "") {
            alert("请选择教师！");
            return;
        }

        let data = new FormData(document.forms['formData']);

        let selectedTeacher = this.teacherList.find((item) => {
            return item.UserName == this.selectedUserName;
        })

        data.append('UserName', localStorage.getItem('userName'));

        data.append("TeacherName", selectedTeacher.Name);

        this.service.reviewAdd(data)
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