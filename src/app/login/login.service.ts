import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    login(body) {
        return this.http.post(Config.apiHost + '/user/login', body)
            .toPromise()
            .then(response => response.json())
    }
}