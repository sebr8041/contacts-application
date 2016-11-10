import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact } from '../models/contact';
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
    public getAll(): Observable<IContact[]> {
        return this.get("contact").map((response) => response.json() as IContact[]);
    }

    /**
     * Returns one contact by id. 
     */
    public find(id: string): Observable<IContact> {
        return this.get("contact/" + id).map((response) => response.json() as IContact);
    }

    /**
     * Delete contact by id.
     */
    public remove(id: string): Observable<Response> {
        return this.delete("contact/" + id);
    }

    /**
    * add a new contact
    */
    public add(contact: IContact): Observable<Response> {
        return this.post("contact", contact);
    }

} 