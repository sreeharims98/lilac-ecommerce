import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_PATHS } from "../data/constants";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: ROUTE_PATHS.HOME,
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ROUTE_PATHS.DETAILS,
          element: <Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
