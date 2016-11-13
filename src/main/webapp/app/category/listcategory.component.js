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
var ListCategoryComponent = (function () {
    /**
     * Autowire contactService
     */
    function ListCategoryComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        /**
         * saves all categorys from backend.
         */
        this.categorys = [];
        // load all categorys 
        this.categoryService.getAll().subscribe(function (categorys) {
            _this.categorys = categorys;
        });
    }
    ListCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/listcategory.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], ListCategoryComponent);
    return ListCategoryComponent;
}());
exports.ListCategoryComponent = ListCategoryComponent;
//# sourceMappingURL=listcategory.component.js.map