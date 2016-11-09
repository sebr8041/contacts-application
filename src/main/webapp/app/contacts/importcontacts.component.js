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
var importJson_service_1 = require('../service/importJson.service');
var angular2_notifications_1 = require('angular2-notifications');
var ImportContactsComponent = (function () {
    /**
     * autowire services
     */
    function ImportContactsComponent(notificationService, importJsonService) {
        this.notificationService = notificationService;
        this.importJsonService = importJsonService;
    }
    /**
     * Click Event for import Data.
     */
    ImportContactsComponent.prototype.startImport = function (data) {
        var _this = this;
        try {
            // string to json
            var jsonData = JSON.parse(data);
            // trigger import service (send data to backend)
            this.importJsonService.import(jsonData).subscribe(function (result) {
                // success
                _this.notificationService.success("Import durchgeführt.", "Alle Kontakte und Kategorien wurden importiert.");
                _this.jsonData = "";
            }, function (result) {
                // fail
                if (result.status === 400) {
                    // client set wrong format for json import data.
                    _this.notificationService.error("Falsches Format", "Das von Ihnen angegebene JSON-Format entspricht nicht dem geforderten");
                }
                else {
                    // server error - should not happen
                    _this.notificationService.error("Server Fehler", "Es ist ein interner Fehler aufgetreten.");
                }
            });
        }
        catch (e) {
            // JSON parse throws exception
            this.notificationService.error("Falsches Format", "Die von Ihnen angegebenen Import-Daten entsprechen keinem gültigen JSON.");
        }
    };
    ImportContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts-application',
            templateUrl: 'app/contacts/importcontacts.component.html',
            providers: [importJson_service_1.ImportJsonService],
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, importJson_service_1.ImportJsonService])
    ], ImportContactsComponent);
    return ImportContactsComponent;
}());
exports.ImportContactsComponent = ImportContactsComponent;
//# sourceMappingURL=importcontacts.component.js.map