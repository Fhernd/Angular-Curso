import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { DadoComponent } from './dado/dado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    JuegoDadosComponent,
    DadoComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
