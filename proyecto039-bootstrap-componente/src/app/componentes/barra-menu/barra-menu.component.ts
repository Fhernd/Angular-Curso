import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bs-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  @Input()
  opciones!: string[];
  @Input()
  colorFondo!: string;
  @Output()
  presionOpcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  presion(i: number): void {
    this.presionOpcion.emit(i);
  }
}
