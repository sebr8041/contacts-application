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