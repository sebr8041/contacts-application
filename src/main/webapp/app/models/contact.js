"use strict";
var Contact = (function () {
    function Contact(id, name, company, dateOfBirth, category, emails, phones, addresses) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.dateOfBirth = dateOfBirth;
        this.category = category;
        this.emails = emails;
        this.phones = phones;
        this.addresses = addresses;
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map