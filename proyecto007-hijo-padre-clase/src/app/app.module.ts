import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorNumericoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
