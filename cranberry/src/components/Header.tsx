import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        Cranberry
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/sign-in">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}