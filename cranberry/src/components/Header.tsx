import { Link } from "react-router-dom";

export default function Header({ loggedIn }: HeaderProps) {

  return (
    <header>
      <div className="logo">
        <Link to={!loggedIn ? "/" : "/dashboard/profile"}>
          Cran<span style={ { color: "rgb(240, 88, 88)" } }>berry</span>
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