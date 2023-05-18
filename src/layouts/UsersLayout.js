import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import Home from "../pages/landingpage/Home";
import Navbar from "../components/Navbar";

export default function UsersLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/users" element={<Home />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to={"/users"} />} />{" "}
      </Routes>
    </>
  );  
}
