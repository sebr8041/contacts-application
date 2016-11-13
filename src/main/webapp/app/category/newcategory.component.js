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
var csscolor_service_1 = require("../service/csscolor.service");
var category_service_1 = require("../service/category.service");
var forms_1 = require('@angular/forms');
var category_1 = require("../models/category");
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var NewCategoryComponent = (function () {
    function NewCategoryComponent(cssColorService, categoryService, notificationService, router, formBuilder) {
        this.categoryService = categoryService;
        this.notificationService = notificationService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.availableColors = [];
        /**
         * form control elements for input fields in formular
         */
        this.name = new forms_1.FormControl();
        this.color = new forms_1.FormControl();
        /**
         * form submited min one time.
         */
        this.submitedForm = false;
        this.availableColors = cssColorService.getAll();
        // build form with variables
        this.form = this.formBuilder.group({
            'name': this.name,
            'color': this.color
        });
        // set validators for each field.
        this.name.setValidators(forms_1.Validators.required);
        this.color.setValidators(forms_1.Validators.pattern("^(?!null$).*$"));
    }
    /**
 * handler submit form for add NEW contact.
 */
    NewCategoryComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            var category = new category_1.Category(null);
            category.name = form.value.name;
            category.color = form.value.color;
            this.categoryService.add(category).subscribe(function (respone) {
                _this.notificationService.success("Erfolg", "Kategorie erfolgreich erstellt.");
                _this.router.navigateByUrl('category/all');
            });
        }
        else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    };
    NewCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/newcategory.component.html',
            providers: [csscolor_service_1.CssColorService]
        }), 
        __metadata('design:paramtypes', [csscolor_service_1.CssColorService, category_service_1.CategoryService, angular2_notifications_1.NotificationsService, router_1.Router, forms_1.FormBuilder])
    ], NewCategoryComponent);
    return NewCategoryComponent;
}());
exports.NewCategoryComponent = NewCategoryComponent;
//# sourceMappingURL=newcategory.component.js.map