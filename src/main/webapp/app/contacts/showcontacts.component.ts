import { Component } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../models/contact';
import { NotificationsService } from 'angular2-notifications';
import {Router} from '@angular/router';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/showcontacts.component.html',
    providers: [ContactsService]
})
export class ShowContactsComponent {
    private contact: IContact = null;

    /**
     * load param from url and ask contactsService to load contact by id.
     */
    constructor(private contactsService: ContactsService, 
    private route: ActivatedRoute,
    private notificationService: NotificationsService,
    private router: Router) {
        this.route.params.subscribe(params =>
            this.contactsService.find(params['id']).subscribe(
                contact => {
                    this.contact = contact;
                },
                error => {
                    this.notificationService.error("Kontakt nicht gefunden.", "Der von Ihnen geöffnete Kontakt wurde nicht gefunden.");
                    this.router.navigateByUrl('contacts/all');
                }   
            )
        );
    }

}  