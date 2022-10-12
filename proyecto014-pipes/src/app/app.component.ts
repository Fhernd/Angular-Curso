import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'John Ortiz Ordoñez';
  saldo = 1000.50;
  dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  articulos = [
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.33
    },
    {
      codigo: 2,
      descripcion: 'manzanas',
      precio: 54
    }
  ];
  fechaActual = new Date();
}
