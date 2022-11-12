import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actividad = new FormControl();

  lista!: string[];

  ngOnInit() : void {
    this.lista = [];

    const datos = localStorage.getItem('actividades');

    if (datos != null) {
      let arreglo = JSON.parse(datos);

      if (arreglo != null) {
        for (const actividad of arreglo) {
          this.lista.push(actividad);
        }
      }
    }
  }
}
