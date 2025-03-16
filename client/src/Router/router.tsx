import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { Navigator } from "src/components/Navigator";

import Home from "./Home";
import { LandingPage, Shop, Tasks } from "src/features";

export const HOME_ROUTE = "/";
export const SHOP_ROUTE = "/shop";
export const TASKS_ROUTE = "/tasks";

const router: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Home />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: SHOP_ROUTE,
        element: <Shop />,
      },
      {
        path: TASKS_ROUTE,
        element: <Tasks />,
      },
      {
        path: "*",
        element: <Navigator />,
      },
    ],
  },
];

export const AppRoutes = () => {
  const appRouter = createBrowserRouter(router);
  return <RouterProvider router={appRouter} fallbackElement={<div>Error in router</div>} />;
};
