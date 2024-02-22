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

interface MetricsProps {
  user: IUser;
}

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

function Metrics({ user }: MetricsProps) {

  const { moneySaved, cigsAvoided, timeSaved, timeGained } = useProgressCalculations(user);

  const data = [
    {
      tracker: 'money',
      Icon: AttachMoneyIcon,
      metric: { data: moneySaved.toFixed(2), text: 'money saved' },
      tooltip: { info: moneyText, id: 'money' },
    },
    {
      tracker: 'avoided',
      Icon: SmokeFreeIcon,
      metric: { data: cigsAvoided.toFixed(), text: 'cigarettes avoided' },
      tooltip: { info: avoidedText, id: 'avoided' },
    },
    {
      tracker: 'time-gained',
      Icon: MoreTimeIcon,
      metric: { data: (timeSaved / 60).toFixed(2), text: 'time saved (hours)' },
      tooltip: { info: timeText, id: 'time' },
    },
    {
      tracker: 'life-regained',
      Icon: RestoreIcon,
      metric: { data: (timeGained / 24).toFixed(2), text: 'time gained (days)' },
      tooltip: { info: lifeText, id: 'life' },
    },
  ];

  return (
    <div className="progress-trackers">

      {data.map((item) => (
        <MetricCard
          key={item.tooltip.id}
          tracker={item.tracker}
          Icon={item.Icon}
          metric={item.metric}
          tooltip={item.tooltip}
        />
      ))}

    </div>
  );
}

export default Metrics;