import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
<<<<<<< HEAD
import Home from "../pages/landingpage/Home";
import Navbar from "../components/Navbar";
=======
import Dashboard from "../pages/dashboard";
import Sidebar from "../components/Sidebar";
>>>>>>> dev

export default function UsersLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
<<<<<<< HEAD
        <Navbar />
=======
      <Sidebar />
>>>>>>> dev
      <Routes>
        <Route path="/users" element={<Dashboard />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to={"/users/dashboard"} />} />{" "}
      </Routes>
    </>
  );  
}
