import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posiciones = [
    ['-', '-', '-'], 
    ['-', '-', '-'], 
    ['-', '-', '-'] 
  ];

  jugadorActual = 'O';

  precion(fila: number, columna: number) {
    if (this.casillaLibre(fila, columna)) {
      this.posiciones[fila][columna] = this.jugadorActual;
      this.verificarGano('X');
    }
  }

  casillaLibre(fila: number, columna: number) : boolean {
    return this.posiciones[fila][columna] == '-';
  }

  verificarGano(jugador: string) {
    
  }
}
