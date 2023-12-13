import React from "react";
import { Link } from "react-router-dom";

export default function DashNav() {
  return (
    <div className="sidebar">
      <nav className="dash-nav">
        <ul>
          <li>
          <Link to="/dashboard">Profile</Link>
          </li>
          <li>
            Health
          </li>
          <li>
            <Link to="/dashboard/journals">Journals</Link>
          </li>
          <li>
            Timeline
          </li>
        </ul>

        <ul>
          <li>
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}