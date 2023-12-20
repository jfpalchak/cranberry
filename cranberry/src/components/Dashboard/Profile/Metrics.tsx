import { useProgressCalculations } from "../../../hooks";
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import RestoreIcon from '@mui/icons-material/Restore';
import { Tooltip } from "@mui/material";
import type { IUser } from "../../../types";

const moneyTrackerText = "This is calculated by multiplying the number of cigarettes you would have otherwise smoked by the cost of one cigarette per pack, according to your registration data.";

function Metrics({ user }: { user: IUser }) {

  const userProgress = useProgressCalculations(user);

  console.log("Metrics render")

  return (
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
  );
}

export default Metrics;