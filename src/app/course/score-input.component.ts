import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseService } from './course.service';

import Config from '../app.config';

//声明jquery
declare const $: any;

@Component({
    selector: 'ScoreInput',
    templateUrl: './score-input.component.html',
    providers: [CourseService]
})

export class ScoreInputComponent {
    //构造方法
    constructor(private service: CourseService) {
    }

    public data = {
        list: [],
        count: 0,
    };
    public changedName = "";
    public courseId = '';
    public sort = 0;
    public userType = Config.userType;

    //绑定列表数据
    bindData = () => {
        this.service.chooseList('', '', localStorage.getItem('userName'), this.courseId, this.sort)
            .then((result) => {
                this.data = result
            });
    }

    //初始化数据
    ngOnInit(): void {
        this.bindData();
    }

    //搜索
    search(courseId) {
        this.courseId = courseId;

        this.bindData();
    }

    changeSort(sort) {
        this.sort = sort;
        this.bindData();
    }

    //提交保存
    save() {
        let idList = [];
        let scoreList = [];

        this.data.list.forEach((item, index) => {
            if (item.ChooseInfo.Score != "" && isFinite(item.ChooseInfo.Score)) {
                idList.push(item.ChooseInfo.ID);
                scoreList.push(item.ChooseInfo.Score);
            }
        })

        if (idList.length > 0) {
            this.service.scoreInput(idList.join(','), scoreList.join(','))
                .then((res) => {
                    if (res.success) {
                        alert("提交成功！");
                    } else {
                        alert(res.reason);
                    }
                })
                .catch((e) => {
                    alert("系统错误！" + e)
                })
        } else {
            alert("没有任何修改！");
            return;
        }
    }
}
