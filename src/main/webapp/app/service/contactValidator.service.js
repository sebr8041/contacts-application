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
var ContactValidatorService = (function () {
    function ContactValidatorService() {
    }
    ContactValidatorService.prototype.validate = function (contact) {
        var errors = [];
        if (contact.name === undefined || contact.name === null || contact.name.length === 0) {
            errors.push("Bitte geben Sie einen Namen für den Kontakt an.");
        }
        if (contact.company === undefined || contact.company === null || contact.company.length === 0) {
            errors.push("Bitte geben Sie eine Firma für den Kontakt an.");
        }
        if (contact.dateOfBirth === undefined || contact.dateOfBirth === null || contact.dateOfBirth.length === 0) {
            errors.push("Bitte geben Sie ein Geburtsdatum für den Kontakt an.");
        }
        return errors;
    };
    ContactValidatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactValidatorService);
    return ContactValidatorService;
}());
exports.ContactValidatorService = ContactValidatorService;
//# sourceMappingURL=contactValidator.service.js.map