import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero/tablero.component';
import { LetrasPipe } from './pipes/letras.pipe';



@NgModule({
  declarations: [
    TableroComponent,
    LetrasPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ElementosModule { }
