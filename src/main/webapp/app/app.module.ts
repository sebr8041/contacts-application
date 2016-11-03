import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotFoundComponent } from './errorsites/notfound.component'

import { NewCategoryComponent } from './category/newcategory.component';
import { EditCategoryComponent } from './category/editcategory.component';
import { ListCategoryComponent } from './category/listcategory.component';
import { ShowCategoryComponent } from './category/showcategory.component';

import { NewContactsComponent } from './contacts/newcontacts.component';
import { EditContactsComponent } from './contacts/editcontacts.component';
import { ListContactsComponent } from './contacts/listcontacts.component';
import { ImportContactsComponent } from './contacts/importcontacts.component';
import { ShowContactsComponent } from './contacts/showcontacts.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [BrowserModule,
    HttpModule,
    SimpleNotificationsModule,
    RouterModule.forRoot([
      // Dashboard
      { path: 'dashboard', component: DashboardComponent },

      // Categorys
      { path: 'category/edit/:id', component: EditCategoryComponent },
      { path: 'category/new', component: NewCategoryComponent },
      { path: 'category/all', component: ListCategoryComponent },
      { path: 'category/show/:id', component: ShowCategoryComponent },

      // Contacts
      { path: 'contacts/edit/:id', component: EditContactsComponent },
      { path: 'contacts/new', component: NewContactsComponent },
      { path: 'contacts/all', component: ListContactsComponent },
      { path: 'contacts/import', component: ImportContactsComponent },
      { path: 'contacts/show/:id', component: ShowContactsComponent },

      // Dashboard
      { path: '', component: DashboardComponent },

      // Fehlerfall
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    ShowCategoryComponent,
    NewCategoryComponent,
    EditContactsComponent,
    NewContactsComponent,
    ListContactsComponent,
    ImportContactsComponent,
    ShowContactsComponent,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
