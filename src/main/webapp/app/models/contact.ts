import { Category } from './category';
import { Address } from './address';
export class Contact {
    id: string;
    name: string;
    company: string;
    category: Category;
    mails: string[];
    phonenumbers: string[];
    addresses: Address[];
}