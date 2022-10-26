import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticuloDialogoComponent } from './dialogs/articulo-dialogo/articulo-dialogo.component';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloDialogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatInputModule, 
    FormsModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
