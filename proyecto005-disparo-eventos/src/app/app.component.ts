import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = '';

  actualizar(tiempo: number) {
    this.mensaje = tiempo + ' (se actualiza cada 10 segundos)';
  }
}
