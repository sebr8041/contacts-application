import { Component } from '@angular/core';
import { TestComponent } from './test.component';
@Component({
  selector: 'contacts-application',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
  };
}
