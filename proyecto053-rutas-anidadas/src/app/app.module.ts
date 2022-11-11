import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './components/america/america.component';
import { ColombiaComponent } from './components/america/colombia/colombia.component';
import { MexicoComponent } from './components/america/mexico/mexico.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    ColombiaComponent,
    MexicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
