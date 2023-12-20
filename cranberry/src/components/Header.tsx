import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header({ loggedIn }: HeaderProps) {

  return (
    <header>
      <div className="logo">
        <Link to={!loggedIn ? "/" : "/dashboard/profile"}>
          <span style={ { color: "rgb(240, 88, 88)" } }>Cranberry</span>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            {!loggedIn 
              ? (<Link to="/sign-in">Sign In</Link>) 
              : (<Link to="/account"><AccountCircleIcon /></Link>)
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

type HeaderProps = {
  loggedIn: boolean;
}