import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import RestoreIcon from '@mui/icons-material/Restore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from "@mui/material";
import { SvgIcon } from '@mui/material';
import type { IUser } from "../../../types";
import { useProgressCalculations } from "../../../hooks";
import { 
  moneyText, 
  avoidedText, 
  lifeText, 
  timeText } from "../../../data/metrics-text";

interface MetricCardProps {
  tracker: string;
  Icon: typeof SvgIcon;
  metric: {
    data: string | undefined;
    text: string;
  }
  tooltip: {
    info: string;
    id: string;
  }
}

function MetricCard(props: MetricCardProps) {
  const { metric, tooltip, tracker, Icon } = props;

  return (
    <div className={`${tracker}-tracker tracker`}>
      <Icon />
      <div className="info">
        <h3>{metric.data}</h3>
        <p>{metric.text}</p>
      </div>
      <Tooltip title={tooltip.info} placement="top-start" >
        <HelpOutlineIcon id={`${tooltip.id}-question`} />
      </Tooltip>
    </div>
  );
}

function Metrics({ user }: { user: IUser }) {

  const userProgress = useProgressCalculations(user);

  return (
    <div className="progress-trackers">

      <MetricCard 
        tracker={"money"}
        Icon={AttachMoneyIcon}
        metric={ { data: userProgress?.moneySaved.toFixed(2), text: 'money saved' } }
        tooltip={ { info: moneyText, id: 'money' } }
      />

      <MetricCard 
        tracker={"avoided"}
        Icon={SmokeFreeIcon}
        metric={ { data: userProgress?.cigsAvoided.toFixed(), text: 'cigarettes avoided' } }
        tooltip={ { info: avoidedText, id: 'avoided' } }
      />

      <MetricCard 
        tracker={"time-gained"}
        Icon={MoreTimeIcon}
        metric={ { data: (userProgress?.timeSaved! / 60).toFixed(2), text: 'time saved (hours)' } }
        tooltip={ { info: timeText, id: 'time' } }
      />

      <MetricCard 
        tracker={"life-regained"}
        Icon={RestoreIcon}
        metric={ { data: (userProgress?.timeGained! / 24).toFixed(2), text: 'time gained (days)' } }
        tooltip={ { info: lifeText, id: 'life' } }
      />

    </div>
  );
}

export default Metrics;