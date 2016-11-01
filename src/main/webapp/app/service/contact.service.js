"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_service_1 = require('./http.service');
var angular2_notifications_1 = require('angular2-notifications');
require('rxjs/add/operator/toPromise');
var ContactsService = (function (_super) {
    __extends(ContactsService, _super);
    /**
     * Autowire
     */
    function ContactsService(_http, _notificationService) {
        _super.call(this, _http, _notificationService);
    }
    /**
     * Returns a List of all Contacts.
     */
    ContactsService.prototype.get = function () {
        return this.http.get("http://localhost:3000/rest_stubs/contacts.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Returns a List of all Contacts.
     */
    ContactsService.prototype.find = function (id) {
        return this.http.get("http://localhost:3000/rest_stubs/one_contact.json").map(function (response) { return response.json(); });
        /** return this.http.get("http://localhost:3000/rest_stubs/one_contact.json")
             .toPromise()
             .then(response => response.json() as Contact)
             .catch(this.handleError); */
    };
    ContactsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_notifications_1.NotificationsService])
    ], ContactsService);
    return ContactsService;
}(http_service_1.HttpService));
exports.ContactsService = ContactsService;
//# sourceMappingURL=contact.service.js.map