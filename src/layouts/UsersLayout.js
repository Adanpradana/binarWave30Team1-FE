import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import Dashboard from "../pages/dashboard";
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar/Navbar.js";

export default function UsersLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/users" element={<Dashboard />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to={"/users/dashboard"} />} />{" "}
      </Routes>
    </>
  );  
}
