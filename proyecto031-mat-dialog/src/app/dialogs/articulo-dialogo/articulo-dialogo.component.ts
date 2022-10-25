import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-articulo-dialogo',
  templateUrl: './articulo-dialogo.component.html',
  styleUrls: ['./articulo-dialogo.component.css']
})
export class ArticuloDialogoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ArticuloDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Articulo
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }
}
