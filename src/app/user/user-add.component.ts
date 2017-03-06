import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'UserAdd',
    templateUrl: './user-add.component.html',
    providers: [UserService]
})

export class UserAddComponent {
    //构造方法
    constructor(private userService: UserService) { }

    saveData = () => {
        let data = new FormData(document.forms['formData']);
        this.userService.addUser(data)
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