import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bs-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input()
  datos: any;
  @Output()
  presionOpcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  presion(): void {
    this.presionOpcion.emit();
  }
}
