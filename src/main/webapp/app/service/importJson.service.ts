import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact } from '../models/contact';
import { HttpService } from './http.service'
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map'

@Injectable()
export class ImportJsonService extends HttpService {

    /**
     * Autowire Services
     * TODO: this constructor sucks.
    */
    constructor(http: Http,
        notificationService: NotificationsService) {
        super(http, notificationService);
    }

    /**
     * Returns one contact by id. 
     */
    public import(data: string): Observable<Response> {
        return this.post("import", data); 
    }
} 