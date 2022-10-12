import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  obtenerArticulos() {
    return this.http.get('https://scratchya.com.ar/vue/datos.php');
  }
}
