import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actividad = new FormControl();

  actividades!: string[];

  ngOnInit() : void {
    this.actividades = [];

    const datos = localStorage.getItem('actividades');

    if (datos != null) {
      let arreglo = JSON.parse(datos);

      if (arreglo != null) {
        for (const actividad of arreglo) {
          this.actividades.push(actividad);
        }
      }
    }
  }

  agregar() {
    this.actividades.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.actividades));

    this.actividad.setValue('');
  }

  borrar(posicion: number) {
    this.actividades.splice(posicion, 1);
    localStorage.clear();
    
    localStorage.setItem('actividades', JSON.stringify(this.actividades));
  }

  borrarTodas() {
    localStorage.clear();
    this.actividades = [];
  }
}
