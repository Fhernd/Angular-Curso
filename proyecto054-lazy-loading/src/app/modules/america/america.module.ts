import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { ColombiaComponent } from './america/colombia/colombia.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';


@NgModule({
  declarations: [
    ColombiaComponent,
    ArgentinaComponent
  ],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
