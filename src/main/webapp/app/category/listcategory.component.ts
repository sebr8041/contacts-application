import{Component} from "@angular/core";
import { CategoryService } from '../service/category.service';
import { ICategory } from '../models/category';

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/category/listcategory.component.html'
})
export class ListCategoryComponent{


    /**
     * saves all categorys from backend.
     */
    private categorys: ICategory[] = [];

  
    /**
     * Autowire contactService
     */
    constructor(private categoryService: CategoryService) {
        // load all categorys 
        this.categoryService.getAll().subscribe((categorys) => {
            this.categorys = categorys;
        });

    }


} 