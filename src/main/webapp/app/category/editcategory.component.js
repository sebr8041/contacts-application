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
var EditCategoryComponent = (function () {
    function EditCategoryComponent(cssColorService, categoryService, notificationService, router, formBuilder, route) {
        var _this = this;
        this.categoryService = categoryService;
        this.notificationService = notificationService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
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
        this.route.params.subscribe(function (params) {
            return _this.categoryService.find(params['id']).subscribe(function (category) {
                _this.name.setValue(category.name);
                _this.color.setValue(category.color);
                // set id of edit contact
                _this.categoryId = category.id;
            }, function (error) {
                _this.notificationService.error("Kategorie nicht gefunden.", "Der von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                _this.router.navigateByUrl('contacts/all');
            });
        });
    }
    /**
     * handler submit form for edit contact.
     */
    EditCategoryComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            var category = new category_1.Category(this.categoryId);
            category.name = form.value.name;
            category.color = form.value.color;
            this.categoryService.update(category).subscribe(function (respone) {
                _this.notificationService.success("Erfolg", "Kategorie erfolgreich gespeichert.");
                _this.router.navigateByUrl('category/all');
            });
        }
        else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    };
    EditCategoryComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/category/editcategory.component.html',
            providers: [csscolor_service_1.CssColorService]
        }), 
        __metadata('design:paramtypes', [csscolor_service_1.CssColorService, category_service_1.CategoryService, angular2_notifications_1.NotificationsService, router_1.Router, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());
exports.EditCategoryComponent = EditCategoryComponent;
//# sourceMappingURL=editcategory.component.js.map