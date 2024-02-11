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

  return (
    <div className={`sidebar ${ isMini ? "close" : "" }`}> {/* toggle "close" class to shrink */}
      <div className="dash-toggle" onClick={() => setIsMini(!isMini)}>
        <MenuIcon />
      </div>
      <nav className="dash-nav">
        <ul className="side-menu">
          <NavLink to="/dashboard/profile"><li><DashboardIcon/> &nbsp;&nbsp; Profile</li></NavLink>
          <NavLink to="/dashboard/health"><li><FavoriteBorderIcon/> &nbsp;&nbsp; Health</li></NavLink>
          <NavLink to="/dashboard/journals"><li><EditCalendarIcon/> &nbsp;&nbsp; Journals</li></NavLink>
          <NavLink to="/dashboard/timeline"><li><InsightsIcon/> &nbsp;&nbsp; Timeline</li></NavLink>
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