import { Component } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/showcontacts.component.html',
    providers: [ContactsService]
})
export class ShowContactsComponent  {

    constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
    }



}  