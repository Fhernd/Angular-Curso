import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorSeleccionado = 'green';
  tamanoFuente = 30;

  cambiarColor(color: string) {
    this.colorSeleccionado = color;
  }

  agrandar() {
    ++this.tamanoFuente;
  }

  reducir() {
    --this.tamanoFuente;
  }
}
