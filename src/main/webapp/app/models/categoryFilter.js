"use strict";
var CategoryFilter = (function () {
    function CategoryFilter() {
    }
    /**
     * Filter has category selected?
     */
    CategoryFilter.prototype.containsCategory = function (id) {
        this.checkedCategory.forEach(function (category) {
            if (category.id === id) {
                return true;
            }
        });
        return false;
    };
    CategoryFilter.prototype.addCategory = function (category) {
        // push, when not exists.
        if (!this.containsCategory(category.id)) {
            this.checkedCategory.push(category);
        }
    };
    CategoryFilter.prototype.removeCategory = function (category) {
        if (this.containsCategory(category.id)) {
        }
    };
    return CategoryFilter;
}());
exports.CategoryFilter = CategoryFilter;
//# sourceMappingURL=categoryfilter.js.map