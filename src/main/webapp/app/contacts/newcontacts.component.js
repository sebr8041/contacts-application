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
var core_1 = require("@angular/core");
var angular2_notifications_1 = require('angular2-notifications');
var contact_service_1 = require('../service/contact.service');
var category_service_1 = require('../service/category.service');
var contact_1 = require('../models/contact');
var category_1 = require('../models/category');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var neworeditcontacts_component_1 = require('./neworeditcontacts.component');
var NewContactsComponent = (function (_super) {
    __extends(NewContactsComponent, _super);
    /**
     * init clean formular for new contact.
     */
    function NewContactsComponent(notificationService, categoryService, contactService, router, fb) {
        // call parent.
        _super.call(this, notificationService, categoryService, contactService, router, fb);
        this.PAGE_TITLE = "Neuer Kontakt";
        this.PAGE_DESC = "Mit dem folgenden Formular können Sie einen neuen Kontakt hinzufügen:";
        // init clean formular
        this.initForm(null, null, null, null, [], [], []);
    }
    /**
     * handler submit form for add NEW contact.
     */
    NewContactsComponent.prototype.submitForm = function (form, emails, addresses, phones) {
        var _this = this;
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            var category = new category_1.Category(form.value.category);
            // cretae instance from id.
            var contact = new contact_1.Contact(null, form.value.name, form.value.company, form.value.dateOfBirth, category, emails, phones, addresses);
            // post contact to server.
            this.contactService.add(contact).subscribe(function (respone) {
                _this.notificationService.success("Erfolg", "Kontakt erfolgreich erstellt.");
                _this.router.navigateByUrl('contacts/all');
            });
        }
        else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    };
    NewContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/neworeditcontacts.component.html',
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, category_service_1.CategoryService, contact_service_1.ContactsService, router_1.Router, forms_1.FormBuilder])
    ], NewContactsComponent);
    return NewContactsComponent;
}(neworeditcontacts_component_1.NewOrEditContactsComponent));
exports.NewContactsComponent = NewContactsComponent;
//# sourceMappingURL=newcontacts.component.js.map