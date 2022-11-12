import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { ColombiaComponent } from './america/colombia/colombia.component';
import { MexicoComponent } from './america/mexico/mexico.component';

const routes: Routes = [
  {
    path: 'colombia',
    component: ColombiaComponent
  },
  {
    path: 'argentina',
    component: ArgentinaComponent
  },
  {
    path: 'mexico',
    component: MexicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericaRoutingModule { }
