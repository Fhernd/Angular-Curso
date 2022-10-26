import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { DadoComponent } from './dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoDadosComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
