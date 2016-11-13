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
require('rxjs/add/operator/map');
var ContactsService = (function (_super) {
    __extends(ContactsService, _super);
    /**
     * Autowire Services
     * TODO: this constructor sucks.
    */
    function ContactsService(http, notificationService) {
        _super.call(this, http, notificationService);
    }
    /**
     * Returns a List of all Contacts.
     */
    ContactsService.prototype.getAll = function () {
        return this.get("contact").map(function (response) { return response.json(); });
    };
    /**
     * Returns one contact by id.
     */
    ContactsService.prototype.find = function (id) {
        return this.get("contact/" + id).map(function (response) { return response.json(); });
    };
    /**
     * Delete contact by id.
     */
    ContactsService.prototype.remove = function (id) {
        return this.delete("contact/" + id);
    };
    /**
    * add a new contact
    */
    ContactsService.prototype.add = function (contact) {
        return this.post("contact", contact);
    };
    /**
    * update a contact
    */
    ContactsService.prototype.update = function (contact) {
        return this.put("contact", contact);
    };
    /**
     * find all contacts from an category
     */
    ContactsService.prototype.findByCategory = function (id) {
        return this.get("category/" + id + "/contact").map(function (response) { return response.json(); });
    };
    ContactsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_notifications_1.NotificationsService])
    ], ContactsService);
    return ContactsService;
}(http_service_1.HttpService));
exports.ContactsService = ContactsService;
//# sourceMappingURL=contact.service.js.map