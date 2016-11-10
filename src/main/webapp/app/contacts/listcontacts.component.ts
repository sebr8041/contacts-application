import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact } from '../models/contact';
import { ICategory } from '../models/category';
import { CategoryFilter } from '../models/categoryFilter';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/listcontacts.component.html',
    providers: [ContactsService, CategoryService],
})
export class ListContactsComponent {

    /**
     * saves all contacts from backend.
     */
    private contacts: IContact[] = [];


    /**
     * saves all categorys from backend.
     */
    private categorys: ICategory[] = [];

    /**
     * model for filter data
     */
    private categoryFilter: CategoryFilter;

    /**
     * checkbox-models for categorys.
     */
    private checkedCategory: boolean[];

    /**
     * all contacts loaded completly?
     */
    private loadingFinish:boolean;

    /**
     * Autowire contactService
     */
    constructor(private contactService: ContactsService,
        overlay: Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal,
        private notificationService: NotificationsService,
        private categoryService: CategoryService) {
        // container or modals.
        overlay.defaultViewContainer = vcRef;

        // init values
        this.loadingFinish = false;
        this.checkedCategory = [];
        this.categoryFilter = new CategoryFilter();

        // load all contacts
        this.contactService.getAll().subscribe((contacts) => {
            this.contacts = contacts;
            this.loadingFinish = true;
        });

        // load all categorys 
        this.categoryService.getAll().subscribe((categorys) => {
            this.categorys = categorys;
            this.resetCheckboxes();
        });

    }

    /**
     * reset all checkboxes to false.
     */
    private resetCheckboxes() {
        this.checkedCategory = [];
        for (let i = 0; i < this.categorys.length; i++) {
            this.checkedCategory.push(false);
        }
    }

    /**
     * Handler delete contact.
     */
    public deleteContact(id: string) {
        // find contact 
        this.contactService.find(id).subscribe((contact) => {
            // user should confirm deleting a contact.
            this.modal.confirm()
                .size('sm')
                .isBlocking(true)
                .showClose(true)
                .keyboard(27)
                .title('Kontakt löschen')
                .body('Kontakt "' + contact.name + '" wirklich löschen?')
                .okBtn('Löschen')
                .okBtnClass('btn btn-danger')
                .cancelBtn('Abbrechen')
                .cancelBtnClass('btn btn-default')
                .open()
                .then((result) => result.result)
                .then((result) => {
                    this.contactService.remove(contact.id).subscribe((result) => {
                        this.deleteContactFromLocaleArray(contact.id);
                        this.notificationService.success("Erfolg!", 'Kontakt  "' + contact.name + '" gelöscht!');
                    });
                }, (result) => {
                    // fail => nothing happens. user canceled action
                })
        });
    }

    /**
     * deleteing a contact from the locale array (no need to reload complete contacts)
     */
    private deleteContactFromLocaleArray(id: string) {
        this.contacts.forEach((contact, index) => {
            if (contact.id === id) {
                this.contacts.splice(index, 1);
            }
        });
    }

    /**
     * handler for reset category filter.
     */
    public resetCategoryFilter() {
        this.resetCheckboxes();
        this.categoryFilter = new CategoryFilter();
    }
} 