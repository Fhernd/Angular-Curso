import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'Framework Web',
    'Internet'
  ]

  presion(opcion: number) {
    alert(`Se informa que se presionó la opción: ${this.opciones[opcion]}`);
  }
}
