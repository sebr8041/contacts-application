import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router } from '@angular/router';
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
     * ngModel for select category.
     */
    private selectedCategoryId = null;

    /**
     * create new contact.
     */
    constructor(private notificationService: NotificationsService,
        private categoryService: CategoryService,
        private contactService: ContactsService,
        private router: Router) {

        this.contact = new Contact();
        this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);
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
     * handler for add contact.
     */
    public addContact(contact: Contact, selectedCategoryId: string) {
        // cretae instance from id.
        contact.category = new Category(selectedCategoryId);
        // post contact to server.
        this.contactService.add(contact).subscribe(respone => {
            this.notificationService.success("Erfolg", "Kontakt erfolgreich erstellt.");
            this.router.navigateByUrl('contacts/all');
        })
    }

} 