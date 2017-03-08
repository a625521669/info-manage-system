import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'NewsModify',
    templateUrl: './news-modify.component.html',
    providers: [OtherService]
})

export class NewsModifyComponent {
    public data = {};

    //构造方法
    constructor(private service: OtherService, public router: Router, public route: ActivatedRoute) {
    }

    ngOnInit() {
        //方法一，直接获取id
        //let id = +this.route.snapshot.params['id'];

        //方法二，用观察者模式获取id
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap(params => this.service.newsInfo(params['id']))
            .subscribe(data => this.data = data);
    }

    saveData(id) {
        let data = new FormData(document.forms['formData']);

        data.append('Author', localStorage.getItem('userName'));
        data.append('ID', id);

        this.service.newsModify(data)
            .then((result) => {
                if (result.success) {
                    alert('修改成功！');
                    this.router.navigate(['/news-list']);

                } else {
                    alert(result.Reason);
                }
            })
    }
};