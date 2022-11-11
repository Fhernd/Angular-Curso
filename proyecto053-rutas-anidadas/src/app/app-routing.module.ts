import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericaComponent } from './components/america/america.component';
import { ArgentinaComponent } from './components/america/argentina/argentina.component';
import { ColombiaComponent } from './components/america/colombia/colombia.component';
import { MexicoComponent } from './components/america/mexico/mexico.component';
import { AlemaniaComponent } from './components/europa/alemania/alemania.component';
import { EspanaComponent } from './components/europa/espana/espana.component';
import { EuropaComponent } from './components/europa/europa.component';
import { ItaliaComponent } from './components/europa/italia/italia.component';

const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    children: [
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
    ]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
