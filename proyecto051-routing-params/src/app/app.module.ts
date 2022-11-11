import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar/tabla-multiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaMultiplicarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
