import React from "react";
import { NavLink } from "react-router-dom";

export default function DashNav() {
  return (
    <div className="sidebar">
      <nav className="dash-nav">
        <ul className="side-menu">
          {/* <li> */}
            <NavLink to="/dashboard/profile"><li>Profile</li></NavLink>
          {/* </li> */}
          {/* <li> */}
            <NavLink to="/dashboard/health"><li>Health</li></NavLink>
          {/* </li> */}
          {/* <li> */}
            <NavLink to="/dashboard/journals"><li>Journals</li></NavLink>
          {/* </li> */}
          {/* <li> */}
            <NavLink to="/dashboard/timeline"><li>Timeline</li></NavLink>
          {/* </li> */}
        </ul>

        <ul className="side-menu">
          <li>
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}