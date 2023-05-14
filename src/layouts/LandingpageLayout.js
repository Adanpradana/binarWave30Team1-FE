import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { Navbar } from "react-bootstrap";
import Home from "../pages/landingpage/Home";
import Register from "../pages/auth/Register";
import { getRoutes } from "../config/getRoutes";

export default function LandingpageLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
      <Navbar>hello navbar</Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to={"/"} />} />{" "}
      </Routes>
    </>
  );
}
