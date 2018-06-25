import { Component } from '@angular/core';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  faGlobe = faGlobe;

  sayHello() {
    alert("Hello World!");
  }

  sayGoodbye() {
    alert("Goodbye!");
  }


}
