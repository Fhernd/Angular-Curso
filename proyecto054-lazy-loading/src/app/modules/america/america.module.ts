import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { ColombiaComponent } from './america/colombia/colombia.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { MexicoComponent } from './america/mexico/mexico.component';


@NgModule({
  declarations: [
    ColombiaComponent,
    ArgentinaComponent,
    MexicoComponent
  ],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
