import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'games',
        pathMatch: 'full'
      },
      {
        path: 'games',
        loadChildren: () => import('./pages/games/games.module').then( m => m.GamesModule)
      },
      {
        path: 'tools',
        loadChildren: () => import('./pages/tools/tools.module').then( m => m.ToolsModule)
      },
      {
        path: 'other',
        loadChildren: () => import('./pages/other/other.module').then( m => m.OtherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
