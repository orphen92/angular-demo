import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState } from "./navigation.reducer";

export const getNavigationState = createFeatureSelector<NavigationState>('navigation');

export const getLastUrl = createSelector(
  getNavigationState,
  (state) => state.entities.lastUrlVisited
)

export const getMenuState = createSelector(
  getNavigationState,
  (state) => state.entities.isNavOpen
)
