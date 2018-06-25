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
    console.log("Hello World!");
  }

  sayGoodbye() {
    console.log("Goodbye!");
  }


}
