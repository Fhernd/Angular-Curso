import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { DadoComponent } from './dado/dado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoDadosComponent,
    DadoComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
