import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    list(keywords, type) {
        return this.http.get(Config.apiHost + "/user/list?keywords=" + keywords + "&type=" + type)
            .toPromise()
            .then(response => response.json())
    }

    infoList(keywords) {
        return this.http.get(Config.apiHost + '/user/InfoList?keywords=' + keywords)
            .toPromise()
            .then(response => response.json())
    }

    changePasswordAdmin(body) {
        return this.http.post(Config.apiHost + "/user/ChangePasswordAdmin", body)
            .toPromise()
            .then(response => response.json())
    }

    changePassword(body) {
        return this.http.post(Config.apiHost + "/user/ChangePassword", body)
            .toPromise()
            .then(response => response.json())
    }

    deleteUser(userName) {
        return this.http.get(Config.apiHost + "/user/delete?userName=" + userName)
            .toPromise()
            .then(response => response.json())
    }

    addUser(body) {
        return this.http.post(Config.apiHost + "/user/AddUser", body)
            .toPromise()
            .then(response => response.json())
    }

    modifyUser(body) {
        return this.http.post(Config.apiHost + "/user/modify", body)
            .toPromise()
            .then(response => response.json())
    }

    getInfo(id) {
        return this.http.get(Config.apiHost + "/user/Info?userId=" + id)
            .toPromise()
            .then(response => response.json())
    }
}