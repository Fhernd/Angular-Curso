import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EspanaComponent } from './europa/espana/espana.component';
import { AlemaniaComponent } from './europa/alemania/alemania.component';


@NgModule({
  declarations: [
    EspanaComponent,
    AlemaniaComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
