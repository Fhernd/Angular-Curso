import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conversion: string = '';
  potenciaNumero!: number;
  cantidadDigitos!: number;

  formularioConversion = new FormGroup({
    numeroDecimal: new FormControl(''),
    base: new FormControl(''),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  onSubmit() {
    let valor = this.formularioConversion.value.numeroDecimal;
    valor = valor ? valor : '0';

    if(this.formularioConversion.value.base == 'hexadecimal') {
      this.conversion = parseInt(valor).toString(16);
    } else if(this.formularioConversion.value.base == 'octal') {
      this.conversion = parseInt(valor).toString(8);
    }

    let potencia = this.formularioConversion.value.potencia;
    potencia = potencia ? potencia : '1';
    this.potenciaNumero = Math.pow(parseInt(valor), parseInt(potencia));

    if (this.formularioConversion.value.largo) {
      this.cantidadDigitos = valor.length;
    }
  }
}
