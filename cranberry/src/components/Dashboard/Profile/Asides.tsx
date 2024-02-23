import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import type { ComponentPropsWithoutRef } from "react";
import type { IconType } from '../../../types';
import { useDailyReminders } from '../../../hooks';

interface AsidesProps {
  handleOpenSupport: () => void;
}

interface SideCardProps extends ComponentPropsWithoutRef<'div'>{
  header: string;
  text: string;
  Icon: IconType;
}

function SideCard(props: SideCardProps) {
  const { header, text, Icon, ...rest} = props;

  return (
    <div {...rest}>
      <div className="side-tracker-card">
        <div className="side-tracker-header">
          <Icon />
        </div>
        <div className="side-tracker-content">
          <h4>{header}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

function Asides(props: AsidesProps) {
  const { handleOpenSupport } = props;

  const reminder = useDailyReminders();

  return (
    <div className="profile-col aside">
      <SideCard 
        className="tips side-tracker"
        header={reminder.header}
        text={reminder.text}
        Icon={TipsAndUpdatesIcon}
      />
      <SideCard
        className="resources side-tracker"
        header="Support"
        text="Feeling strong urges? Check out these free resources."
        Icon={ContactSupportIcon}
        onClick={handleOpenSupport}
      />
    </div>
  );
}

export default Asides;