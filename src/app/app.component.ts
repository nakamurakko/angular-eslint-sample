import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular-eslint-sample';

  a = '';

  public getHoge(): number {
    return 0;
  }

  getHuga() {
    return 0;
  }
}
