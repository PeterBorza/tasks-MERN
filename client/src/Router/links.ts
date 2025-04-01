import { PLAYGROUND_ROUTE, SHOP_ROUTE, TASKS_ROUTE } from "./router";

export const links = {
  Shop: SHOP_ROUTE,
  Tasks: TASKS_ROUTE,
  Play: PLAYGROUND_ROUTE,
} as const;
