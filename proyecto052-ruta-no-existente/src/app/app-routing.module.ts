import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'pagina-404',
    component: Pagina404Component
  },
  {
    path: '**',
    redirectTo: 'pagina-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
