import { Component } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { ContactsService } from '../service/contact.service';
import { CategoryService } from '../service/category.service';
import { IContact, Contact } from '../models/contact';
import { ICategory, Category } from '../models/category';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * abstract class for add and edit contacts.
 */
export abstract class AbstractContactsComponent {

    /**
     * form control elements for input fields in formular
     */
    private name: FormControl = new FormControl();
    private company: FormControl = new FormControl();
    private dateOfBirth: FormControl = new FormControl();
    private category: FormControl = new FormControl();

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
     * create or update a contact.
     */
    constructor(protected notificationService: NotificationsService,
        protected categoryService: CategoryService,
        protected contactService: ContactsService,
        protected router: Router,
        protected formBuilder: FormBuilder) {

        // get all categorys from backend. => select box
        this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);

        // build form with variables
        this.form = this.formBuilder.group({
            'name': this.name,
            'company': this.company,
            'dateOfBirth': this.dateOfBirth,
            'category': this.category
        });
        // set validators for each field.
        this.name.setValidators(Validators.required);
        this.company.setValidators(Validators.required);
        this.dateOfBirth.setValidators(Validators.pattern("^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]$"));
        this.category.setValidators(Validators.pattern("^(?!null$).*$"));

    }

    /**
     * set formular data
     */
    protected setFormData(name: string, company: string, dateOfBirth: string, category: ICategory, addresses: string[], emails: string[], phones: string[]) {
        // set normal values
        this.name.setValue(name);
        this.company.setValue(company);
        this.dateOfBirth.setValue(dateOfBirth);

        // check category. maybe set "null" because select box value="null" in default.
        if (category !== undefined && category !== null) {
            this.category.setValue(category.id);
        } else {
            this.category.setValue("null");
        }
        // set the arrays for addresses, emails and phones.
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