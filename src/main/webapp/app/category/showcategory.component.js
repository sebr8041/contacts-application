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
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var router_2 = require('@angular/router');
var contact_service_1 = require('../service/contact.service');
var ShowCategoryComponent = (function () {
    /**
     * load param from url and ask categoryService to load category by id.
     */
    function ShowCategoryComponent(categoryService, route, notificationService, router, contactService) {
        var _this = this;
        this.categoryService = categoryService;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.contactService = contactService;
        /**
         * storage for category from backend.
         */
        this.category = null;
        this.emailList = "mailto: ";
        this.route.params.subscribe(function (params) {
            // load category.
            _this.categoryService.find(params['id']).subscribe(function (category) {
                _this.category = category;
            }, function (error) {
                _this.notificationService.error("Kategorie nicht gefunden.", "Die von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                _this.router.navigateByUrl('category/all');
            });
            _this.contactService.findByCategory(params['id']).subscribe(function (contacts) {
                var counter = 0;
                contacts.forEach(function (contact) {
                    if (contact.emails.length > 0) {
                        _this.emailList += contact.emails[0] + ",";
                        counter++;
                    }
                });
                if (counter > 0) {
                    _this.emailList = _this.emailList.substring(0, _this.emailList.length - 1);
                }
                else {
                    _this.emailList = "";
                }
            });
        });
    }
    ShowCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/showcategory.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService, router_2.Router, contact_service_1.ContactsService])
    ], ShowCategoryComponent);
    return ShowCategoryComponent;
}());
exports.ShowCategoryComponent = ShowCategoryComponent;
//# sourceMappingURL=showcategory.component.js.map