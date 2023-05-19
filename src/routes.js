// landing page layout
import About from "./pages/landingpage/About";
import Home from "./pages/landingpage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

//users layout
import Dashboard from "./pages/dashboard";
import Games from "./pages/games";
import Score from "./pages/score/Score";

export const routes = [
  {
    name: "home",
    layout: "/",
    children: [
      {
        name: "login  users",
        path: "/",
        element: <Home />,
      },
      {
        name: "login  users",
        path: "/games",
        element: <Games />,
      },
      {
        name: "about us",
        path: "/about",
        element: <About />,
      },
      {
        name: "contact us",
        path: "/contact",
        element: "",
      },
    ],
  },
  {
    name: "auth",
    layout: "/auth",
    children: [
      {
        name: "login users",
        path: "/login",
        element: <Login />,
      },
      {
        name: "register users",
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    name: "users dashboard",
    layout: "/users",
    children: [
      {
        name: "users game",
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        name: "high score",
        path: "/score",
        element: <Score />,
      },
    ],
  },
];
