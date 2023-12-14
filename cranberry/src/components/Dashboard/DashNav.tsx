import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function DashNav({ logout }: { logout: () => void }) {

  const navigate = useNavigate();

  const handleLogOut = () => {
    AuthService.signout();
    logout();
    navigate("/");
  }

  return (
    <div className="sidebar">
      <nav className="dash-nav">
        <ul className="side-menu">
          <NavLink to="/dashboard/profile"><li>Profile</li></NavLink>
          <NavLink to="/dashboard/health"><li>Health</li></NavLink>
          <NavLink to="/dashboard/journals"><li>Journals</li></NavLink>
          <NavLink to="/dashboard/timeline"><li>Timeline</li></NavLink>
        </ul>

        <ul className="side-menu">
          <li onClick={handleLogOut}>
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}