import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado!: string;

  constructor(private fb: FormBuilder) {

  }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  onSubmit() {
    if (this.formularioContacto.valid) {
      this.resultado = 'Todos los datos son válidos.';
    } else {
      this.resultado = 'Hay datos inválidos en el formulario.';
    }
  }
}
