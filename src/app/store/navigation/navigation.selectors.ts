import { Category } from "@app/models/backend";
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

/**
 * Get the current Category
 */
export const getCurrentcategories = createSelector(
  getNavigation,
  (state) => state.currentCategory
)

/**
 * Get Arrays Of all Categories and submenu
 */
export const getFullMenu = createSelector(
  getNavigation,
  (state) => {
    return state.menu
  }
)

/**
 * Get Arrays Of all Categories and submenu
 */
 export const fullMenuCat = createSelector(
  getFullMenu,
  (categories) => {
    categories.map((category) => {
      return {title: category.title, url: category.url}
    })
  }
)

