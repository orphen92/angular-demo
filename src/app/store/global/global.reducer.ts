import { GlobalModel } from "./global.models";
import * as fromAction from './global.actions';

export interface GlobalState {
  entities: GlobalModel;
}

const initialState: GlobalState = {
  entities: null,
}

export function reducer (
  state = initialState,
  action: fromAction.All
) : GlobalState {

  switch(action.type) {

    case fromAction.Types.NAV_OPEN: {
      return {...state, entities: action.payload }
    }

    case fromAction.Types.NAV_CLOSE: {
      return {...state, entities: action.payload }
    }

    case fromAction.Types.LAST_URL: {
      return {...state, entities: action.payload }
    }
  }


}


