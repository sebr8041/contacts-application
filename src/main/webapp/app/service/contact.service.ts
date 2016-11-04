import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../models/contact';
import { HttpService } from './http.service'
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactsService extends HttpService {

    /**
     * Autowire Services
     * TODO: this constructor sucks.
    */
    constructor(http: Http,
        notificationService: NotificationsService) {
        super(http, notificationService);
    }


    /**
     * Returns a List of all Contacts.
     */
    public getAll(): Observable<Contact[]> {
        return this.get("contacts.json").map((response) => response.json() as Contact[]);
    }

    /**
     * Returns one contact by id. 
     */
    public find(id: string): Observable<Response> {
        return this.get("contacts.json");
    }

} 