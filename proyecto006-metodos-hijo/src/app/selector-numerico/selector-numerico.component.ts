import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {

  @Input()
  minimo: number = 1;
  @Input()
  maximo: number = 1;
  actual: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual < this.maximo) {
      ++this.actual;
    }
  }

  decrementar() {
    if (this.actual > this.minimo) {
      --this.actual;
    }
  }

  fijar(valor: number) {
    if (valor >= this.minimo && valor <= this.maximo) {
      this.actual = valor;
    }
  }
}
