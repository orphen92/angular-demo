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
    return categories.map((category) => {
      return {title: category.title, url: category.url}
    })
  }
)


/**
 * Get Arrays Of SUbmenu from current category
 */
 export const getSubMenu = createSelector(
  getFullMenu,
  getCurrentcategories,
  (menus, category) => {
    const menu = menus.find(menu => menu.id === category);
    if(!menu) {
      return null;
    }
    return menu.links;
  }
)
