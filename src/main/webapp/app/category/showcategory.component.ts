import { Component } from "@angular/core";
import { CategoryService } from '../service/category.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../models/category';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

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
     * load param from url and ask categoryService to load category by id.
     */
    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute,
        private notificationService: NotificationsService,
        private router: Router) {
        this.route.params.subscribe(params =>
            this.categoryService.find(params['id']).subscribe(
                category => {
                    this.category = category;
                },
                error => {
                    this.notificationService.error("Kategorie nicht gefunden.", "Die von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                    this.router.navigateByUrl('category/all');
                }
            )
        );
    }

} 