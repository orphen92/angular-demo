import { ActionReducerMap } from "@ngrx/store";
import * as fromNavigation from "./navigation";
export interface State {
  navigation: fromNavigation.NavigationState;
}

export const reducers: ActionReducerMap<State, null> = {
  navigation: fromNavigation.reducer
}

export const effects: Array<any> = [
  fromNavigation.NavigationEffects
]
