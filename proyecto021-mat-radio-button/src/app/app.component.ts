import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1!: number;
  valor2!: number;
  resultado!: number;

  operacionSeleccionada: string = 'Suma';
  tipoOperaciones = [
    'Suma', 
    'Resta', 
    'Multiplicación', 
    'División'
  ];

  operar() {
    switch(this.operacionSeleccionada) {
      case 'Suma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'Resta':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'Multiplicación':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'División':
        this.resultado = this.valor1 / this.valor2;
        break;
    }
  }
}
