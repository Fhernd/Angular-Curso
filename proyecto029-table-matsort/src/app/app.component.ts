import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  articulos: Articulo[] = [];

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  dataSource: any;

  ngOnInit(): void {
    for (let x = 1; x <= 10; x++) {
      this.articulos.push(new Articulo(x, `Artículo ${x}`, Math.trunc(Math.random() * 1000)));
    }

    this.dataSource = new MatTableDataSource<Articulo>(this.articulos);
    this.dataSource.sort = this.sort;
  }
}
