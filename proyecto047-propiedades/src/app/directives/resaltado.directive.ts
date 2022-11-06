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
    if (this.colorResaltado != null) {
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    } else {
      this.elemento.nativeElement.style.backgroundColor = 'yellow';
    }

    if (this.tamano > 0) {
      this.elemento.nativeElement.style.fontSize = `${this.tamano}px`;
    }
  }
}
