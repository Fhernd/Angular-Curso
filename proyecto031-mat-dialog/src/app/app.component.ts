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
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

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
  
  agregarArticulo(articulo: Articulo) {
    this.articulos.push(new Articulo(articulo.codigo, articulo.descripcion, articulo.precio));
    this.tablaArticulos.renderRows();
  }

  borrarFila(indice: number) {
    if (confirm('¿Está seguro que quiere eliminar este artículo?')) {
      this.articulos.splice(indice, 1);
      this.tablaArticulos.renderRows();
    }
  }
}
