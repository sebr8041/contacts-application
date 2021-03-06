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
var CategoryService = (function (_super) {
    __extends(CategoryService, _super);
    /**
     * Autowire Services
     * TODO: this constructor sucks.
    */
    function CategoryService(http, notificationService) {
        _super.call(this, http, notificationService);
    }
    /**
     * Returns a List of all Contacts.
     */
    CategoryService.prototype.getAll = function () {
        return this.get("category").map(function (response) { return response.json(); });
    };
    /**
     * Returns one category by id.
     */
    CategoryService.prototype.find = function (id) {
        return this.get("category/" + id).map(function (response) { return response.json(); });
    };
    /**
     * Delete category by id.
     */
    CategoryService.prototype.remove = function (id) {
        return this.delete("category/" + id);
    };
    /**
    * add a new category
    */
    CategoryService.prototype.add = function (category) {
        return this.post("category", category);
    };
    /**
    * update a category
    */
    CategoryService.prototype.update = function (category) {
        return this.put("category", category);
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_notifications_1.NotificationsService])
    ], CategoryService);
    return CategoryService;
}(http_service_1.HttpService));
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map