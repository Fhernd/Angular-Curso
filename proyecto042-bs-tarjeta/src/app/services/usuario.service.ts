import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  obtener() {
    return this.httpClient.get('https://www.scratchya.com.ar/angular/personas.php');
  }
}
