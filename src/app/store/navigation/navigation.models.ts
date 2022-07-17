import { Category } from "@app/models/backend";

export interface Navigation {
  isNavOpen: boolean,
  currentCategory: string,
  subCategories: Array<Category>,
  lastUrlVisited: string
}
