import { useNavigate } from "react-router-dom";
import ElapsedTime from "./ElapsedTime";
import useHealthBenefits from "../../../hooks/useHealthBenefits";
import useProgressCalculations from "../../../hooks/useDataCalculations";
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import RestoreIcon from '@mui/icons-material/Restore';
import { LinearProgress } from '@mui/material';
import { Tooltip } from "@mui/material";
import type { IUser } from "../../../types";
import './Profile.css';

const moneyTrackerText = "This is calculated by multiplying the number of cigarettes you would have otherwise smoked by the cost of one cigarette per pack, according to your registration data.";

export default function Profile({ user }: ProfileProps) {
  
  const userProgress = useProgressCalculations(user);
  const navigate = useNavigate();

  const { 
    totalHealthBenefitsAchieved, 
    totalHealthPercentAchieved, 
    totalHealthBenefits 
  } = useHealthBenefits(user.quitDate as string);

  console.log("Profile render")

  return (
    <section className="user-profile dash-section">
      <div className="section-header">
        <h1>Profile</h1>
      </div>

      <div className="profile-content">

        <div className="profile-col">

          <ElapsedTime quitDate={user.quitDate} />

          <div className="progress-trackers">
          <Tooltip title={moneyTrackerText} >
            <div className="money-tracker tracker">
              <AttachMoneyIcon />
              <div className="info">
                <h3>{userProgress?.moneySaved.toFixed(2)}</h3>
                <p>money saved</p>
              </div>
            </div>
            </Tooltip>
            <div className="avoided-tracker tracker">
              <SmokeFreeIcon />
              <div className="info">
                <h3>{userProgress?.cigsAvoided.toFixed()}</h3>
                <p>cigarettes avoided</p>
              </div>
            </div>
            <div className="time-gained-tracker tracker">
              <MoreTimeIcon />
              <div className="info">
                <h3>{(userProgress?.timeSaved! / 60).toFixed(2)}</h3>
                <p>time saved (hours)</p>
              </div>
            </div>
            <div className="life-regained-tracker tracker">
              <RestoreIcon />
              <div className="info">
                <h3>{(userProgress?.timeGained! / 24).toFixed(2)}</h3>
                <p>time gained (days)</p>
              </div>
            </div>
          </div>
          <div className="health-milestones">
            <div className="milestone-info">
              <h3>Health Progress</h3>
              <p><MonitorHeartOutlinedIcon/> {totalHealthBenefitsAchieved} / {totalHealthBenefits}</p>
            </div>
            <LinearProgress 
              className='progress-bar'
              variant='determinate'
              value={totalHealthPercentAchieved}
              color='error'
            />
            <button className="btn alternate-btn milestone-btn" onClick={() => navigate('/dashboard/health')}>See More</button>
          </div>
        </div>

        <div className="profile-col aside">
          <div className="tip side-tracker">
            <div className="side-tracker-header">
              <TipsAndUpdatesIcon />
              <h3>Tip of the Day</h3>
            </div>
            <div className="side-tracker-content">
              <h4>Stay Strong</h4>
              <p>Remember your reasons for quitting!</p>
            </div>
          </div>
          <div className="side-tracker">
            Resources
          </div>
        </div>

      </div>
    </section>
  );
}

type ProfileProps = {
  user: IUser;
}