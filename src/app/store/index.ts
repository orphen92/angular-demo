import { ActionReducerMap } from "@ngrx/store";
import * as fromNavigation from "./navigation";

export interface State {
  globalState: fromNavigation.NavigationState;
}

export const reducers: ActionReducerMap<State, null> = {
  globalState: fromNavigation.reducer
}

export const effects: Array<any> = []
