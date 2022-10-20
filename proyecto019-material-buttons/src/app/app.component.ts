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

  presion(fila: number, columna: number) {
    if (this.casillaLibre(fila, columna)) {
      this.posiciones[fila][columna] = this.jugadorActual;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  casillaLibre(fila: number, columna: number): boolean {
    return this.posiciones[fila][columna] == '-';
  }

  verificarGano(jugador: string) {
    if (this.posiciones[0][0] == jugador &&
      this.posiciones[0][1] == jugador &&
      this.posiciones[0][2] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[1][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[1][2] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[2][0] == jugador &&
      this.posiciones[2][1] == jugador &&
      this.posiciones[2][2] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[0][0] == jugador &&
      this.posiciones[1][0] == jugador &&
      this.posiciones[2][0] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[0][1] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][1] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[0][2] == jugador &&
      this.posiciones[1][2] == jugador &&
      this.posiciones[2][2] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[0][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][2] == jugador) {
      alert(`Ganó: ${jugador}`);
    }

    if (this.posiciones[0][2] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][0] == jugador) {
      alert(`Ganó: ${jugador}`);
    }
  }

  cambiarJugador() {
    if (this.jugadorActual == 'O') {
      this.jugadorActual = 'X';
    } else {
      this.jugadorActual = 'O';
    }
  }

  reiniciar() {
    for (let fila = 0; fila < this.posiciones.length; fila++) {
      for (let columna = 0; columna < this.posiciones.length; columna++) {
        this.posiciones[fila][columna] = '-';
      }
    }
  }
}
