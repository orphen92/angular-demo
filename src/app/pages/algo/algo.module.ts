import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgoRoutingModule } from './algo-routing.module';
import { AlgoComponent } from './algo.component';


@NgModule({
  declarations: [
    AlgoComponent
  ],
  imports: [
    CommonModule,
    AlgoRoutingModule
  ]
})
export class AlgoModule { }
