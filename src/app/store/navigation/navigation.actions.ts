import { Action } from "@ngrx/store";
import { Navigation } from "./navigation.models";

export enum Types {
  NAV_OPEN = '[Global] NAV: open',
  NAV_CLOSE = '[Global] NAV: close',
  NAV_TOGGLE = '[Global] NAV: toggle',
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

export class LastUrl implements Action {
  readonly type = Types.LAST_URL;
  constructor(public payload: Navigation) {}
}

export type All = NavOpen |  NavClose | NavToggle | LastUrl;
