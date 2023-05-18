// landing page layout
import About from "./pages/landingpage/About";
import Home from "./pages/landingpage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
<<<<<<< HEAD
import Game from "./pages/games"
=======

>>>>>>> dev
//users layout
import Dashboard from "./pages/dashboard";
import Games from "./pages/games";
import Score from "./pages/score/Score";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
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
    path: "/users",
    element: <Dashboard />,
    children: [
      {
        name: "users game",
        path: "/games",
<<<<<<< HEAD
        element: <Game />,
=======
        element: <Games />,
      },
      {
        name: "high score",
        path: "/score",
        element: <Score />,
>>>>>>> dev
      },
    ],
  },
];
