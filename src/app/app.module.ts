import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { filter, take } from 'rxjs';

import { environment } from '../environments/environment';

// Store
import { select, Store, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects } from './store';
import * as fromRoot from '@app/store'
import * as fromNavigation from '@app/store/navigation'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavigationService } from './store/navigation/navigation.service';


const StoreDevTools: any = !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [];

export function initApplicationFactory(store: Store<fromRoot.State>) {
  return () => new Promise(resolve => {
    store.dispatch(new fromNavigation.Read);
    store.dispatch(new fromNavigation.NavClose);
    store.pipe(select(fromNavigation.getFullMenu)).pipe(
      filter(menu => {
       return menu.length > 0
      }), take(1)
    ).subscribe(
      (data) => {
        // initialise the first current menu
        store.dispatch(new fromNavigation.AddCategory(data[0].id));
        resolve(true);
      }
    )
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevTools
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initApplicationFactory,
      deps: [[new Inject(Store)]]
    },
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
