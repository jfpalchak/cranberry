import { Link } from "react-router-dom";

export default function Header(props: HeaderProps) {
  const { loggedIn } = props;

  return (
    <header>
      <div className="logo">
        <Link to="/">
          Cranberry
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            {!loggedIn 
            ? (<Link to="/sign-in">Sign In</Link>) 
            : (<Link to="/account">Account</Link>)}
          </li>
        </ul>
      </nav>
    </header>
  );
}

type HeaderProps = {
  loggedIn: boolean;
}