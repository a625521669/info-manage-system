import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OtherService } from './other.service';

@Component({
    selector: 'NewsAdd',
    templateUrl: './news-add.component.html',
    providers: [OtherService]
})

export class NewsAddComponent {
    //构造方法
    constructor(private service: OtherService) { }

    saveData = () => {
        let data = new FormData(document.forms['formData']);
        data.append('Author', localStorage.getItem('userName'));

        this.service.newsAdd(data)
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