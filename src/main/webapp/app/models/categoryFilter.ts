import { Category } from './category';
export class CategoryFilter {
    // contacts with matching categorys filterOut ?
    public filterOut: boolean;
    // selected categorys.
    private checkedCategory: Category[];

    /**
     * Filter has category selected?
     */
    public containsCategory(id: string): boolean {
        this.checkedCategory.forEach((category) => {
            if (category.id === id) {
                return true;
            }
        });
        return false;
    }

    public addCategory(category: Category) {
        // push, when not exists.
        if (!this.containsCategory(category.id)) {
            this.checkedCategory.push(category);
        }
    }

    public removeCategory(category: Category) {
        if (this.containsCategory(category.id)) {
        }
    }
}