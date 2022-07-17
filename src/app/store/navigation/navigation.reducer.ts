import { Navigation } from "./navigation.models";
import * as fromAction from './navigation.actions';

export interface NavigationState {
  entities: Navigation;
  loading: boolean;
  error: string;
}

const initialState: NavigationState = {
  entities: null,
  loading: null,
  error: null
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

    case fromAction.Types.ADD_CATEGORY: {
      return {...state, entities: {...state.entities, currentCategory: action.payload}}
    }

    case fromAction.Types.READ: {
      return {...state, loading:true, error: null}
    }

    case fromAction.Types.READ_SUCCESS: {
      return {...state, entities:{...state.entities, subCategories: action.payload}, loading:false, error: null}
    }

    case fromAction.Types.READ_ERROR: {
      return {...state, entities:null, loading:false, error: action.payload}
    }

    case fromAction.Types.LAST_URL: {
      return {...state, entities: action.payload }
    }

    default: {
      return state;
    }
  }


}


