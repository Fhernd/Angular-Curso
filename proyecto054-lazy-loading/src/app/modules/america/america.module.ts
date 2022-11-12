import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { ColombiaComponent } from './america/colombia/colombia.component';


@NgModule({
  declarations: [
    ColombiaComponent
  ],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
