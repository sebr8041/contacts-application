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
var core_1 = require("@angular/core");
var contact_service_1 = require('../service/contact.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var router_2 = require('@angular/router');
var ShowContactsComponent = (function () {
    /**
     * load param from url and ask contactsService to load contact by id.
     */
    function ShowContactsComponent(contactsService, route, notificationService, router) {
        var _this = this;
        this.contactsService = contactsService;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.contact = null;
        this.route.params.subscribe(function (params) {
            return _this.contactsService.find(params['id']).subscribe(function (contact) {
                _this.contact = contact;
            }, function (error) {
                _this.notificationService.error("Kontakt nicht gefunden.", "Der von Ihnen geöffnete Kontakt wurde nicht gefunden.");
                _this.router.navigateByUrl('contacts/all');
            });
        });
    }
    ShowContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/showcontacts.component.html',
            providers: [contact_service_1.ContactsService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactsService, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService, router_2.Router])
    ], ShowContactsComponent);
    return ShowContactsComponent;
}());
exports.ShowContactsComponent = ShowContactsComponent;
//# sourceMappingURL=showcontacts.component.js.map