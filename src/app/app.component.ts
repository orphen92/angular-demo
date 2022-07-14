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
    this.menuState$ = this.store.pipe(select(fromNavigation.getMenuState))
  }

  openNav(){
    this.store.dispatch(new fromNavigation.NavOpen);
  }

  closeNav(){
    this.store.dispatch(new fromNavigation.NavClose);
  }

  toggleNav(){
    this.store.dispatch(new fromNavigation.NavToggle);
  }
}
