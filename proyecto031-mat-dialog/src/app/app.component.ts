import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ArticuloDialogoComponent } from './dialogs/articulo-dialogo/articulo-dialogo.component';
import { Articulo } from './models/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  articulos: Array<Articulo> = [
    new Articulo(1, 'papas', 100),
    new Articulo(2, 'manzanas', 200),
    new Articulo(3, 'naranjas', 250),
  ];

  dataSource = new MatTableDataSource<Articulo>(this.articulos);

  @ViewChild(MatTable)
  tablaArticulos!: MatTable<Articulo>;

  constructor(public dialog: MatDialog) {

  }

  abrirDialog() {
    const dialogoArticulo = this.dialog.open(ArticuloDialogoComponent, {
      data: new Articulo(0, '', 0)
    });

    dialogoArticulo.afterClosed().subscribe(e => {
      if (e) {
        this.agregarArticulo(e);
      }
    });
  }
}
