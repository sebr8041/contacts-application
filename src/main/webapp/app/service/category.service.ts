import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Category } from '../models/category';
import { HttpService } from './http.service'
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService extends HttpService {

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
    public getAll(): Observable<Category[]> {
        return this.get("categorys.json").map((response) => response.json() as Category[]);
    }

    /**
     * Returns one contact by id. 
     */
    public find(id: string): Observable<Category> {
        return this.get("one_category.json").map((response) => response.json() as Category); 
    }

} 