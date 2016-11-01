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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var notfound_component_1 = require('./errorsites/notfound.component');
var newcategory_component_1 = require('./category/newcategory.component');
var editcategory_component_1 = require('./category/editcategory.component');
var listcategory_component_1 = require('./category/listcategory.component');
var showcategory_component_1 = require('./category/showcategory.component');
var newcontacts_component_1 = require('./contacts/newcontacts.component');
var editcontacts_component_1 = require('./contacts/editcontacts.component');
var listcontacts_component_1 = require('./contacts/listcontacts.component');
var importcontacts_component_1 = require('./contacts/importcontacts.component');
var showcontacts_component_1 = require('./contacts/showcontacts.component');
var angular2_notifications_1 = require('angular2-notifications');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                angular2_notifications_1.SimpleNotificationsModule,
                router_1.RouterModule.forRoot([
                    // Dashboard
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    // Categorys
                    { path: 'category/edit/:id', component: editcategory_component_1.EditCategoryComponent },
                    { path: 'category/new', component: newcategory_component_1.NewCategoryComponent },
                    { path: 'category/all', component: listcategory_component_1.ListCategoryComponent },
                    { path: 'category/show/:id', component: showcategory_component_1.ShowCategoryComponent },
                    // Contacts
                    { path: 'contacts/edit/:id', component: editcontacts_component_1.EditContactsComponent },
                    { path: 'contacts/new', component: newcontacts_component_1.NewContactsComponent },
                    { path: 'contacts/all', component: listcontacts_component_1.ListContactsComponent },
                    { path: 'contacts/import', component: importcontacts_component_1.ImportContactsComponent },
                    { path: 'contacts/show/:id', component: showcontacts_component_1.ShowContactsComponent },
                    // Dashboard
                    { path: '', component: dashboard_component_1.DashboardComponent },
                    // Fehlerfall
                    { path: '**', component: notfound_component_1.NotFoundComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                notfound_component_1.NotFoundComponent,
                listcategory_component_1.ListCategoryComponent,
                editcategory_component_1.EditCategoryComponent,
                showcategory_component_1.ShowCategoryComponent,
                newcategory_component_1.NewCategoryComponent,
                editcontacts_component_1.EditContactsComponent,
                newcontacts_component_1.NewContactsComponent,
                listcontacts_component_1.ListContactsComponent,
                importcontacts_component_1.ImportContactsComponent,
                showcontacts_component_1.ShowContactsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map