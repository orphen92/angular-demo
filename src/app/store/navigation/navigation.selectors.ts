import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState } from "./navigation.reducer";

export const getNavigationState = createFeatureSelector<NavigationState>('navigation');

const getNavigation = createSelector(
  getNavigationState,
  (state) => {
    return state.entities;
  }
)

export const getLoading = createSelector(
  getNavigationState,
  (state) => state.loading
)

export const getLastUrl = createSelector(
  getNavigation,
  (state) => state.lastUrlVisited
)

export const getMenuState = createSelector(
  getNavigation,
  (state) => state.isNavOpen
)

export const getCurrentcategories = createSelector(
  getNavigation,
  (state) => state.currentCategory
)

export const getSubCategories = createSelector(
  getNavigation,
  (state) => state.subCategories
)
