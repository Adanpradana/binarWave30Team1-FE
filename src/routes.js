// landing page layout
import About from "./pages/landingpage/About/About";
import Home from "./pages/landingpage/Home";
import ContactUs from "./pages/landingpage/ContactUs/";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

//users layout
import Dashboard from "./pages/dashboard";
import Games from "./pages/landingpage/Games";
import Score from "./pages/dashboard/score/Score";

export const routes = [
  {
    name: "home",
    layout: "/",
    children: [
      {
        name: "Home",
        path: "/",
        element: <Home />,
      },
      {
        name: "Games",
        path: "/games",
        element: <Games />,
      },
      {
        name: "About us",
        path: "/about",
        element: <About />,
      },
      {
        name: "Contact us",
        path: "/contact",
        element: <ContactUs />,
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
