import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articulos: any;
    
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://scratchya.com.ar/vue/datos.php').subscribe(resultado => {
      this.articulos = resultado;
    });
  }
}
