import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articulos: any;

  articulo = {
    codigo: 0,
    descripcion: '', 
    precio: 0
  }

  constructor(private articulosService: ArticulosService) {

  }

  ngOnInit(): void {
      this.obtenerArticulos();
  }

  obtenerArticulos() {
    this.articulosService.obtenerArticulos().subscribe((resultado) => {
      this.articulos = resultado;
    })
  }

  crearArticulo() {
    this.articulosService.crearArticulo(this.articulo).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerArticulos();
      }
    });
  }

  eliminarArticulo(codigo: number) {
    this.articulosService.eliminarArticulo(codigo).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.obtenerArticulos();
      }
    });
  }
}
