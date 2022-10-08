import { Component, ViewChild } from '@angular/core';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selectorNumerico1')
  selectorNumerico1!: SelectorNumericoComponent;
  @ViewChild('selectorNumerico2')
  selectorNumerico2!: SelectorNumericoComponent;

  fijarSelectorNumerico1(valor: number) {
    this.selectorNumerico1.fijar(valor);
  }

  fijarSelectorNumerico2(valor: number) {
    this.selectorNumerico2.fijar(valor);
  }
}
