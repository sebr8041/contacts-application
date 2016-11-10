import { ICategory } from './category';

export interface IContact {
    id: string
    name: string
    company: string
    dateOfBirth: string
    category: ICategory
    emails: string[]
    phones: string[]
    addresses: string[]
}

export class Contact implements IContact{
    id: string;
    name: string;
    company: string;
    dateOfBirth: string;
    category: ICategory;
    emails: string[];
    phones: string[];
    addresses: string[];

    constructor(){
        this.id = null;
        this.name = null;
        this.company = null;
        this.dateOfBirth = null;
        this.category = null;
        this.emails = [];
        this.phones = [];
        this.addresses = [];
    }
}