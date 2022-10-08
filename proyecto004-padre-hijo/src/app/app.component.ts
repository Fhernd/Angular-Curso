import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: number;
  valor2: number;
  valor3: number;

  constructor() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
  }
  generarAleatorio(): number {
    return Math.trunc(Math.random() * 6) + 1;
  }
}
