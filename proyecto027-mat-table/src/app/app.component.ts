import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
  ];

  articuloSelecciondo: Articulo = new Articulo(0, '', 0);

  @ViewChild(MatTable) tablaArticulos!: MatTable<Articulo>;

  borrarFila(codigo: number) {
    if (confirm('¿Realmente quiere borrar este registro?')) {
      this.datos.splice(codigo, 1);
      this.tablaArticulos.renderRows();
    }
  }

  
}
