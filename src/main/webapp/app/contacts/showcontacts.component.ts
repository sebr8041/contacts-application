import { Component } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { Contact } from '../models/contact';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/showcontacts.component.html',
    providers: [ContactsService]
})
export class ShowContactsComponent implements Resolve<any> {

    contact: Contact;

    constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
        //  this.contactsService.find("1").then((contact) => { this.contact = contact; console.log(contact) });
        this.contactsService.get().then((contatcs) => console.log("hier", contatcs));
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log(this);

        return this.contactsService.find("1");
    }


}  