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
var category_service_1 = require('../service/category.service');
var categoryFilter_1 = require('../models/categoryFilter');
var angular2_modal_1 = require('angular2-modal');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var angular2_notifications_1 = require('angular2-notifications');
var ListContactsComponent = (function () {
    /**
     * Autowire contactService
     */
    function ListContactsComponent(contactService, overlay, vcRef, modal, notificationService, categoryService) {
        var _this = this;
        this.contactService = contactService;
        this.modal = modal;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
        /**
         * saves all contacts from backend.
         */
        this.contacts = [];
        /**
         * saves all categorys from backend.
         */
        this.categorys = [];
        // container or modals.
        overlay.defaultViewContainer = vcRef;
        this.loadingFinish = false;
        this.checkedCategory = [];
        this.categoryFilter = new categoryFilter_1.CategoryFilter();
        // load all contacts
        this.contactService.getAll().subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.loadingFinish = true;
        });
        // load all categorys 
        this.categoryService.getAll().subscribe(function (categorys) {
            _this.categorys = categorys;
            _this.resetCheckboxes();
        });
    }
    ListContactsComponent.prototype.resetCheckboxes = function () {
        this.checkedCategory = [];
        for (var i = 0; i < this.categorys.length; i++) {
            this.checkedCategory.push(false);
        }
    };
    /**
     * Handler delete contact.
     */
    ListContactsComponent.prototype.deleteContact = function (id) {
        var _this = this;
        // find contact 
        this.contactService.find(id).subscribe(function (contact) {
            // user should confirm deleting a contact.
            _this.modal.confirm()
                .size('sm')
                .isBlocking(true)
                .showClose(true)
                .keyboard(27)
                .title('Kontakt löschen')
                .body('Kontakt "' + contact.name + '" wirklich löschen?')
                .okBtn('Löschen')
                .okBtnClass('btn btn-danger')
                .cancelBtn('Abbrechen')
                .cancelBtnClass('btn btn-default')
                .open()
                .then(function (result) { return result.result; })
                .then(function (result) {
                _this.contactService.remove(contact.id).subscribe(function (result) {
                    _this.deleteContactFromLocaleArray(contact.id);
                    _this.notificationService.success("Erfolg!", 'Kontakt  "' + contact.name + '" gelöscht!');
                });
            }, function (result) {
                // fail
            });
        });
    };
    ListContactsComponent.prototype.deleteContactFromLocaleArray = function (id) {
        var _this = this;
        this.contacts.forEach(function (contact, index) {
            if (contact.id === id) {
                _this.contacts.splice(index, 1);
            }
        });
    };
    ListContactsComponent.prototype.resetCategoryFilter = function () {
        this.resetCheckboxes();
        this.categoryFilter = new categoryFilter_1.CategoryFilter();
    };
    ListContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/listcontacts.component.html',
            providers: [contact_service_1.ContactsService, category_service_1.CategoryService],
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactsService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal, angular2_notifications_1.NotificationsService, category_service_1.CategoryService])
    ], ListContactsComponent);
    return ListContactsComponent;
}());
exports.ListContactsComponent = ListContactsComponent;
//# sourceMappingURL=listcontacts.component.js.map