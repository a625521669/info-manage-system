import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    list() {
       return this.http.get("http://localhost:52097/user/list")
            .toPromise()
            .then(response => response.json())
    }
}