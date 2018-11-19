import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []

})


export class AppComponent {
  title = 'cursoAngular';
  cursos = [
    {'id': 1, 'nombre': 'Beca Java', 'duracion': 120},
    {'id': 2, 'nombre': 'Beca Angular', 'duracion': 4},
    {'id': 3, 'nombre': 'Beca Java Spring', 'duracion': 8}
];
}
