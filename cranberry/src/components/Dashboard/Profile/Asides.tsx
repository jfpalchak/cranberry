import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useDailyReminders } from '../../../hooks';

type AsidesProps = {
  handleOpenSupport: () => void;
};

function Asides(props: AsidesProps) {

  const { handleOpenSupport } = props;

  const reminder = useDailyReminders();

  return (
    <div className="profile-col aside">
      <div className="tips side-tracker">
        <div className="side-tracker-card">
          <div className="side-tracker-header">
            <TipsAndUpdatesIcon />
          </div>
          <div className="side-tracker-content">
            <h4>{reminder.header}</h4>
            <p>{reminder.text}</p>
          </div>
        </div>
      </div>
      <div className="resources side-tracker" onClick={handleOpenSupport}>
        <div className="side-tracker-card">
          <div className="side-tracker-header">
            <ContactSupportIcon />
          </div>
          <div className="side-tracker-content">
            <h4>Support</h4>
            <p>Feeling strong urges? Check out these free resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asides;