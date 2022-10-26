import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-dados',
  templateUrl: './juego-dados.component.html',
  styleUrls: ['./juego-dados.component.css']
})
export class JuegoDadosComponent implements OnInit {

  valorDado1!: number;
  valorDado2!: number;
  valorDado3!: number;
  resultado!: string;

  constructor() {
    this.valorDado1 = this.generarAleatorio();
    this.valorDado2 = this.generarAleatorio();
    this.valorDado3 = this.generarAleatorio();
   }

  ngOnInit(): void {
  }

  generarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valorDado1 = this.generarAleatorio();
    this.valorDado2 = this.generarAleatorio();
    this.valorDado3 = this.generarAleatorio();

    if (this.valorDado1 == this.valorDado2 && this.valorDado1 == this.valorDado3) {
      this.resultado = 'Ganó';
    } else {
      this.resultado = 'Perdió';
    }
  }
}
