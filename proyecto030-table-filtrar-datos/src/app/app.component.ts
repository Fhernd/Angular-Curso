import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  articulos: Articulo[] = [
    new Articulo(1, 'papas', 100), 
    new Articulo(2, 'manzanas', 200), 
    new Articulo(3, 'naranjas', 250) 
  ];
  dataSource: any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.articulos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    console.log(filtro);
    
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
