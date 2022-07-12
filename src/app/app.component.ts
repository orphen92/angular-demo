import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from './store'
import * as fromNavigation from './store/navigation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-demo';

  constructor(
    private store: Store<fromRoot.State>
  ) {
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
