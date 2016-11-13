import { Component } from "@angular/core";
import { CssColorService } from "../service/csscolor.service";
import { CategoryService } from "../service/category.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from "../models/category";
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
@Component({
    selector: 'contacts-application',
    templateUrl: 'app/category/newcategory.component.html',
    providers: [CssColorService]
})
export class NewCategoryComponent {

    private availableColors: string[] = [];

    /**
     * form control elements for input fields in formular
     */
    private name: FormControl = new FormControl();
    private color: FormControl = new FormControl();

    /**
     * form group 
     */
    protected form: FormGroup;

    /**
     * form submited min one time.
     */
    protected submitedForm: boolean = false;

    constructor(cssColorService: CssColorService,
        protected categoryService: CategoryService,
        protected notificationService: NotificationsService,
        protected router: Router,
        protected formBuilder: FormBuilder) {
        this.availableColors = cssColorService.getAll();

        // build form with variables
        this.form = this.formBuilder.group({
            'name': this.name,
            'color': this.color
        });

        // set validators for each field.
        this.name.setValidators(Validators.required);
        this.color.setValidators(Validators.pattern("^(?!null$).*$"));
    }


    /**
 * handler submit form for add NEW contact.
 */
    protected submitForm(form: FormGroup) {
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            let category = new Category(null);
            category.name = form.value.name;
            category.color = form.value.color;

            this.categoryService.add(category).subscribe(respone => {
                this.notificationService.success("Erfolg", "Kategorie erfolgreich erstellt.");
                this.router.navigateByUrl('category/all');
            })
        } else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    }
} 