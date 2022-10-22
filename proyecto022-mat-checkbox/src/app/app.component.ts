import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1!: number;
  valor2!: number;
  resultado!: string;
  opcionSuma = false;
  opcionResta = false;
  opcionMultiplicacion = false;
  opcionDivision = false;

  operar() {
    this.resultado = '';

    if (this.opcionSuma) {
      const suma = this.valor1 + this.valor2;
      this.resultado += `La suma es ${suma} `;
    }
    if (this.opcionResta) {
      const resta = this.valor1 - this.valor2;
      this.resultado += `La resta es ${resta} `;
    }
    if (this.opcionMultiplicacion) {
      const multiplicacion = this.valor1 * this.valor2;
      this.resultado += `La multiplicación es ${multiplicacion} `;
    }
    if (this.opcionDivision) {
      const division = this.valor1 / this.valor2;
      this.resultado += `La división es ${division} `;
    }
  }
}
