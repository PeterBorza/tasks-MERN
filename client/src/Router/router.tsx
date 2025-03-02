import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import { Tasks } from "../features";
const router = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
];

const Routes = () => {
  const appRouter = createBrowserRouter(router);
  return <RouterProvider router={appRouter} fallbackElement={<div>Error in router</div>} />;
};

export default Routes;
