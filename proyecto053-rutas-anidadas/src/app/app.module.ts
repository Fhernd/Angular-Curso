import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './components/america/america.component';
import { ColombiaComponent } from './components/america/colombia/colombia.component';
import { MexicoComponent } from './components/america/mexico/mexico.component';
import { ArgentinaComponent } from './components/america/argentina/argentina.component';
import { EuropaComponent } from './components/europa/europa.component';
import { EspanaComponent } from './components/europa/espana/espana.component';
import { AlemaniaComponent } from './components/europa/alemania/alemania.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    ColombiaComponent,
    MexicoComponent,
    ArgentinaComponent,
    EuropaComponent,
    EspanaComponent,
    AlemaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
