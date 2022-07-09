export interface GlobalModel {
  navigation: Navigation
}

export interface Navigation {
  isNavOpen: boolean,
  lastUrlVisited: string;
}
