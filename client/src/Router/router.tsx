import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { Navigator } from "src/components/Navigator";

import Home from "./Home";
import { LandingPage, Section, Tasks } from "src/features";
const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/section",
        element: <Section />,
      },
      {
        path: "/tasks",
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
