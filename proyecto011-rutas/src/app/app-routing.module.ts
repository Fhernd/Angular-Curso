import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';

const routes: Routes = [
  {path: 'juego-dados', component: JuegoDadosComponent},
  {path: 'acerca-de', component: AcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
