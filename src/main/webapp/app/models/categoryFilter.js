"use strict";
var CategoryFilter = (function () {
    /**
     * set default values for object fields
     */
    function CategoryFilter() {
        this.checkedCategory = [];
        this.filterOut = undefined;
    }
    /**
     * checks filter model has category
     */
    CategoryFilter.prototype.containsCategory = function (categoryId) {
        for (var i = 0; i < this.checkedCategory.length; i++) {
            if (this.checkedCategory[i].id == categoryId) {
                return true;
            }
        }
        return false;
    };
    /**
     * add oder delete a category from this filter model.
     */
    CategoryFilter.prototype.changeCategory = function (category) {
        if (this.checkedCategory.includes(category)) {
            var index = this.checkedCategory.indexOf(category);
            this.checkedCategory.splice(index, 1);
        }
        else {
            this.checkedCategory.push(category);
        }
    };
    return CategoryFilter;
}());
exports.CategoryFilter = CategoryFilter;
//# sourceMappingURL=categoryFilter.js.map