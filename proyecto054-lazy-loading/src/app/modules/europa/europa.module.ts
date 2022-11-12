import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EspanaComponent } from './europa/espana/espana.component';
import { AlemaniaComponent } from './europa/alemania/alemania.component';
import { ItaliaComponent } from './europa/italia/italia.component';


@NgModule({
  declarations: [
    EspanaComponent,
    AlemaniaComponent,
    ItaliaComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
