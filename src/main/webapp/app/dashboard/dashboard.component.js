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
var angular2_notifications_1 = require('angular2-notifications');
var contact_service_1 = require('../service/contact.service');
var DashboardComponent = (function () {
    function DashboardComponent(_notificationService, _contactsService) {
        this._notificationService = _notificationService;
        this._contactsService = _contactsService;
        this.notificationService = _notificationService;
        this.contactsService = _contactsService;
    }
    DashboardComponent.prototype.tuWat = function () {
        this.notificationService.success("Hallo", "Welt");
        this.contactsService.get().then(function (data) { return data.pop().id; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/dashboard/dashboard.component.html',
            providers: [contact_service_1.ContactsService]
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, contact_service_1.ContactsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map