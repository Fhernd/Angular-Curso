import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './modules/america/america/america.component';
import { EuropaComponent } from './modules/europa/europa/europa.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    EuropaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
