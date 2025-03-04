import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from "react-router-dom";

import Home from "./Home";
import { LandingPage, Tasks } from "src/features";
import Contact from "components/Contact";
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const Routes = () => {
  const appRouter = createBrowserRouter(router);
  return <RouterProvider router={appRouter} fallbackElement={<div>Error in router</div>} />;
};

export default Routes;
