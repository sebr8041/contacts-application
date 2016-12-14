import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Rx';
import { RequestOptionsArgs, Headers } from '@angular/http';

/**
 * HttpService handles errors and autowire 
 */
@Injectable()
export abstract class HttpService {

    /**
     * base url for backend api
     */
    private readonly API_BASE_URL: string = "/api/";

    /**
     * Header for each Backend-API request
     */
    private readonly API_HEADER: RequestOptionsArgs = {
        headers: (new Headers({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json; charset=utf-8'
        }))
    };

    /**
     * Autowire Services
     */
    constructor(protected http: Http,
        protected notificationService: NotificationsService) {
    }

    /**
     * Request Backend Resource by HTTP Typae GET.
     */
    protected get(url: string): Observable<Response> {
        return this.http.get(this.API_BASE_URL + url, this.API_HEADER);
    }

    /**
     * Backend request to delete element.
     */
    protected delete(url: string): Observable<Response> {
        return this.http.delete(this.API_BASE_URL + url, this.API_HEADER);
    }

    /**
     * Backend Request for post element.
     */
    protected post(url: string, data: any): Observable<Response> {
        return this.http.post(this.API_BASE_URL + url, data, this.API_HEADER);
    }

    /**
     * Backend Request for post element.
     */
    protected put(url: string, data: any): Observable<Response> {
        return this.http.put(this.API_BASE_URL + url, data, this.API_HEADER);
    }

    /**
     * Error Handler
     */
    protected handleError(error: any): Observable<any> {
        this.notificationService.error("HTTP Fehler", "Überprüfen Sie Ihre Internetverbindung.");
        return null;
    }
}