import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useDarkMode } from "../hooks";

import lightBerry from './../assets/img/berry1.png';
import darkBerry from './../assets/img/berry2.png';

type HeaderProps = {
  loggedIn: boolean;
}

export default function Header({ loggedIn }: HeaderProps) {

  const { theme, setTheme } = useDarkMode();

  return (
    <header>
      <div className="logo">
        <Link to={!loggedIn ? "/" : "/dashboard/profile"}>
          <img src={loggedIn && theme === 'dark' ? darkBerry : lightBerry} alt="Cranberry Logo" />
          <span style={ { color: "rgb(240, 88, 88)" } }>Cranberry</span>
        </Link>
      </div>
      <nav className="header-nav">
        {!loggedIn &&
          <ul>
            <li>
              <Link to="/sign-in">
                <button className="auth-btn">Sign In</button>
              </Link>
            </li>
          </ul>
        }
        {loggedIn &&
          <ul>
            <li>
              <div className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light'
                  ? <DarkModeIcon />
                  : <LightModeIcon />
                }
              </div>
            </li>
            <li>
              <Link to="/account"><AccountCircleIcon /></Link>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
}
