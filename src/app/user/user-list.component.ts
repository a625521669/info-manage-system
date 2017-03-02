import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
    selector: 'UserList',
    templateUrl: './user-list.component.html',
    providers: [UserService]
})


export class UserListComponent {
    data = {};

    constructor(private userService: UserService) { }

    ngOnInit(): void{
        this.userService.list().then(result => this.data = result);
    }
};