import { Categories } from "@app/models/backend";

export interface Navigation {
  isNavOpen: boolean,
  currentCategory: string,
  subCategories: Categories,
  lastUrlVisited: string
}
