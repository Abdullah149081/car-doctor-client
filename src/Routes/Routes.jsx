import { createBrowserRouter } from "react-router-dom";
import BookService from "../Page/BookServices/BookService";
import Bookings from "../Page/Bookings/Bookings";
import Checkout from "../Page/Checkout/Checkout";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/shared/ErrorPage/ErrorPage";
import Login from "../Page/shared/Login/Login/Login";
import Register from "../Page/shared/Login/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/book-service/:id",
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
export default router;
