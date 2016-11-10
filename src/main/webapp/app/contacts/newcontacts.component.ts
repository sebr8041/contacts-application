import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewOrEditContactsComponent } from './neworeditcontacts.component'

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/neworeditcontacts.component.html',
})
export class NewContactsComponent extends NewOrEditContactsComponent {

    private readonly PAGE_TITLE:string = "Neuer Kontakt";
    private readonly PAGE_DESC:string = "Mit dem folgenden Formular können Sie einen neuen Kontakt hinzufügen:";

    /**
     * init clean formular for new contact.
     */
    constructor(notificationService: NotificationsService,
        categoryService: CategoryService,
        contactService: ContactsService,
        router: Router,
        fb: FormBuilder) {
        // call parent.
        super(notificationService, categoryService, contactService, router, fb);

        // init clean formular
        this.initForm(null, null, null, null, [], [], []);
    }

    /**
     * handler submit form for add NEW contact.
     */
    protected submitForm(form: FormGroup, emails: string[], addresses: string[], phones: string[]) {
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            let category = new Category(form.value.category);
            // cretae instance from id.
            let contact = new Contact(null, form.value.name, form.value.company, form.value.dateOfBirth, category, emails, phones, addresses);
            // post contact to server.
            this.contactService.add(contact).subscribe(respone => {
                this.notificationService.success("Erfolg", "Kontakt erfolgreich erstellt.");
                this.router.navigateByUrl('contacts/all');
            })
        } else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    }
} 