import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './components/component1/component1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto1');
}
