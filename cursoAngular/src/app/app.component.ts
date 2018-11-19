import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'cursoAngular';
  curso = {'id': 1, 'nombre': 'Beca Java', 'duracion': 120};
}
