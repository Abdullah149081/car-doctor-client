import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/shared/ErrorPage/ErrorPage";
import Login from "../Page/shared/Login/Login/Login";
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
    ],
  },
]);
export default router;
