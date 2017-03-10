import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Config from '../app.config';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TeacherService {
    constructor(private http: Http) { }

    
}
