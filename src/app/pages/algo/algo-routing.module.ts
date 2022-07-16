import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoComponent } from './algo.component';

const routes: Routes = [
  {
    path: '',
    component: AlgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgoRoutingModule { }
