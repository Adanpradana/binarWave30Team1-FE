import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/landingpage/Home";
import { getRoutes } from "../config/getRoutes";
import Navbar from "../components/Navbar/Navbar.js";

export default function LandingpageLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to={"/"} />} />{" "}
      </Routes>
    </>
  );
}
