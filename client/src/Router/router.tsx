import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { Navigator } from "src/components/Navigator";

import Home from "./Home";
import { LandingPage, Playground, Shop, Tasks } from "src/features";
import { Suspense } from "react";

export const HOME_ROUTE = "/";
export const SHOP_ROUTE = "/shop";
export const TASKS_ROUTE = "/tasks";
export const PLAYGROUND_ROUTE = "/play";

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
        element: (
          <Suspense fallback={<div>...Loading from router</div>}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: TASKS_ROUTE,
        element: (
          <Suspense fallback={<div>...Loading from router suspense</div>}>
            <Tasks />
          </Suspense>
        ),
      },
      {
        path: PLAYGROUND_ROUTE,
        element: <Playground />,
      },
      {
        path: "*",
        element: <Navigator />,
      },
    ],
  },
];

export const AppRoutes = () => {
  const appRouter = createBrowserRouter(router, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <RouterProvider
      router={appRouter}
      fallbackElement={<div>Error in router</div>}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
