import { Category } from "@app/models/backend";
import { Action } from "@ngrx/store";
import { Navigation } from "./navigation.models";

export enum Types {
  NAV_OPEN = '[Global] NAV: open',
  NAV_CLOSE = '[Global] NAV: close',
  NAV_TOGGLE = '[Global] NAV: toggle',
  ADD_CATEGORY = '[Global] CATEGORY: add',
  READ = '[Subcategories] Read: start',
  READ_SUCCESS = '[Subcategories] Read: success',
  READ_ERROR = '[Subcategories] Read: error',
  LAST_URL = '[Global] NAV: Last url'
}

export class NavOpen implements Action {
  readonly type = Types.NAV_OPEN;
  constructor() {}
}

export class NavClose implements Action {
  readonly type = Types.NAV_CLOSE;
  constructor() {}
}

export class NavToggle implements Action {
  readonly type = Types.NAV_TOGGLE;
  constructor() {}
}

export class AddCategory implements Action {
  readonly type = Types.ADD_CATEGORY;
  constructor(public payload: string) {}
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public payload: Array<Category>) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public payload: string) {}
}

export class LastUrl implements Action {
  readonly type = Types.LAST_URL;
  constructor(public payload: Navigation) {}
}

export type All = NavOpen | NavClose | NavToggle | AddCategory | Read | ReadSuccess | ReadError | LastUrl;
