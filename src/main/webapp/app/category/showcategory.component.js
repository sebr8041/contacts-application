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
var ShowCategoryComponent = (function () {
    /**
     * load param from url and ask categoryService to load category by id.
     */
    function ShowCategoryComponent(categoryService, route, notificationService, router) {
        var _this = this;
        this.categoryService = categoryService;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        /**
         * storage for category from backend.
         */
        this.category = null;
        this.route.params.subscribe(function (params) {
            return _this.categoryService.find(params['id']).subscribe(function (category) {
                _this.category = category;
            }, function (error) {
                _this.notificationService.error("Kategorie nicht gefunden.", "Die von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                _this.router.navigateByUrl('category/all');
            });
        });
    }
    ShowCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/showcategory.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService, router_2.Router])
    ], ShowCategoryComponent);
    return ShowCategoryComponent;
}());
exports.ShowCategoryComponent = ShowCategoryComponent;
//# sourceMappingURL=showcategory.component.js.map