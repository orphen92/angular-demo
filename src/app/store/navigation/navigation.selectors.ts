import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState } from "./navigation.reducer";

export const getNavigationState = createFeatureSelector<NavigationState>('navigation');

const getNavigation = createSelector(
  getNavigationState,
  (state) => {
    console.log('state: ', state);
    return state.entities;
  }
)

export const getLastUrl = createSelector(
  getNavigationState,
  (state) => state.entities.lastUrlVisited
)

export const getMenuState = createSelector(
  getNavigation,
  (state) => state.isNavOpen
)

export const getCategories = createSelector(
  getNavigation,
  (state) => state.currentCategory
)

export const getLoading = createSelector(
  getNavigationState,
  (state) => state.loading
)
