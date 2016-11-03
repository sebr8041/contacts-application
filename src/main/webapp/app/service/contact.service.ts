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
     * Autowire 
     */
    constructor(_http: Http, _notificationService: NotificationsService) {
        super(_http, _notificationService);
    }

    /**
     * Returns a List of all Contacts.
     */
    public get(): Observable<Contact[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/rest_stubs/contacts.json", {
            headers: headers
        }).map((response) => response.json() as Contact[]);
    }

    /**
     * Returns a List of all Contacts.
     */
    public find(id: string): Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/rest_stubs/contacts.json", {
            headers: headers
        });
        //.ap(response => response.json() as Contact);
        /** return this.http.get("http://localhost:3000/rest_stubs/one_contact.json")
             .toPromise()
             .then(response => response.json() as Contact)
             .catch(this.handleError); */
    }

} 