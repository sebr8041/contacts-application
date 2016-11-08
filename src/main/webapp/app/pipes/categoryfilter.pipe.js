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
var core_1 = require('@angular/core');
var CategoryFilterPipe = (function () {
    function CategoryFilterPipe() {
    }
    /**
     * transform method for filter. (need for inteface PipeTransform)
     */
    CategoryFilterPipe.prototype.transform = function (values, categoryFilter) {
        // checks length of filter variable
        if (categoryFilter === null || categoryFilter === undefined || categoryFilter.filterOut === undefined)
            return values;
        // filter out ? 
        if (categoryFilter.filterOut) {
            return values.filter(function (value) {
                return categoryFilter.containsCategory(value.category.id);
            });
        }
        else {
            return values.filter(function (value) {
                return !categoryFilter.containsCategory(value.category.id);
            });
        }
    };
    CategoryFilterPipe = __decorate([
        core_1.Pipe({
            name: 'categoryfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryFilterPipe);
    return CategoryFilterPipe;
}());
exports.CategoryFilterPipe = CategoryFilterPipe;
//# sourceMappingURL=categoryfilter.pipe.js.map