import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: '',
        redirectTo: 'components',
        pathMatch: 'full'
      },
      {
        path: 'components',
        loadChildren: () => import('./pages/components/components.module').then( m => m.ComponentsModule)
      },
      {
        path: 'directives',
        loadChildren: () => import('./pages/directives/directives.module').then( m => m.DirectivesModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesModule)
      },
      {
        path: 'pipes',
        loadChildren: () => import('./pages/pipes/pipes.module').then( m => m.PipesModule)
      },
      {
        path: 'other',
        loadChildren: () => import('./pages/other/other.module').then( m => m.OtherModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
