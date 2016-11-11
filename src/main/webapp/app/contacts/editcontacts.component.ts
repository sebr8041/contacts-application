import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractContactsComponent } from './abstractcontacts.component'

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/abstractcontacts.component.html',
})
export class EditContactsComponent extends AbstractContactsComponent {

    private readonly PAGE_TITLE: string = "Kontakt bearbeiten";
    private readonly PAGE_DESC: string = "Mit dem folgenden Formular können Sie diesen Kontakt bearbeiten:";

    /**
     * id from the curretn contact
     */
    private contactId : string = null;

    /**
     * init clean formular for new contact.
     */
    constructor(notificationService: NotificationsService,
        categoryService: CategoryService,
        contactService: ContactsService,
        private route: ActivatedRoute,
        router: Router,
        fb: FormBuilder) {
        // call parent.
        super(notificationService, categoryService, contactService, router, fb);

        this.route.params.subscribe(params =>
            this.contactService.find(params['id']).subscribe(
                contact => {
                    // set contact data
                    this.setFormData(contact.name, contact.company, contact.dateOfBirth, contact.category, contact.addresses, contact.emails, contact.phones);

                    // set id of edit contact
                    this.contactId = contact.id;
                },
                error => {
                    this.notificationService.error("Kontakt nicht gefunden.", "Der von Ihnen geöffnete Kontakt wurde nicht gefunden.");
                    this.router.navigateByUrl('contacts/all');
                }
            )
        );

    }

    /**
     * handler submit form for UPDATE contact.
     */
    protected submitForm(form: FormGroup, emails: string[], addresses: string[], phones: string[]) {
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            let category = new Category(form.value.category);
            // cretae instance
            let contact = new Contact(this.contactId, form.value.name, form.value.company, form.value.dateOfBirth, category, emails, phones, addresses);
            // update contact to server.
            this.contactService.update(contact).subscribe(respone => {
                this.notificationService.success("Erfolg", "Kontakt erfolgreich bearbeitet.");
                this.router.navigateByUrl('contacts/all');
            })
        } else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    }
} 