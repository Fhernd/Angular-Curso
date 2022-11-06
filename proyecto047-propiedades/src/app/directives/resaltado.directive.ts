import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit {

  @Input('appResaltado')
  colorResaltado!: string;
  @Input('tamano')
  tamano: number = 0;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
      this.actualizar();
  }

  actualizar() {
    
  }
}
