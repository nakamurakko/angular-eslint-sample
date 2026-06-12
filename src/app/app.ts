import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
