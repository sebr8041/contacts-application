import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { IContact } from '../models/contact';

/**
 * Component for GUI-Page "Dashboard"
 * handles birthday-list and company-list.
 */
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [ContactsService],
})
export class DashboardComponent {

    /**
     * range for birthdays
     */
    private readonly BIRTHDAY_RANGE_IN_DAYS: number = 10;
     
    /**
     * gui-notification service
     */
    private notificationService;

    /**
     * service to request contacts from backend.  
     */
    private contactsService: ContactsService;

    /**
     * list of all contacts
     */
    private contacts: IContact[];

    /**
     * gui-list for all companys.
     */
    private companys: string[];

    /**
     * startDate (today)
     */
    private startDate: Date;

    /**
     * endDate (today + BIRTHDAY_RANGE_IN_DAYS)
     */
    private endDate: Date;

    /**
     * gui-list for all birthdays which are between startDate and endDate.
     */
    private birthdayList: IContact[];

    /**
     * constructor to autowire services.
     * set default values for gui-lists (companys and birthdays.)
     */
    constructor(private _notificationService: NotificationsService,
        private _contactsService: ContactsService) {
        // fill services
        this.notificationService = _notificationService;
        this.contactsService = _contactsService;

        // set empty gui-lists
        this.companys = [];
        this.birthdayList = [];

        // set the range for birthday info. Reset Time. Only date is required.
        this.startDate = new Date();
        this.startDate.setHours(0, 0, 0, 0);
        this.endDate = new Date();
        this.endDate.setHours(0, 0, 0, 0);

        // now + milliseconds * seconds * minutes * hours * days
        this.endDate.setTime(Date.now() + 1000 * 60 * 60 * 24 * this.BIRTHDAY_RANGE_IN_DAYS);

        // load contacts from backend and compute birthday-list and company-list.
        this.loadContacts();
    }

    /**
     * load contacts from service and fill gui-array for companys and birthdays. 
     */
    private loadContacts() {
        // load all contacts from service
        this.contactsService.getAll().subscribe((contacts) => {
            // set contacts from backend
            this.contacts = contacts;

            // reset gui-lists
            this.companys = [];
            this.birthdayList = [];

            // iterate over all contacts and compute company-list and birthday-list
            this.contacts.forEach((contact) => {
                // company exists in list? (not a empty string?)
                if (!this.companys.includes(contact.company) && contact.company.length > 0) {
                    // No - push company
                    this.companys.push(contact.company);
                }

                // get date from contact and set year to this year.
                let contactDate: Date = new Date(Date.parse(contact.dateOfBirth));
                contactDate.setFullYear((new Date()).getFullYear());

                // contact has birthday in next X days?
                if (this.isDateInRangeForBirthdayInfo(contactDate)) {
                    this.birthdayList.push(contact);
                }

            });

            // sort companys by name.
            this.companys.sort((a: string, b: string) => {
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            });

            // sort birthdayList
            this.birthdayList.sort((a: IContact, b: IContact) => {
                // get dates from contacts and reset year.
                let dateA = new Date(Date.parse(a.dateOfBirth));
                dateA.setFullYear((new Date()).getFullYear());
                let dateB = new Date(Date.parse(b.dateOfBirth));
                dateB.setFullYear((new Date()).getFullYear());

                if ((this.startDate.getTime() - dateA.getTime()) < (this.startDate.getTime() - dateB.getTime())) {
                    // dateA is next to startDate
                    return 1;
                } else if ((this.startDate.getTime() - dateA.getTime()) > (this.startDate.getTime() - dateB.getTime())) {
                    // dateB is next to startDate
                    return -1;
                } else {
                    // same
                    return 0;
                }
            });
        });
    }

    /**
     * Checks a Date is between startDate and endDate from this class.
     */
    private isDateInRangeForBirthdayInfo(current: Date) {
        // Birthday was this year?
        if (current.getTime() < this.startDate.getTime()) {
            // birthday was this year. lets watch next year (maybe in first month of next year)
            current.setFullYear((new Date()).getFullYear() + 1);
        }

        // Birthday is before next X days ?
        if (current.getTime() <= this.endDate.getTime()) {
            // birthday is in timewindow (startDate <= bDay <= endDate)
            return true;
        }
        return false;
    }

    /**
     * TODO: del
     */
    public tuWat() {
        this.notificationService.success("Hallo", "Welt");
    }
}  