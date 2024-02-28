import { RouterProvider, createHashRouter } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createHashRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/signIn",
    element: <SignIn />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
