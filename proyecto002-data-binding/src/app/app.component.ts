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

    if (this.buscarArticulo(this.codigo)) {
      alert('No se puede agregar este artículo porque ya existe otro con el mismo código.');
      return;
    }

    alert('El artículo se agregó de forma correcto.')

    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo);

    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  borrar(codigo: number) {
    const resultado = confirm('¿Desea eliminar este artículo?');

    if (resultado) {
      this.articulos = this.articulos.filter(e => e.codigo !== codigo);
    }
  }

  buscarArticulo(codigo: number) {
    return this.articulos.find(e => e.codigo === codigo);
  }

  seleccionar(codigo: number) {
    let articulo : any = this.buscarArticulo(codigo);

    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  modificar() {
    if (!this.codigo) {
      alert('Debe especificar un código.');
      return;
    }

    let articulo : any = this.buscarArticulo(this.codigo);

    if(!articulo) {
      alert('No existe un artículo con el código especificado.');
      return;
    }

    articulo.descripcion = this.descripcion;
    articulo.precio = this.precio;

    this.limpiarCampos();
    alert('El artículo se actualizó de forma correcta.');
  }

  limpiarCampos() {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  hayArticulos() {
    return Boolean(this.articulos.length);
  }
}
