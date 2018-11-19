import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'cursoAngular';
  cursos = [
    {
      id: 1,
      nombre: 'Beca Java',
      duracion: 120,
      precio: 700,
      fecha: new Date()
    },
    {
      id: 2,
      nombre: 'Beca Angular',
      duracion: 4,
      precio: 30,
      fecha: new Date()
    },
    {
      id: 3,
      nombre: 'Beca Java Spring',
      duracion: 8,
      precio: 60,
      fecha: new Date()
    }
  ];

  seleccionar(curso) {
    console.log(curso);
  }
}
