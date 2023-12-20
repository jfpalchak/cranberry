import ElapsedTime from "./ElapsedTime";
import useProgressCalculations from "../../../hooks/useDataCalculations";
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import RestoreIcon from '@mui/icons-material/Restore';
import { Tooltip } from "@mui/material";
import type { IUser } from "../../../types";
import './Profile.css';

import { healthBenefitsOverTime } from '../../../data/health-benefits';
import differenceInMinutes from 'date-fns/differenceInMinutes';



const moneyTrackerText = "This is calculated by multiplying the number of cigarettes you would have otherwise smoked by the cost of one cigarette per pack, according to your registration data.";

export default function Profile({ user }: ProfileProps) {
  
  const userProgress = useProgressCalculations(user);

  const totalHealthBenefitsAchieved = healthBenefitsOverTime.reduce((value, benefit) => {
    const userHours = (differenceInMinutes(new Date(), new Date(user.quitDate)) / 60);
    const benefitAchieved = (userHours / benefit.time) >= 1;
    return benefitAchieved ? value + 1 : value + 0;
  }, 0);

  const healthPercentageAchieved = totalHealthBenefitsAchieved / healthBenefitsOverTime.length;

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
          <div className="milestones">
            Milestones

          </div>
        </div>

        <div className="profile-col">
          <div className="tip">
            Tip of the Day
          </div>
          <div className="health-progress">
            Health Progress
          </div>
        </div>

      </div>
    </section>
  );
}

type ProfileProps = {
  user: IUser;
}