import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ICategory } from '../models/category';
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
    public getAll(): Observable<ICategory[]> {
        return this.get("category").map((response) => response.json() as ICategory[]);
    }

    /**
     * Returns one category by id. 
     */
    public find(id: string): Observable<ICategory> {
        return this.get("category/" + id).map((response) => response.json() as ICategory); 
    }


    /**
     * Delete category by id.
     */
    public remove(id: string): Observable<Response> {
        return this.delete("category/" + id);
    }

    /**
    * add a new category
    */
    public add(category: ICategory): Observable<Response> {
        return this.post("category", category);
    }

    /**
    * update a category
    */
    public update(category: ICategory): Observable<Response> {
        return this.put("category", category);
    }


} 