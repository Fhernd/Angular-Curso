import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1!: number;
  valor2!: number;
  operacion: string = 'Ninguna';
  resultado!: number;
}
