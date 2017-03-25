import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OtherService {
    constructor(private http: Http) { }

    newsList(keywords, type) {
        return this.http.get(Config.apiHost + "/news/list?keywords=" + keywords + "&type=" + type)
            .toPromise()
            .then(res => res.json())
    }

    newsAdd(body) {
        return this.http.post(Config.apiHost + "/news/add", body)
            .toPromise()
            .then(res => res.json())
    }

    newsModify(body) {
        return this.http.post(Config.apiHost + "/news/modify", body)
            .toPromise()
            .then(res => res.json())
    }

    newsDelete(id) {
        return this.http.get(Config.apiHost + "/news/delete?id=" + id)
            .toPromise()
            .then(res => res.json())
    }

    newsInfo(id) {
        return this.http.get(Config.apiHost + "/news/info?id=" + id)
            .toPromise()
            .then(res => res.json())
    }

    reviewAdd(body) {
        return this.http.post(Config.apiHost + "/reviews/add", body)
            .toPromise()
            .then(res => res.json())
    }

    reviewList(keywords, tUserName = '') {
        return this.http.get(Config.apiHost + "/reviews/list?keywords=" + keywords + "&tUserName=" + tUserName)
            .toPromise()
            .then(res => res.json())
    }

    reviewDelete(id) {
        return this.http.get(Config.apiHost + "/reviews/delete?id=" + id)
            .toPromise()
            .then(res => res.json())
    }
}