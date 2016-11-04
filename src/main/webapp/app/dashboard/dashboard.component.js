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
/**
 * Component for GUI-Page "Dashboard"
 * handles birthday-list and company-list.
 */
var DashboardComponent = (function () {
    /**
     * constructor to autowire services.
     * set default values for gui-lists (companys and birthdays.)
     */
    function DashboardComponent(_notificationService, _contactsService) {
        this._notificationService = _notificationService;
        this._contactsService = _contactsService;
        /**
         * range for birthdays
         */
        this.BIRTHDAY_RANGE_IN_DAYS = 10;
        // fill services
        this.notificationService = _notificationService;
        this.contactsService = _contactsService;
        // set empty gui-lists
        this.companys = [];
        this.birthdayList = [];
        // set the range for birthday info. Reset Time. Only date is required.
        this.startDate = new Date();
        this.startDate.setHours(0, 0, 0, 0);
        this.endDate = new Date();
        this.endDate.setHours(0, 0, 0, 0);
        // now + milliseconds * seconds * minutes * hours * days
        this.endDate.setTime(Date.now() + 1000 * 60 * 60 * 24 * this.BIRTHDAY_RANGE_IN_DAYS);
        // load contacts from backend and compute birthday-list and company-list.
        this.loadContacts();
    }
    /**
     * load contacts from service and fill gui-array for companys and birthdays.
     */
    DashboardComponent.prototype.loadContacts = function () {
        var _this = this;
        // load all contacts from service
        this.contactsService.getAll().subscribe(function (contacts) {
            // set contacts from backend
            _this.contacts = contacts;
            // reset gui-lists
            _this.companys = [];
            _this.birthdayList = [];
            // iterate over all contacts and compute company-list and birthday-list
            _this.contacts.forEach(function (contact) {
                // company exists in list? (not a empty string?)
                if (!_this.companys.includes(contact.company) && contact.company.length > 0) {
                    // No - push company
                    _this.companys.push(contact.company);
                }
                // get date from contact and set year to this year.
                var contactDate = new Date(Date.parse(contact.dateOfBirth));
                contactDate.setFullYear((new Date()).getFullYear());
                // contact has birthday in next X days?
                if (_this.isDateInRangeForBirthdayInfo(contactDate)) {
                    _this.birthdayList.push(contact);
                }
            });
            // sort companys by name.
            _this.companys.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                else if (a > b) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            // sort birthdayList
            _this.birthdayList.sort(function (a, b) {
                // get dates from contacts and reset year.
                var dateA = new Date(Date.parse(a.dateOfBirth));
                dateA.setFullYear((new Date()).getFullYear());
                var dateB = new Date(Date.parse(b.dateOfBirth));
                dateB.setFullYear((new Date()).getFullYear());
                if ((_this.startDate.getTime() - dateA.getTime()) < (_this.startDate.getTime() - dateB.getTime())) {
                    // dateA is next to startDate
                    return 1;
                }
                else if ((_this.startDate.getTime() - dateA.getTime()) > (_this.startDate.getTime() - dateB.getTime())) {
                    // dateB is next to startDate
                    return -1;
                }
                else {
                    // same
                    return 0;
                }
            });
        });
    };
    /**
     * Checks a Date is between startDate and endDate from this class.
     */
    DashboardComponent.prototype.isDateInRangeForBirthdayInfo = function (current) {
        // Birthday was this year?
        if (current.getTime() < this.startDate.getTime()) {
            // birthday was this year. lets watch next year (maybe in first month of next year)
            current.setFullYear((new Date()).getFullYear() + 1);
        }
        // Birthday is before next X days ?
        if (current.getTime() <= this.endDate.getTime()) {
            // birthday is in timewindow (startDate <= bDay <= endDate)
            return true;
        }
        return false;
    };
    /**
     * TODO: del
     */
    DashboardComponent.prototype.tuWat = function () {
        this.notificationService.success("Hallo", "Welt");
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/dashboard/dashboard.component.html',
            providers: [contact_service_1.ContactsService],
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, contact_service_1.ContactsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map