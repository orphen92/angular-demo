import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from './store'
import * as fromNavigation from './store/navigation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-demo';
  menuState$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit(): void {
    //initialise the nav status to close
    this.store.dispatch(new fromNavigation.NavClose);
    this.menuState$ = this.store.pipe(select(fromNavigation.getMenuState))
  }
}
