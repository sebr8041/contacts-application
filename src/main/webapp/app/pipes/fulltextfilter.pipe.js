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
var FulltextFilterPipe = (function () {
    function FulltextFilterPipe() {
        /**
         * Seperator for building all values as a string.
         */
        this.SEPERATOR = " ";
    }
    /**
     * transform method for filter. (need for inteface PipeTransform)
     */
    FulltextFilterPipe.prototype.transform = function (values, searchText) {
        var _this = this;
        // checks length of filter variable
        if (searchText.length === 0)
            return values;
        // filter input.
        return values.filter(function (value) {
            // get only all varibles from object. (not the keys). And check against searchText.
            return _this.getValuesFromObject(value).includes(searchText);
        });
    };
    /**
     * Get all Values from Object as a string with a seperator.
     */
    FulltextFilterPipe.prototype.getValuesFromObject = function (object) {
        var result = "";
        for (var key in object) {
            if (object[key] instanceof Object) {
                result += this.SEPERATOR + this.getValuesFromObject(object[key]);
            }
            else {
                result += this.SEPERATOR + object[key];
            }
        }
        return result;
    };
    FulltextFilterPipe = __decorate([
        core_1.Pipe({
            name: 'fulltextFilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FulltextFilterPipe);
    return FulltextFilterPipe;
}());
exports.FulltextFilterPipe = FulltextFilterPipe;
//# sourceMappingURL=fulltextfilter.pipe.js.map