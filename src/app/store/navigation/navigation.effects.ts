import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import *  as fromActions from './navigation.actions';
import { NavigationService } from './navigation.service';

type Action = fromActions.All;

@Injectable()
export class NavigationEffects {
  constructor(
    private actions: Actions,
    private navigationService: NavigationService
  ){}



  read$ = createEffect(() => this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() =>  {
      return this.navigationService.getCategories().pipe(
        map(data => {
          return new fromActions.ReadSuccess(data);
        })
      )
    })
  ))
}
