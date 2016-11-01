import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Contact } from '../models/contact';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/toPromise';

/**
 * HttpService handles errors and autowire 
 */
@Injectable()
export abstract class HttpService {

    /**
     * HttpService
     */
    protected http: Http;

    /**
     * NotificationService
     */
    private notificationService: NotificationsService;

    /**
     * Autowire Services
     */
    constructor(private _http: Http,
        private _notificationService: NotificationsService) {
        this.http = _http;
        this.notificationService = _notificationService;
    }

    /**
     * Error Handler
     */
    protected handleError(error: any): Promise<any> {
        this.notificationService.error("HTTP Fehler", "Überprüfen Sie Ihre Internetverbindung.");
        return Promise.reject(error.message || error);
    }
}