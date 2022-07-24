import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromNavigation from '@app/store/navigation';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromNavigation.NavClose);
  }

}
