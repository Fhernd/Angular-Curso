import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlemaniaComponent } from './europa/alemania/alemania.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { ItaliaComponent } from './europa/italia/italia.component';

const routes: Routes = [
  {
    path: 'espana',
    component: EspanaComponent
  },
  {
    path: 'alemania',
    component: AlemaniaComponent
  },
  {
    path: 'italia',
    component: ItaliaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
