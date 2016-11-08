import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact } from '../models/contact';
import { ICategory } from '../models/category';
import { CategoryFilter } from '../models/categoryfilter';
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

    private categoryFilter: CategoryFilter;

    private checkedCategory: boolean[];
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

        this.checkedCategory = [];
        this.categoryFilter = new CategoryFilter();

        // load all contacts
        this.contactService.getAll().subscribe((contacts) => {
            this.contacts = contacts;
        });

        // load all categorys 
        this.categoryService.getAll().subscribe((categorys) => {
            this.categorys = categorys;
            this.resetCheckboxes();
        });

    }

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
                    // success
                    this.notificationService.success("Erfolg!", 'Kontakt  "' + contact.name + '" gelöscht!');
                }, (result) => {
                    // fail
                })
        });
    }
    public resetCategoryFilter() {
        this.resetCheckboxes();
        this.categoryFilter = new CategoryFilter();
    }
} 