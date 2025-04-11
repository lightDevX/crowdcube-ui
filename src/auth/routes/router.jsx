import { createBrowserRouter } from "react-router";
import Campaign from "../../components/Campaign/Campaign";
import DonorList from "../../components/DonorList/DonorList";
import Event from "../../components/Event/Event";
import Home from "../../layouts/Home/Home";
import Root from "../../layouts/Root/Root";
import About from "../../pages/About/About";
import Donate from "../../pages/Donate/Donate";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/donor-list",
        element: <DonorList />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

export default router;
