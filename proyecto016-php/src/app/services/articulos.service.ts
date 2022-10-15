import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url: string = 'https://scratchya.com.ar/angular/proyecto016/';

  constructor(private httpClient: HttpClient) { }
}
