import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  direcciones: string[] = [
    "https://www.openstreetmap.org/export/embed.html?bbox=-64.35224533081056%2C-31.474206377544593%2C-64.06557083129884%2C-31.340295938751318&layer=mapnik",
    "https://maps.google.com/maps?q=cordoba%20argentina&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "https://www.bing.com/maps/embed?h=800&w=800&cp=-31.416887181810054~-64.18859863281249&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
  ];

  urlSegura!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
      this.fijar(0);
  }

  fijar(posicion: number) {
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.direcciones[posicion]);
  }
}
