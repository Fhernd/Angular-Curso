import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EspanaComponent } from './europa/espana/espana.component';


@NgModule({
  declarations: [
    EspanaComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
