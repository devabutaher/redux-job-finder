import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";
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
        path: "/edit-job",
        element: <EditJob />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
    ],
  },
]);

export default router;
