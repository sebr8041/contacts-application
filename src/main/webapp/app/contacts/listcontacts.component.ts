import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { Contact } from '../models/contact';
import { Category } from '../models/category';
import { CategoryFilter } from '../models/categoryfilter';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/contacts/listcontacts.component.html',
    providers: [ContactsService, CategoryService]
})
export class ListContactsComponent {

    /**
     * saves all contacts from backend.
     */
    private contacts: Contact[] = [];


    /**
     * saves all categorys from backend.
     */
    private categorys: Category[] = [];

    private categoryFilter: CategoryFilter;


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

        // load all contacts
        this.contactService.getAll().subscribe((contacts) => {
            this.contacts = contacts;
        });

        // load all categorys 
        this.categoryService.getAll().subscribe((categorys) => {
            this.categorys = categorys;
        });

        this.categoryFilter = new CategoryFilter();
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
        this.categoryFilter = new CategoryFilter();
    }

    public setCategoryFilterOut(filterOut:boolean){
        this.categoryFilter.filterOut = filterOut;
        console.log("state", this.categoryFilter.filterOut);
    }

} 