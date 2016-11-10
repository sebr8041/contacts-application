export interface ICategory {
    id: string
    name: string
    color: string
}

export class Category implements ICategory {
    id: string = null;
    name: string = null;
    color: string = null;

    constructor(id:string){
        this.id = id;
    }
}