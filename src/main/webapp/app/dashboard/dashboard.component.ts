import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../models/contact';
import { Response } from '@angular/http';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [ContactsService]
})
export class DashboardComponent {

    private notificationService;
    private contactsService: ContactsService;
    private contacts: Contact[];
    private companys: string[];
    private birthdays: string[];
    constructor(private _notificationService: NotificationsService,
        private _contactsService: ContactsService) {
        this.notificationService = _notificationService;
        this.contactsService = _contactsService;
    }

    /**
     * load contacts from service and fill gui-array for companys and birthdays. 
     */
    private loadContacts() {

        this.companys = [];
        // load all contacts from service
        this.contactsService.get().subscribe((contacts) => {
            this.contacts = contacts;

            this.contacts.forEach((contact) => {
                // ### Company list
                // create array with all companys unique from the contacts.
                // company exists in list? 
                if (!this.companys.includes(contact.company)) {
                    // No - push company
                    this.companys.push(contact.company);
                }
                let contactDate : Date = new Date();
                // ### Birthday-list
                let today: Date = new Date();
                console.log("today:", today);

                let future10Days: Date = new Date();
                future10Days.setTime(Date.now() + 1000 * 60 * 60 * 24 * 10);

                console.log("future", future10Days);

            });



        });
    }

    public tuWat() {
        this.notificationService.success("Hallo", "Welt");
        this.loadContacts();
        console.log("cewre", this.contacts);
        //this.contact = this.contactsService.find("12");
        //this.contact.subscribe(value => console.log(value.json() as Contact[]));
        // this.contactsService.get().then(data => data.pop().id);
    }
}  