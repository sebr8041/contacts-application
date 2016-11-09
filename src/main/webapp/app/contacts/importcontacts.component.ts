import { Component } from "@angular/core";
import { ImportJsonService } from '../service/importJson.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/importcontacts.component.html',
    providers: [ImportJsonService],
})
export class ImportContactsComponent {

    /**
     * Temp varibale for saving textarea input.
     */
    private jsonData: string;

    /**
     * autowire services
     */
    constructor(private notificationService: NotificationsService,
        private importJsonService: ImportJsonService) {
    }

    /**
     * Click Event for import Data.
     */
    public startImport(data: any) {
        try {
            // string to json
            let jsonData = JSON.parse(data);

            // trigger import service (send data to backend)
            this.importJsonService.import(jsonData).subscribe((result) => {
                // success
                this.notificationService.success("Import durchgeführt.", "Alle Kontakte und Kategorien wurden importiert.");
                this.jsonData = "";
            }, (result) => {
                // fail
                if (result.status === 400) {
                    // client set wrong format for json import data.
                    this.notificationService.error("Falsches Format", "Das von Ihnen angegebene JSON-Format entspricht nicht dem geforderten");
                } else {
                    // server error - should not happen
                    this.notificationService.error("Server Fehler", "Es ist ein interner Fehler aufgetreten.");
                }
            });
        } catch (e) {
            // JSON parse throws exception
            this.notificationService.error("Falsches Format", "Die von Ihnen angegebenen Import-Daten entsprechen keinem gültigen JSON.");
        }
    }

} 