import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/newcontacts.component.html',
})
export class NewContactsComponent {

    /**
     * model for the contact
     */
    private contact: IContact;

    /**
     * all categories to choose between them.
     */
    private categorys: ICategory[] = [];

    /**
     * model to save all addresses from form.
     */
    private addresses: string[] = [];

      /**
     * model to save all emails from form.
     */
    private emails: string[] = [];

      /**
     * model to save all phones from form.
     */
    private phones: string[] = [];

    /**
     * form group 
     */
    private form: FormGroup;

    /**
     * form submited min one time.
     */
    private submitedForm : boolean = false;

    /**
     * create new contact.
     */
    constructor(private notificationService: NotificationsService,
        private categoryService: CategoryService,
        private contactService: ContactsService,
        private router: Router,
        fb: FormBuilder) {

        this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);

        this.form = fb.group({
            'name': [null, Validators.required],
            'company': [null, Validators.required],
            'dateOfBirth': [null, Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$")],
            'category': [null, Validators.pattern("^(?!null$).*$")]
        });
    }

    /**
     * custom track by for loops. dont loses focus 
     */
    public customTrackBy(index: number, obj: any): any {
        return index;
    }

    /**
     * handler to add a new element on phones, emails or addresses
     */
    public addNewElement(array: string[]) {
        array.push("");
    }

    /**
     * handler to remove a new element on phones, emails or addresses
     */
    public removeElement(index: number, array: string[]) {
        array.splice(index, 1);
    }

    /**
     * handler submit form.
     */
    public submitForm(form: FormGroup, emails: string[], addresses: string[], phones: string[]) {
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