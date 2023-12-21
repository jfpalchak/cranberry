import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import berry from './../img/berry1.png';
import berry2 from './../img/berry2.jpg';
import can from './../img/canberries.png';

export default function Header({ loggedIn }: HeaderProps) {

  return (
    <header>
      <div className="logo">
        <Link to={!loggedIn ? "/" : "/dashboard/profile"}>
          <img src={berry} alt="Cranberry Logo" />
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