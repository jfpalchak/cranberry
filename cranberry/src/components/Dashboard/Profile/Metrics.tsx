import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import RestoreIcon from '@mui/icons-material/Restore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from "@mui/material";
import type { IUser } from "../../../types";
import { useProgressCalculations } from "../../../hooks";
import { 
  moneyText, 
  avoidedText, 
  lifeText, 
  timeText } from "../../../data/metrics-text";


function Metrics({ user }: { user: IUser }) {

  const userProgress = useProgressCalculations(user);

  return (
    <div className="progress-trackers">

      <div className="money-tracker tracker">
        <AttachMoneyIcon className="tracker-icon" />
        <div className="info">
          <h3>{userProgress?.moneySaved.toFixed(2)}</h3>
          <p>money saved</p>
        </div>
        <Tooltip title={moneyText} placement="top-start" >
          <HelpOutlineIcon id="money-question" />
        </Tooltip>
      </div>

      <div className="avoided-tracker tracker">
        <SmokeFreeIcon />
        <div className="info">
          <h3>{userProgress?.cigsAvoided.toFixed()}</h3>
          <p>cigarettes avoided</p>
        </div>
        <Tooltip title={avoidedText} placement="top-start" >
          <HelpOutlineIcon id="avoided-question" />
        </Tooltip>
      </div>

      <div className="time-gained-tracker tracker">
        <MoreTimeIcon />
        <div className="info">
          <h3>{(userProgress?.timeSaved! / 60).toFixed(2)}</h3>
          <p>time saved (hours)</p>
        </div>
        <Tooltip title={timeText} placement="top-start" >
          <HelpOutlineIcon id="time-question" />
        </Tooltip>
      </div>

      <div className="life-regained-tracker tracker">
        <RestoreIcon />
        <div className="info">
          <h3>{(userProgress?.timeGained! / 24).toFixed(2)}</h3>
          <p>time gained (days)</p>
        </div>
        <Tooltip title={lifeText} placement="top-start" >
          <HelpOutlineIcon id="life-question" />
        </Tooltip>
      </div>

    </div>
  );
}

export default Metrics;