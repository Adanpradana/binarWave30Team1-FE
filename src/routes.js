// landing page layout
import About from "./pages/landingpage/About";
import Home from "./pages/landingpage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

//users layout
import Dashboard from "./pages/dashboard";
import Games from "./pages/games";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
    layout: "/",
    children: [
      {
        name: "register users",
        path: "/register",
        element: <Register />,
      },
      {
        name: "login  users",
        path: "login",
        element: <Login />,
      },
      {
        name: "about us",
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    name: "users dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        name: "users game",
        path: "/games",
        element: <Games />,
      },
    ],
  },
];
