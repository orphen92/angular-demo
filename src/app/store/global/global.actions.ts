import { Action } from "@ngrx/store";
import { GlobalModel } from "./global.models";

export enum Types {
  NAV_OPEN = '[Global] NAV: open',
  NAV_CLOSE = '[Global] NAV: close',
  LAST_URL = '[Global] NAV: Last url'
}

export class NavOpen implements Action {
  readonly type = Types.NAV_OPEN;
  constructor(public payload: GlobalModel) {}
}

export class NavClose implements Action {
  readonly type = Types.NAV_CLOSE;
  constructor(public payload: GlobalModel) {}
}

export class LastUrl implements Action {
  readonly type = Types.LAST_URL;
  constructor(public payload: GlobalModel) {}
}

export type All = NavOpen |  NavClose | LastUrl;
