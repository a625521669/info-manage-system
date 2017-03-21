import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';
import { UserService } from '../user/user.service';

declare const $: any;

@Component({
    selector: 'Filter',
    templateUrl: './filter.component.html',
    providers: [
        OtherService,
        UserService
    ]
})

export class FilterComponent {
    public teacherList = [];
    public selectedUserName = "";

    public ownPart = "";
    public studentNoOrName = "";

    public teacherNoOrName = "";

    public subject = "";
    public courseNo = "";

    //构造方法
    constructor(private service: OtherService, private uService: UserService) {
    }

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
    searchStudent() {
        $("#student-info-modal").modal('show');
    }

    searchTeacher() {
        $("#teacher-info-modal").modal('show');
    }

    searchCourse() {
        $("#course-modal").modal('show');
    }
};