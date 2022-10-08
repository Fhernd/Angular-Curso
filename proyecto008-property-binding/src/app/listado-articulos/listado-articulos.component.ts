import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {

  @Input()
  articulos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
