import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DashNav from "./DashNav";
import Profile from "./Profile/Profile";
import Health from './Health/Health';
import Timeline from './Timeline/Timeline';
import JournalControl from "./Journals/JournalControl";
import './Dashboard.css';
import { fetchUserJournals } from "../../store/journalsSlice";

export default function Dashboard() {

  const { userData, userId } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserJournals(userId));
  }, [userId, dispatch]);

  return (
    <main className="main-dashboard">
      <DashNav />
      {userData ? (
      <Routes>
        <Route index path="/*" element={<Profile user={userData} />} />
        <Route path="/journals/*" element={<JournalControl user={userData} />} />
        <Route path="/health" element={<Health user={userData} />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      ) : (
        <div className="dash-section">
          <h1>Loading... </h1>
        </div>
      )}
    </main>
  );
}
