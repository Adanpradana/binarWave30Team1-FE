import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { getRoutes } from "../config/getRoutes";
import Sidebar from "../components/Sidebar";
import { ToastContainer } from "react-toastify";
import Score from "../pages/dashboard/score/Score";
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
      <ToastContainer />
      <Routes>
        {getRoutes(routes, "/users")}
        <Route path="*" element={<Navigate to={"/users/dashboard"} />} />{" "}
      </Routes>
    </>
  );
}
