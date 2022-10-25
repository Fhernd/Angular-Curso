import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginador!: MatPaginator;

  ngOnInit(): void {
    for (let x = 1; x <= 100; x++) {
      this.articulos.push(new Articulo(x, `Artículo ${x}`, Math.trunc(Math.random() * 1000)));
      this.dataSource = new MatTableDataSource<Articulo>(this.articulos);
      this.dataSource.paginator = this.paginador;
    }
  }
}
