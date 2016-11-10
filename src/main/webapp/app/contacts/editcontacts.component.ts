import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewOrEditContactsComponent } from './neworeditcontacts.component'
import { Control } from '@angular/common';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/neworeditcontacts.component.html',
})
export class EditContactsComponent extends NewOrEditContactsComponent {

    private readonly PAGE_TITLE: string = "Kontakt bearbeiten";
    private readonly PAGE_DESC: string = "Mit dem folgenden Formular können Sie diesen Kontakt bearbeiten:";


    private email: Control = new Control("");
    name: Control = new Control("");
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

        this.form = this.formBuilder.group({
            'name': [null, Validators.required],
            'company': [null, Validators.required],
            'dateOfBirth': [null, Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$")],
            'category': [null, Validators.pattern("^(?!null$).*$")]
        });

        this.route.params.subscribe(params =>
            this.contactService.find(params['id']).subscribe(
                contact => {
                },
                error => {
                    this.notificationService.error("Kontakt nicht gefunden.", "Der von Ihnen geöffnete Kontakt wurde nicht gefunden.");
                    this.router.navigateByUrl('contacts/all');
                }
            )
        );

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