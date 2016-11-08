import { Category } from './category';
import { Address } from './address';
export class Contact {
    id: string;
    name: string;
    company: string;
    dateOfBirth: string;
    category: Category;
    mails: string[];
    phonenumbers: string[];
    addresses: Address[];
}

export interface IContact {
    id: string
    name: string
    company: string
    dateOfBirth: string
    category: Category
    mails: string[]
    phoneNumbers: string[]
    addresses: Address[]
}