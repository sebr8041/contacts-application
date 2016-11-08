import {IContact} from "./contact";

export class Category {

}

export interface ICategory {
    id: string
    name: string
    color: string
    contacts: IContact[]
}