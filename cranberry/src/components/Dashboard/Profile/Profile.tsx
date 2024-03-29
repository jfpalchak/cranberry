import { useState } from "react";
import DialogResources from "./DialogResources";
import HealthProgress from "./HealthProgress";
import ElapsedTime from "./ElapsedTime";
import Asides from "./Asides";
import Metrics from './Metrics';
import type { IUser } from "../../../types";
import './Profile.css';


function Profile({ user }: { user: IUser }) {
  
  const [supportOpen, setSupportOpen] = useState(false);

  const handleOpenSupport = () => {
    setSupportOpen(true);
  };

  const handleCloseSupport = () => {
    setSupportOpen(false);
  };

  return (
    <section className="user-profile dash-section">

      <div className="section-header">
        <h1>Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-col">

          <ElapsedTime userQuitDate={user.quitDate} />
          <Metrics user={user} />
          <HealthProgress userQuitDate={user.quitDate} />

        </div>

        <Asides handleOpenSupport={handleOpenSupport} />

      </div>

      <DialogResources 
        isOpen={supportOpen} 
        handleClosing={handleCloseSupport}
      />

    </section>
  );
}

export default Profile;