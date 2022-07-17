export interface Categories {
  categories: Array<Category>
}

export interface Category {
  id: string,
  title: string,
  url: string,
  links: Array<Link>
}

export interface Link {
  name: string,
  url: string,
}
