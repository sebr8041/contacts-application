import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'fulltextFilter',
    pure: false
})
export class FulltextFilterPipe implements PipeTransform {

    /**
     * Seperator for building all values as a string.
     */
    private readonly SEPERATOR:string = " ";

    /**
     * transform method for filter. (need for inteface PipeTransform)
     */
    transform(values: Array<Object>, searchText: string): any {
        // checks length of filter variable
        if (searchText.length === 0)
            return values;
        // filter input.
        return values.filter(value => {
            // get only all varibles from object. (not the keys). And check against searchText.
            return this.getValuesFromObject(value).includes(searchText);
        });
    }

    /**
     * Get all Values from Object as a string with a seperator.
     */
    private getValuesFromObject(object: Object): string {
        let result: string = "";
        for (var key in object) {
            if (object[key] instanceof Object) {
                result += this.SEPERATOR + this.getValuesFromObject(object[key]);
            } else {
                result += this.SEPERATOR + object[key]
            }
        }
        return result;
    }
}