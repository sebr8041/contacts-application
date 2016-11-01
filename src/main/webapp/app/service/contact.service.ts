import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../models/contact';
import { HttpService } from './http.service'
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactsService extends HttpService {

    /**
     * Autowire 
     */
    constructor(_http: Http, _notificationService: NotificationsService) {
        super(_http, _notificationService);
    }

    /**
     * Returns a List of all Contacts.
     */
    public get(): Promise<Contact[]> {
        return this.http.get("http://localhost:3000/rest_stubs/contacts.json")
            .toPromise()
            .then(response => response.json() as Contact[])
            .catch(this.handleError);
    }

    /**
     * Returns a List of all Contacts.
     */
    public find(id: string): Observable<Contact> {
        return this.http.get("http://localhost:3000/rest_stubs/one_contact.json").map(response => response.json() as Contact);
       /** return this.http.get("http://localhost:3000/rest_stubs/one_contact.json")
            .toPromise()
            .then(response => response.json() as Contact)
            .catch(this.handleError); */
    }

} 