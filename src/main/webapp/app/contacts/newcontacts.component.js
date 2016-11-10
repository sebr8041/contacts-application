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
var angular2_notifications_1 = require('angular2-notifications');
var contact_service_1 = require('../service/contact.service');
var category_service_1 = require('../service/category.service');
var contact_1 = require('../models/contact');
var category_1 = require('../models/category');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var NewContactsComponent = (function () {
    /**
     * create new contact.
     */
    function NewContactsComponent(notificationService, categoryService, contactService, router, fb) {
        var _this = this;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
        this.contactService = contactService;
        this.router = router;
        /**
         * all categories to choose between them.
         */
        this.categorys = [];
        /**
         * model to save all addresses from form.
         */
        this.addresses = [];
        /**
       * model to save all emails from form.
       */
        this.emails = [];
        /**
       * model to save all phones from form.
       */
        this.phones = [];
        /**
         * form submited min one time.
         */
        this.submitedForm = false;
        this.categoryService.getAll().subscribe(function (categorys) { return _this.categorys = categorys; });
        this.form = fb.group({
            'name': [null, forms_1.Validators.required],
            'company': [null, forms_1.Validators.required],
            'dateOfBirth': [null, forms_1.Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$")],
            'category': [null, forms_1.Validators.pattern("^(?!null$).*$")]
        });
    }
    /**
     * custom track by for loops. dont loses focus
     */
    NewContactsComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    /**
     * handler to add a new element on phones, emails or addresses
     */
    NewContactsComponent.prototype.addNewElement = function (array) {
        array.push("");
    };
    /**
     * handler to remove a new element on phones, emails or addresses
     */
    NewContactsComponent.prototype.removeElement = function (index, array) {
        array.splice(index, 1);
    };
    /**
     * handler submit form.
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
            templateUrl: 'app/contacts/newcontacts.component.html',
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, category_service_1.CategoryService, contact_service_1.ContactsService, router_1.Router, forms_1.FormBuilder])
    ], NewContactsComponent);
    return NewContactsComponent;
}());
exports.NewContactsComponent = NewContactsComponent;
//# sourceMappingURL=newcontacts.component.js.map