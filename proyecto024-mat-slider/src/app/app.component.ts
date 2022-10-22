import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorSlider1 = 0;
  valorSlider2 = 0;
  valorSlider3 = 0;
  suma = 0;

  cambiar() {
    this.suma = this.valorSlider1 + this.valorSlider2 + this.valorSlider3;
  }
}
