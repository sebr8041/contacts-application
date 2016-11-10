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

    constructor(id: string, name: string, company:string, dateOfBirth: string, category:ICategory, emails: string[], phones: string[], addresses: string[]){
        this.id = id;
        this.name = name;
        this.company = company;
        this.dateOfBirth = dateOfBirth;
        this.category = category;
        this.emails = emails;
        this.phones = phones;
        this.addresses = addresses;
    }
}