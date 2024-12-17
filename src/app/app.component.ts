import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
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
