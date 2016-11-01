import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [ContactsService]
})
export class DashboardComponent {

    private notificationService;
    private contactsService: ContactsService;

    constructor(private _notificationService: NotificationsService,
        private _contactsService: ContactsService) {
        this.notificationService = _notificationService;
        this.contactsService = _contactsService;
    }

    public tuWat() {
        this.notificationService.success("Hallo", "Welt");
        this.contactsService.get().then(data => data.pop().id);
    }
} 