import { useState } from 'react';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


function Asides(props: AsidesProps) {
  
  const { handleShowResources } = props;

  return (
    <div className="profile-col aside">
      <div className="tip side-tracker">
        <div className="side-tracker-card">
          <div className="side-tracker-header tips">
            <TipsAndUpdatesIcon />
          </div>
          <div className="side-tracker-content">
            <h4>Stay Strong</h4>
            <p>Remember your reasons for quitting!</p>
          </div>
        </div>
      </div>
      <div className="side-tracker" onClick={() => handleShowResources(true)}>
        <div className="side-tracker-card">
          <div className="side-tracker-header resources">
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

type AsidesProps = {
  handleShowResources: (x: boolean) => void;
}

export default Asides;