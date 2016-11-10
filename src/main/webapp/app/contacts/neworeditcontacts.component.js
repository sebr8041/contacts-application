"use strict";
var forms_1 = require('@angular/forms');
/**
 * abstract class for add and edit contacts.
 */
var NewOrEditContactsComponent = (function () {
    /**
     * create new contact.
     */
    function NewOrEditContactsComponent(notificationService, categoryService, contactService, router, formBuilder) {
        var _this = this;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
        this.contactService = contactService;
        this.router = router;
        this.formBuilder = formBuilder;
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
        this.categoryService.getAll().subscribe(function (categorys) { return _this.categorys = categorys; });
    }
    /**
     * init formular
     */
    NewOrEditContactsComponent.prototype.initForm = function (name, company, dateOfBirth, category, addresses, emails, phones) {
        this.form = this.formBuilder.group({
            'name': [null, forms_1.Validators.required],
            'company': [null, forms_1.Validators.required],
            'dateOfBirth': [null, forms_1.Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$")],
            'category': [null, forms_1.Validators.pattern("^(?!null$).*$")]
        });
        this.addresses = addresses;
        this.emails = emails;
        this.phones = phones;
    };
    /**
     * custom track by for loops. dont loses focus
     */
    NewOrEditContactsComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    /**
     * handler to add a new element on phones, emails or addresses
     */
    NewOrEditContactsComponent.prototype.addNewElement = function (array) {
        array.push("");
    };
    /**
     * handler to remove a new element on phones, emails or addresses
     */
    NewOrEditContactsComponent.prototype.removeElement = function (index, array) {
        array.splice(index, 1);
    };
    return NewOrEditContactsComponent;
}());
exports.NewOrEditContactsComponent = NewOrEditContactsComponent;
//# sourceMappingURL=neworeditcontacts.component.js.map