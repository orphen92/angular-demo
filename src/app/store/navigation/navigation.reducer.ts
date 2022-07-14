import { Navigation } from "./navigation.models";
import * as fromAction from './navigation.actions';

export interface NavigationState {
  entities: Navigation;
}

const initialState: NavigationState = {
  entities: {
      isNavOpen: false,
      lastUrlVisited: '/'
  },
}

export function reducer (
  state = initialState,
  action: fromAction.All
) : NavigationState {

  switch(action.type) {

    case fromAction.Types.NAV_OPEN: {
      return {...state, entities: {...state.entities, isNavOpen: true}}
    }

    case fromAction.Types.NAV_CLOSE: {
      return {...state, entities: {...state.entities, isNavOpen: false}}
    }

    case fromAction.Types.NAV_TOGGLE: {
      return {...state, entities: {...state.entities, isNavOpen: !state.entities.isNavOpen}}
    }

    case fromAction.Types.LAST_URL: {
      return {...state, entities: action.payload }
    }

    default: {
      return state;
    }
  }


}


