import { Component } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { Contact } from '../models/contact';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/listcontacts.component.html',
    providers: [ContactsService]
})
export class ListContactsComponent {

    /**
     * saves all contacts from backend.
     */
    private contacts: Contact[] = [];

    /**
     * Autowire contactService
     */
    constructor(private contactService: ContactsService) {
        this.contactService.getAll().subscribe((contacts) =>{
            this.contacts = contacts;
        });
    }


} 