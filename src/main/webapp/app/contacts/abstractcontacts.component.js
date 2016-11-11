"use strict";
var forms_1 = require('@angular/forms');
/**
 * abstract class for add and edit contacts.
 */
var AbstractContactsComponent = (function () {
    /**
     * create or update a contact.
     */
    function AbstractContactsComponent(notificationService, categoryService, contactService, router, formBuilder) {
        var _this = this;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
        this.contactService = contactService;
        this.router = router;
        this.formBuilder = formBuilder;
        /**
         * form control elements for input fields in formular
         */
        this.name = new forms_1.FormControl();
        this.company = new forms_1.FormControl();
        this.dateOfBirth = new forms_1.FormControl();
        this.category = new forms_1.FormControl();
        /**
         * all categories to choose between them.
         */
        this.categorys = [];
        /**
         * model to save all addresses from form.
         */
        this.addresses = [];
        /**
         * model to save all emails from form.
         */
        this.emails = [];
        /**
         * model to save all phones from form.
         */
        this.phones = [];
        /**
         * form submited min one time.
         */
        this.submitedForm = false;
        // get all categorys from backend. => select box
        this.categoryService.getAll().subscribe(function (categorys) { return _this.categorys = categorys; });
        // build form with variables
        this.form = this.formBuilder.group({
            'name': this.name,
            'company': this.company,
            'dateOfBirth': this.dateOfBirth,
            'category': this.category
        });
        // set validators for each field.
        this.name.setValidators(forms_1.Validators.required);
        this.company.setValidators(forms_1.Validators.required);
        this.dateOfBirth.setValidators(forms_1.Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$"));
        this.category.setValidators(forms_1.Validators.pattern("^(?!null$).*$"));
    }
    /**
     * set formular data
     */
    AbstractContactsComponent.prototype.setFormData = function (name, company, dateOfBirth, category, addresses, emails, phones) {
        // set normal values
        this.name.setValue(name);
        this.company.setValue(company);
        this.dateOfBirth.setValue(dateOfBirth);
        // check category. maybe set "null" because select box value="null" in default.
        if (category !== undefined && category !== null) {
            this.category.setValue(category.id);
        }
        else {
            this.category.setValue("null");
        }
        // set the arrays for addresses, emails and phones.
        this.addresses = addresses;
        this.emails = emails;
        this.phones = phones;
    };
    /**
     * custom track by for loops. dont loses focus
     */
    AbstractContactsComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    /**
     * handler to add a new element on phones, emails or addresses
     */
    AbstractContactsComponent.prototype.addNewElement = function (array) {
        array.push("");
    };
    /**
     * handler to remove a new element on phones, emails or addresses
     */
    AbstractContactsComponent.prototype.removeElement = function (index, array) {
        array.splice(index, 1);
    };
    return AbstractContactsComponent;
}());
exports.AbstractContactsComponent = AbstractContactsComponent;
//# sourceMappingURL=abstractcontacts.component.js.map