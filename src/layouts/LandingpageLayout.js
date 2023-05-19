import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import Navbar1 from "../components/Navbar/Navbar.js";
import Login from "../pages/auth/Login";
import Home from "../pages/landingpage/Home";
import About from "../pages/landingpage/About";

export default function LandingpageLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
      <Navbar1 />
      <Routes>
        {getRoutes(routes, "/")}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Navigate to={"/"} />} />{" "}
      </Routes>
    </>
  );
}
