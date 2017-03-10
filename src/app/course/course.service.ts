import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseService {
    constructor(private http: Http) { }

    courseList() {
        return this.http.get(Config.apiHost + "/course/list")
            .toPromise()
            .then(res => res.json())

    }
}