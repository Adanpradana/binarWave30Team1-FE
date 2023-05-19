import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import Sidebar from "../components/Sidebar";
<<<<<<< HEAD
// import Navbar from "../components/Navbar/Navbar.js";
=======
>>>>>>> e4be5faeb0baf9d667f2e9181fd68d477f3a83eb

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
        {getRoutes(routes, "/users")}
        <Route path="*" element={<Navigate to={"/users/dashboard"} />} />{" "}
      </Routes>
      <Outlet />
    </>
  );
}
