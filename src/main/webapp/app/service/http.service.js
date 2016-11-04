"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_notifications_1 = require('angular2-notifications');
var http_2 = require('@angular/http');
/**
 * HttpService handles errors and autowire
 */
var HttpService = (function () {
    /**
     * Autowire Services
     */
    function HttpService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        /**
         * base url for backend api
         */
        this.API_BASE_URL = "http://localhost:3000/rest_stubs/";
        /**
         * Header for each Backend-API request
         */
        this.API_HEADER = {
            headers: (new http_2.Headers({
                'Content-Type': 'application/json'
            }))
        };
    }
    /**
     * Request Backend Resource by HTTP Typae GET.
     */
    HttpService.prototype.get = function (url) {
        return this.http.get(this.API_BASE_URL + url, this.API_HEADER);
    };
    /**
     * Error Handler
     */
    HttpService.prototype.handleError = function (error) {
        this.notificationService.error("HTTP Fehler", "Überprüfen Sie Ihre Internetverbindung.");
        return null;
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_notifications_1.NotificationsService])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map