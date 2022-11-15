import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado!: string;

  formularioAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(),
      nota2: new FormControl(),
      nota3: new FormControl()
    })
  });

  onSubmit() {
    const nota1 = parseInt(this.formularioAlumno.value.notas?.nota1);
    const nota2 = parseInt(this.formularioAlumno.value.notas?.nota2);
    const nota3 = parseInt(this.formularioAlumno.value.notas?.nota3);

    if (nota1 >= 4 && nota2 >= 4 && nota3 >= 4) {
      this.resultado = 'El alumno queda aprobado por esas notas';
    } else {
      this.resultado = 'El alumno no aprueba por esas notas';
    }
  }
}
