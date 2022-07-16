import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'angular',
        pathMatch: 'full'
      },
      {
        path: 'angular',
        loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'algo',
        loadChildren: () => import('./pages/algo/algo.module').then(m => m.AlgoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
