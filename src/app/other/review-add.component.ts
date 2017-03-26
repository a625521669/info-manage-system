import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';
import { UserService } from '../user/user.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


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

    public pageType;



    //构造方法
    constructor(private service: OtherService, private uService: UserService, public router: Router, public route: ActivatedRoute) {

    }

    fetchTeacher = () => {
        this.uService.infoList("", "")
            .then(res => {
                if (localStorage.getItem('pemission') == '1')
                    res.list = res.list.filter(item => {
                        return item.Type == "教师";
                    })

                this.teacherList = res.list;
            })
    }

    ngOnInit() {
        //this.route.params
        //    .switchMap(params => this.pageType = params['pageType'])

        //this.pageType = this.route.snapshot.params['pageType'];

        //this.route.params
        //    .switchMap(params => params['pageType'])
        //    .subscribe(pageType => {
        //        if (this.pageType == "review" || this.pageType == "message")
        //            this.pageType = "";

        //        this.pageType = (this.pageType == undefined ? "" : this.pageType) + pageType;
        //    });

        this.route.params
            .switchMap(params => params['pageType'])
            .subscribe(pageType => {
                if (this.pageType == "review" || this.pageType == "message")
                    this.pageType = "";

                this.pageType = (this.pageType == undefined ? "" : this.pageType) + pageType;
            });

        this.fetchTeacher();
    }

    saveData = () => {
        if (this.selectedUserName == "") {
            alert("请选择对象！");
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
                alert('添加成功！');
                document.forms['formData'].reset();
            })
    }
};