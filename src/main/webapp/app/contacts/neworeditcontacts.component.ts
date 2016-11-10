import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * abstract class for add and edit contacts.
 */
export abstract class NewOrEditContactsComponent {

    /**
     * all categories to choose between them.
     */
    protected categorys: ICategory[] = [];

    /**
     * model to save all addresses from form.
     */
    protected addresses: string[] = [];

    /**
     * model to save all emails from form.
     */
    protected emails: string[] = [];

    /**
     * model to save all phones from form.
     */
    protected phones: string[] = [];

    /**
     * form group 
     */
    protected form: FormGroup;

    /**
     * form submited min one time.
     */
    protected submitedForm: boolean = false;

    /**
     * create new contact.
     */
    constructor(protected notificationService: NotificationsService,
        protected categoryService: CategoryService,
        protected contactService: ContactsService,
        protected router: Router,
        protected formBuilder: FormBuilder) {

        this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);
    }

    /**
     * init formular
     */
    protected initForm(name: string, company: string, dateOfBirth: string, category: ICategory, addresses: string[], emails: string[], phones: string[]) {
        this.form = this.formBuilder.group({
            'name': [null, Validators.required],
            'company': [null, Validators.required],
            'dateOfBirth': [null, Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$")],
            'category': [null, Validators.pattern("^(?!null$).*$")]
        });

        this.addresses = addresses;
        this.emails = emails;
        this.phones = phones;
    }

    /**
     * custom track by for loops. dont loses focus 
     */
    public customTrackBy(index: number, obj: any): any {
        return index;
    }

    /**
     * handler to add a new element on phones, emails or addresses
     */
    public addNewElement(array: string[]) {
        array.push("");
    }

    /**
     * handler to remove a new element on phones, emails or addresses
     */
    public removeElement(index: number, array: string[]) {
        array.splice(index, 1);
    }

    /**
     * handler submit form.
     */
    protected abstract submitForm(form: FormGroup, emails: string[], addresses: string[], phones: string[]);
} 