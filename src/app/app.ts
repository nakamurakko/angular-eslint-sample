import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular-eslint-sample');

  a = '';

  public getHoge(): number {
    return 0;
  }

  getHuga() {
    return 0;
  }

}
