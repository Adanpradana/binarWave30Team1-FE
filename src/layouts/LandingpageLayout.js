import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import GameDetail from "../pages/landingpage/Games/GameDetail";
import Navbar1 from "../components/Navbar/Navbar.js";

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
        <Route path="/games/details/:id" element={<GameDetail />} />
        <Route path="*" element={<Navigate to={"/"} />} />{" "}
      </Routes>
    </>
  );
}
