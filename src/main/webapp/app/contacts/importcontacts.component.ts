import { Component } from "@angular/core";
import {ImportJsonService} from '../service/importJson.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/importcontacts.component.html',
    providers: [ImportJsonService],
})
export class ImportContactsComponent {

    private jsonData: string;

    constructor(private notificationService: NotificationsService,
    private importJsonService: ImportJsonService){
    }

    public startImport(data:any){
        this.importJsonService.import(data).subscribe((result) =>{
            this.notificationService.success("Import durchgeführt.", "Es wurden x Kontakte importiert.");
        });
    }

} 