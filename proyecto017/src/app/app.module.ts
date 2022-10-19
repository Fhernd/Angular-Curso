import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './components/dado/dado.component';
import { PiezaComponent } from './pieza/pieza.component';
import { JugadorComponent } from './jugador/jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    PiezaComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
