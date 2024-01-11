import { createBrowserRouter } from "react-router-dom";

import LayoutPage from "pages/layout";
import ErrorPage from "pages/errorPage";
import HomePage from "pages/home";
import ShopPage from "pages/shop";
import { ROUTE_PATH } from "utils/constant";
import FreePatterns from "pages/freePattern";
import Blog from "pages/blog";
import Contact from "pages/contact";
import About from "pages/about";
import { PrivateRoute } from "components/Common/PrivateRoute";
import Login from "pages/login";
import NotFound from "pages/NotFound";
import CategoryList from "pages/category";
import RegisterPage from "pages/login/Register";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <LayoutPage />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: ROUTE_PATH.SHOP,
        element: <ShopPage />
      },
      {
        path: ROUTE_PATH.FREEPATTERNS,
        element: <FreePatterns />
      },
      {
        path: ROUTE_PATH.BLOG,
        element: <Blog />
      },
      {
        path: ROUTE_PATH.CONTACT,
        element: <Contact />
      },
      {
        path: ROUTE_PATH.ABOUT,
        element: <About />
      },
      {
        path: ROUTE_PATH.CATEGORY,
        element: <CategoryList />
      },
    ]
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />
  },
  {
    path: ROUTE_PATH.REGISTER,
    element: <RegisterPage />
  },
  // Admin page
  {
    path: ROUTE_PATH.ADMIN,
    element: <PrivateRoute />,
  },
  {
    path: '*',
    element: <NotFound />
  },
]);

export default router;