import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './card-list.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CardModule
  ],
  exports: [
    CardListComponent,
    CardModule
  ]
})
export class CardListModule { }
