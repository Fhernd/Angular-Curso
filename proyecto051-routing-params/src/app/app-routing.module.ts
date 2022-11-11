import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar/tabla-multiplicar.component';

const routes: Routes = [{
  path: 'tabla/:numero',
  component: TablaMultiplicarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
