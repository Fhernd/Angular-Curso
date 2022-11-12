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

  agregar() {
    this.lista.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.lista));

    this.actividad.setValue('');
  }

  borrar(posicion: number) {
    this.lista.splice(posicion, 1);
    localStorage.clear();
    
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
}
