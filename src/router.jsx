import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Wrapper from "./components/Wrapper";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import SingleProduct from "./Pages/SingleProduct";
import SingleBlog from "./Pages/SingleBlog";
import ProductLayout from "./components/ProductLayout";
import BlogLayout from "./components/BlogLayout";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Checkout from "./Pages/Checkout";
import PrivateRouteHandle from "./components/PrivateRouteHandle";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import Products from "./Pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":id",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <ProductLayout />,

        children: [
          {
            index: true,
            element: <Products/>,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouteHandle>
            <Profile />
          </PrivateRouteHandle>
        ),
      },
      {
        path: "/changepassword",
        element: <ChangePassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart/checkout",
        element: (
          <PrivateRouteHandle>
            <Checkout />
          </PrivateRouteHandle>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
