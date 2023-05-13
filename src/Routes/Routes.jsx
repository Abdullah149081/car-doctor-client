import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Page/Checkout/Checkout";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/shared/ErrorPage/ErrorPage";
import Login from "../Page/shared/Login/Login/Login";
import Register from "../Page/shared/Login/Register/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
      },
    ],
  },
]);
export default router;
