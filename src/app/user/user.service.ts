import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    list() {
        return this.http.get(Config.apiHost + "/user/list")
            .toPromise()
            .then(response => response.json())
    }

    infoList() {
        return this.http.get(Config.apiHost + '/user/InfoList')
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
}