import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
