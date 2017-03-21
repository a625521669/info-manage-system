import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseService {
    constructor(private http: Http) { }

    courseList(keywords, type) {
        return this.http.get(Config.apiHost + "/course/list?keywords=" + keywords + "&type=" + type)
            .toPromise()
            .then(res => res.json())
    }

    courseAdd(body) {
        return this.http.post(Config.apiHost + "/course/add", body)
            .toPromise()
            .then(res => res.json())
    }

    courseModify(body) {
        return this.http.post(Config.apiHost + "/course/modify", body)
            .toPromise()
            .then(res => res.json())
    }

    courseDelete(id) {
        return this.http.get(Config.apiHost + "/course/delete?id=" + id)
            .toPromise()
            .then(res => res.json())
    }

    courseInfo(id) {
        return this.http.get(Config.apiHost + "/course/Info?id=" + id)
            .toPromise()
            .then(response => response.json())
    }

    courseChoose(courseId, studentNo) {
        return this.http.get(Config.apiHost + "/course/choose?courseId=" + courseId + "&studentNo=" + studentNo)
            .toPromise()
            .then(response => response.json())
    }

    cancelChoose(id) {
        return this.http.get(Config.apiHost + "/course/cancelChoose?id=" + id)
            .toPromise()
            .then(response => response.json())
    }

    chooseList(studentNo, teacherName, teacherUserName = "", courseId = "", sort = 0) {
        return this.http.get(Config.apiHost + "/course/chooseList?studentNo=" + studentNo + "&teacherName=" + teacherName + "&teacherUserName=" + teacherUserName + "&courseId=" + courseId + "&sort=" + sort)
            .toPromise()
            .then(response => response.json())
    }

    examModify(body) {
        return this.http.post(Config.apiHost + "/course/examModify", body)
            .toPromise()
            .then(res => res.json())
    }

    scoreInput(ids, scores) {
        return this.http.get(Config.apiHost + "/course/scoreInput?ids=" + ids + "&scores=" + scores)
            .toPromise()
            .then(response => response.json())
    }
}