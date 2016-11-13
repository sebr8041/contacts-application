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
var category_service_1 = require('../service/category.service');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var angular2_notifications_1 = require('angular2-notifications');
var angular2_modal_1 = require('angular2-modal');
var ListCategoryComponent = (function () {
    /**
     * Autowire contactService
     */
    function ListCategoryComponent(categoryService, modal, notificationService, overlay, vcRef) {
        var _this = this;
        this.categoryService = categoryService;
        this.modal = modal;
        this.notificationService = notificationService;
        /**
         * saves all categorys from backend.
         */
        this.categorys = [];
        // container or modals.
        overlay.defaultViewContainer = vcRef;
        // load all categorys 
        this.categoryService.getAll().subscribe(function (categorys) {
            _this.categorys = categorys;
        });
    }
    /**
     * Handler delete category.
     */
    ListCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        // find contact 
        this.categoryService.find(id).subscribe(function (category) {
            console.log("dfsf");
            // user should confirm deleting a contact.
            _this.modal.confirm()
                .size('sm')
                .isBlocking(true)
                .showClose(true)
                .keyboard(27)
                .title('Kontakt löschen')
                .body('Kontakt "' + category.name + '" wirklich löschen?')
                .okBtn('Löschen')
                .okBtnClass('btn btn-danger')
                .cancelBtn('Abbrechen')
                .cancelBtnClass('btn btn-default')
                .open()
                .then(function (result) { return result.result; })
                .then(function (result) {
                _this.categoryService.remove(category.id).subscribe(function (result) {
                    _this.deleteContactFromLocaleArray(category.id);
                    _this.notificationService.success("Erfolg!", 'Kategorie  "' + category.name + '" gelöscht!');
                }, function (error) {
                    _this.notificationService.error("Fehlgeschlagen!", 'Die Kategorie hat noch Kontakte. Somit kann diese nicht gelöscht werden.');
                });
            }, function (result) {
                // fail => nothing happens. user canceled action
            });
        });
    };
    /**
      * deleteing a category from the locale array (no need to reload complete contacts)
      */
    ListCategoryComponent.prototype.deleteContactFromLocaleArray = function (id) {
        var _this = this;
        this.categorys.forEach(function (category, index) {
            if (category.id === id) {
                _this.categorys.splice(index, 1);
            }
        });
    };
    ListCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/listcategory.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, bootstrap_1.Modal, angular2_notifications_1.NotificationsService, angular2_modal_1.Overlay, core_1.ViewContainerRef])
    ], ListCategoryComponent);
    return ListCategoryComponent;
}());
exports.ListCategoryComponent = ListCategoryComponent;
//# sourceMappingURL=listcategory.component.js.map