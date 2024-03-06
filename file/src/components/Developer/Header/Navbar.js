import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-between items-center h-20 text-white font-medium text-xl bg-blue-500">
      <h2 className="m-14">Developer Page</h2>
      <div className="flex justify-end gap-8 m-8 ">
        <Link
          to="/DevTasks"
          className={`${
            location.pathname === "/DevTasks"
              ? "border-b-2 pb-3 border-white hover:text-emerald-300"
              : "hover:text-emerald-300"
          }`}
        >
          Tasks
        </Link>
        <Link
          to="/DevTasks"
          className={`${
            location.pathname === "/Profile"
              ? "border-b-2 pb-3 border-white hover:text-emerald-300"
              : "hover:text-emerald-300"
          }`}
        >
          Profile
        </Link>
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "border-b-2 pb-3 border-white hover:text-emerald-300"
              : "hover:text-emerald-300"
          }`}
        >
          <LogoutIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
