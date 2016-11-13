import { Component } from "@angular/core";
import { CategoryService } from '../service/category.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../models/category';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { ContactsService } from '../service/contact.service';
import { IContact } from '../models/contact';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/category/showcategory.component.html'
})
export class ShowCategoryComponent {

    /**
     * storage for category from backend.
     */
    private category: ICategory = null;

    /**
     * string to save emails to send message.
     */
    private emailList: string = "mailto: ";

    /**
     * load param from url and ask categoryService to load category by id.
     */
    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute,
        private notificationService: NotificationsService,
        private router: Router,
        private contactService: ContactsService) {
        this.route.params.subscribe(params => {
            // load category.
            this.categoryService.find(params['id']).subscribe(
                category => {
                    this.category = category;
                },
                error => {
                    this.notificationService.error("Kategorie nicht gefunden.", "Die von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                    this.router.navigateByUrl('category/all');
                }
            );
            // load contacts from category.
            this.contactService.findByCategory(params['id']).subscribe(contacts => {
                let counter = 0;
                contacts.forEach(contact => {
                    if (contact.emails.length > 0) {
                        this.emailList += contact.emails[0] + ",";
                        counter++;
                    }
                });

                if(counter > 0){
                    this.emailList = this.emailList.substring(0, this.emailList.length - 1);
                }else{
                    this.emailList =  "";
                }
            });

        });
    }

} 