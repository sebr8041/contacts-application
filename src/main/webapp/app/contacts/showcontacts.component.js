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
var ShowContactsComponent = (function () {
    function ShowContactsComponent(contactsService, route) {
        this.contactsService = contactsService;
        this.route = route;
        //  this.contactsService.find("1").then((contact) => { this.contact = contact; console.log(contact) });
    }
    ShowContactsComponent.prototype.resolve = function (route) {
        console.log(this);
        return this.contactsService.find("1");
    };
    ShowContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/showcontacts.component.html',
            providers: [contact_service_1.ContactsService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactsService, router_1.ActivatedRoute])
    ], ShowContactsComponent);
    return ShowContactsComponent;
}());
exports.ShowContactsComponent = ShowContactsComponent;
//# sourceMappingURL=showcontacts.component.js.map