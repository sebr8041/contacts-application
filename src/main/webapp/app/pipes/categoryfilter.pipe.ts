import { Pipe, PipeTransform } from '@angular/core';
import { CategoryFilter } from '../models/categoryFilter';
import { IContact } from '../models/contact';
@Pipe({
    name: 'categoryfilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {

    /**
     * transform method for filter. (need for inteface PipeTransform)
     */
    transform(values: Array<IContact>, categoryFilter: CategoryFilter): any {

        // checks length of filter variable
        if (categoryFilter === null || categoryFilter === undefined || categoryFilter.filterOut === undefined)
            return values;

        // filter out ? 
        if (categoryFilter.filterOut) {
            return values.filter((value) => {
                return categoryFilter.containsCategory(value.category.id);
            });
        } else {
            return values.filter((value) => {
                return !categoryFilter.containsCategory(value.category.id);
            });
        }
    }


}