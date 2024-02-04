import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import FormPage from "../pages/FormPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job-form",
        element: <FormPage />,
      },
    ],
  },
]);

export default router;
