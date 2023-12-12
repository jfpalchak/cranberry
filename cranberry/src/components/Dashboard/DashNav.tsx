import React from "react";

export default function DashNav() {
  return (
    <div className="sidebar">
      <nav className="dash-nav">
        <ul>
          <li>
            Progress
          </li>
          <li>
            Health
          </li>
          <li>
            Journals
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