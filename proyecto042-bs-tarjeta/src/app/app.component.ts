import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: any;

  constructor(private usuarioService: UsuarioService) {

  }

  recuperarPersona() {
    this.usuarioService.obtener().subscribe((resultado) => this.usuario = resultado);
  }

  presion() {
    this.recuperarPersona();
  }
}
