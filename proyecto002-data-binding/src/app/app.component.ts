import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar() {
    if (this.codigo || this.descripcion || this.precio) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    
  }
}
