import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import InsightsIcon from '@mui/icons-material/Insights';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from "../../store/hooks";
import { signOut } from "../../store/authActions";

export default function DashNav() {

  const [isMini, setIsMini] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/");
    window.location.reload();
  }

  const links = [
    { path: '/profile', label: 'Profile', Icon: DashboardIcon },
    { path: '/health', label: 'Health', Icon: FavoriteBorderIcon },
    { path: '/journals', label: 'Journals', Icon: EditCalendarIcon },
    { path: '/timeline', label: 'Profile', Icon: InsightsIcon },
  ]

  return (
    <div className={`sidebar ${ isMini ? "close" : "" }`}> {/* toggle "close" class to shrink */}
      <div className="dash-toggle" onClick={() => setIsMini(!isMini)}>
        <MenuIcon />
      </div>
      <nav className="dash-nav">
        <ul className="side-menu">
          {links.map((link) => (
            <NavLink to={`/dashboard/${link.path}`}><li><link.Icon/> &nbsp;&nbsp; {link.label}</li></NavLink>
          ))}
        </ul>
        <ul className="side-menu logout-nav">
          <li onClick={handleLogOut}>
            <span className="logout-red" ><LogoutIcon /></span> &nbsp;&nbsp; Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}
