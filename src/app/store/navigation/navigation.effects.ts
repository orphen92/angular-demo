import { Injectable } from '@angular/core';
import { Categories } from '@app/models/backend';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, zip } from 'rxjs';

import *  as fromActions from './navigation.actions';
import { Navigation } from './navigation.models';
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
