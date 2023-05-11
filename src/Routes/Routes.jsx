import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/shared/ErrorPage/ErrorPage";
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
    ],
  },
]);
export default router;
