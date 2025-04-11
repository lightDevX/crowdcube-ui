import { createBrowserRouter } from "react-router";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Router</h1>,
    errorElement: <ErrorPage />,
  },
]);

export default router;
