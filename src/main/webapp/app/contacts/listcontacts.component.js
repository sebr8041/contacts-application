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
var ListContactsComponent = (function () {
    /**
     * Autowire contactService
     */
    function ListContactsComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        /**
         * saves all contacts from backend.
         */
        this.contacts = [];
        this.contactService.getAll().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    }
    ListContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/listcontacts.component.html',
            providers: [contact_service_1.ContactsService]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactsService])
    ], ListContactsComponent);
    return ListContactsComponent;
}());
exports.ListContactsComponent = ListContactsComponent;
//# sourceMappingURL=listcontacts.component.js.map