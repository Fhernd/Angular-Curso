import { Component } from '@angular/core';
import Articulo from './models/articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: Array<Articulo> = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar() {
    if (!this.codigo || !this.descripcion.length || !this.precio) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo);

    alert('El artículo se agregó de forma correcto.')
  }
}
