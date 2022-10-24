import { Component } from '@angular/core';
import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['Código', 'Descripción', 'Precio'];

  datos: Articulo[] = [
    new Articulo(1, 'papas', 1000), 
    new Articulo(2, 'manzanas', 1500), 
    new Articulo(3, 'naranjas', 1500), 
  ]
}
