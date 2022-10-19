import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisArgentinaComponent } from './components/pais-argentina/pais-argentina.component';
import { PaisColombiaComponent } from './components/pais-colombia/pais-colombia.component';
import { PaisMexicoComponent } from './components/pais-mexico/pais-mexico.component';

const routes: Routes = [
  {path: 'pais-colombia', component: PaisColombiaComponent},
  {path: 'pais-argentina', component: PaisArgentinaComponent},
  {path: 'pais-mexico', component: PaisMexicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
