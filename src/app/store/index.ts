import { ActionReducerMap } from "@ngrx/store";
import * as fromGlobal from "./global";

export interface State {
  globalState: fromGlobal.GlobalState;
}

export const reducers: ActionReducerMap<State, null> = {
  globalState: fromGlobal.reducer
}

export const effects: Array<any> = []
