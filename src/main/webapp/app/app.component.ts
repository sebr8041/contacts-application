import { Component } from '@angular/core';
import { ContactsService } from './service/contact.service';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'contacts-application',
  templateUrl: 'app/app.component.html',
      providers: [ContactsService, CategoryService],
})
export class AppComponent {
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
  };
}
