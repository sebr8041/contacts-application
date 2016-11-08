import { ICategory } from './category';
export class CategoryFilter {
    // contacts with matching categorys filterOut ?
    public filterOut: boolean;
    // selected categorys.
    private checkedCategory: ICategory[];

    /**
     * set default values for object fields
     */
    constructor() {
        this.checkedCategory = [];
        this.filterOut = undefined;
    }

    /**
     * checks filter model has category
     */
    public containsCategory(categoryId: string) {
        for (let i = 0; i < this.checkedCategory.length; i++) {
            if (this.checkedCategory[i].id == categoryId) {
                return true;
            }
        }
        return false;
    }

    /**
     * add oder delete a category from this filter model.
     */
    public changeCategory(category: ICategory) {
        if (this.checkedCategory.includes(category)) {
            let index = this.checkedCategory.indexOf(category);
            this.checkedCategory.splice(index, 1);
        } else {
            this.checkedCategory.push(category);
        }
    }


}