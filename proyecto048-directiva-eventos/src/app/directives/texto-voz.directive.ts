import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[textoVoz]'
})
export class TextoVozDirective {

  constructor(private elemento: ElementRef) { }

  @HostListener('mouseenter')
  entradaMouse() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.elemento.nativeElement.textContent));
  }

  @HostListener('mouseleave')
  salidaMouse() {
    speechSynthesis.cancel();
  }
}
