import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  preventDefault() {
    event.preventDefault();
  }

  onClick(event: Event) {
    event.preventDefault();
  }
}
