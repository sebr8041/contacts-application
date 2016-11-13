import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { CategoryService } from '../service/category.service';
import { ICategory } from '../models/category';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { NotificationsService } from 'angular2-notifications';
import { Overlay } from 'angular2-modal';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/category/listcategory.component.html'
})
export class ListCategoryComponent {


    /**
     * saves all categorys from backend.
     */
    private categorys: ICategory[] = [];


    /**
     * Autowire contactService
     */
    constructor(private categoryService: CategoryService,
        public modal: Modal,
        private notificationService: NotificationsService,
        overlay: Overlay,
        vcRef: ViewContainerRef, ) {
        // container or modals.
        overlay.defaultViewContainer = vcRef;
        // load all categorys 
        this.categoryService.getAll().subscribe((categorys) => {
            this.categorys = categorys;
        });
    }

    /**
     * Handler delete category.
     */
    public deleteCategory(id: string) {
        // find contact 
        this.categoryService.find(id).subscribe((category) => {
            console.log("dfsf");
            // user should confirm deleting a contact.
            this.modal.confirm()
                .size('sm')
                .isBlocking(true)
                .showClose(true)
                .keyboard(27)
                .title('Kontakt löschen')
                .body('Kontakt "' + category.name + '" wirklich löschen?')
                .okBtn('Löschen')
                .okBtnClass('btn btn-danger')
                .cancelBtn('Abbrechen')
                .cancelBtnClass('btn btn-default')
                .open()
                .then((result) => result.result)
                .then((result) => {
                    this.categoryService.remove(category.id).subscribe((result) => {
                        this.deleteContactFromLocaleArray(category.id);
                        this.notificationService.success("Erfolg!", 'Kategorie  "' + category.name + '" gelöscht!');
                    }, (error) => {
                        this.notificationService.error("Fehlgeschlagen!", 'Die Kategorie hat noch Kontakte. Somit kann diese nicht gelöscht werden.');
                    });
                }, (result) => {
                    // fail => nothing happens. user canceled action
                })
        });
    }

    /**
      * deleteing a category from the locale array (no need to reload complete contacts)
      */
    private deleteContactFromLocaleArray(id: string) {
        this.categorys.forEach((category, index) => {
            if (category.id === id) {
                this.categorys.splice(index, 1);
            }
        });
    }
} 