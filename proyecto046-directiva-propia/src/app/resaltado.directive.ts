import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elemento: ElementRef) { 
    elemento.nativeElement.style.backgroundColor = 'yellow';
  }

}
