import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conversion!: string;
  potenciaNumero!: number;
  cantidadDigitos!: number;

  formularioConversion = new FormGroup({
    numeroDecimal: new FormControl(''),
    base: new FormControl(''),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  onSubmit() {
    if(this.formularioConversion.value.base == 'hexadecimal') {
      this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(16);
    } else if(this.formularioConversion.value.base == 'octal') {
      this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(8);
    }

    this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numeroDecimal), parseInt(this.formularioConversion.value.potencia));

    if (this.formularioConversion.value.largo) {
      this.cantidadDigitos = this.formularioConversion.value.numeroDecimal?.length;
    }
  }
}
