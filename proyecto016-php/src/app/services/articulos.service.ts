import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url: string = 'https://scratchya.com.ar/angular/proyecto016/';

  constructor(private httpClient: HttpClient) { }

  obtenerArticulos() {
    return this.httpClient.get(`${this.url}recuperartodos.php`);
  }

  crearArticulo(articulo: any) {
    return this.httpClient.post(`${this.url}alta.php`, JSON.stringify(articulo));
  }

  eliminarArticulo(codigo: number) {
    return this.httpClient.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  obtenerArticuloPorCodigo(codigo: number) {
    return this.httpClient.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificarArticulo(articulo: any) {
    return this.httpClient.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  }
}
