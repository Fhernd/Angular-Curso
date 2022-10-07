import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'John Ortiz Ordoñez';
  edad = 17;
  email = 'joo@mail.co';
  sueldos = [2000, 3000, 5000];
  activo = true;
  menor = true;
  contador = 1;

  esActivo() {
    return this.activo ? 'Trabajador activo' : 'Trabajador inactivo';
  }

  ultimos3Sueldos() {
    return this.sueldos.reduce((a, v) => (a += v, a), 0);
  }

  incrementar() {
    ++this.contador;
  }

  decrementar() {
    --this.contador;
  }
}
