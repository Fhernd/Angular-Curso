import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articulos: any;

  constructor(private articulosServicio: ArticulosService) {

  }

  ngOnInit(): void {
      this.articulos = this.articulosServicio.obtenerArticulos();
  }
}
