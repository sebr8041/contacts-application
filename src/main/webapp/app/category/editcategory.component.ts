import { Component } from "@angular/core";
import { CssColorService } from "../service/csscolor.service";
import { CategoryService } from "../service/category.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from "../models/category";
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'contacts-application',
    templateUrl: 'app/category/editcategory.component.html',
    providers: [CssColorService]
})
export class EditCategoryComponent {
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

 
    private categoryId: string;

    /**
     * form submited min one time.
     */
    protected submitedForm: boolean = false;

    constructor(cssColorService: CssColorService,
        protected categoryService: CategoryService,
        protected notificationService: NotificationsService,
        protected router: Router,
        protected formBuilder: FormBuilder,
        private route: ActivatedRoute) {
        this.availableColors = cssColorService.getAll();

        // build form with variables
        this.form = this.formBuilder.group({
            'name': this.name,
            'color': this.color
        });

        // set validators for each field.
        this.name.setValidators(Validators.required);
        this.color.setValidators(Validators.pattern("^(?!null$).*$"));


        this.route.params.subscribe(params =>
            this.categoryService.find(params['id']).subscribe(
                category => {
                    this.name.setValue(category.name);
                    this.color.setValue(category.color);

                    // set id of edit contact
                    this.categoryId = category.id;
                },
                error => {
                    this.notificationService.error("Kategorie nicht gefunden.", "Der von Ihnen geöffnete Kategorie wurde nicht gefunden.");
                    this.router.navigateByUrl('contacts/all');
                }
            )
        );
    }


    /**
     * handler submit form for edit contact.
     */
    protected submitForm(form: FormGroup) {
        this.submitedForm = true;
        // valid form?
        if (form.valid) {
            let category = new Category(this.categoryId);
            category.name = form.value.name;
            category.color = form.value.color;

            this.categoryService.update(category).subscribe(respone => {
                this.notificationService.success("Erfolg", "Kategorie erfolgreich gespeichert.");
                this.router.navigateByUrl('category/all');
            })
        } else {
            this.notificationService.error("Falsche Eingabe", "Bitte überprüfen Sie Ihre Formulareingaben.");
        }
    }
} 