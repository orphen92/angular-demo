import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@app/store'
import * as fromNavigation from '@app/store/navigation'
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuState$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.menuState$ = this.store.pipe(select(fromNavigation.getMenuState))
  }

}
