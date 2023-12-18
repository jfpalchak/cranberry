import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import compareDesc from 'date-fns/compareDesc';
import { useAppSelector } from "../../store/hooks";
import DashNav from "./DashNav";
import Profile from "./Profile/Profile";
import Health from './Health/Health';
import Timeline from './Timeline/Timeline';
import JournalControl from "./Journals/JournalControl";
import JournalService from "../../services/journal.service";
import type { IJournal } from "../../types";
import './Dashboard.css';

export default function Dashboard() {

  const { userData, userId } = useAppSelector(state => state.auth);

  const [userJournals, setUserJournals] = useState<IJournal[]>([]);

  useEffect(() => {
    const fetchJournals = async () => {
      JournalService.getUserJournals(userId)
        .then((response) => {
          console.log("Fetch Journals success", response.data); // ! CONSOLE LOG
          const journals = response.data.data
            .sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date) , new Date(b.date)));
          setUserJournals(journals);
        })
        .catch((error) => {
          console.log("Fetch Journals error: ", error); // ! CONSOLE LOG
        })
    };
    fetchJournals();
  }, [userId]);

  return (
    <main className="main-dashboard">
      <DashNav />
      {userData ? (
      <Routes>
        <Route index path="/*" element={<Profile user={userData} />} />
        <Route path="/journals/*" element={
          <JournalControl 
            userJournals={userJournals} 
            setUserJournals={setUserJournals} 
            user={userData} 
          />} 
        />
        <Route path="/health" element={<Health user={userData} />} />
        <Route path="/timeline" element={<Timeline userJournals={userJournals} />} />
      </Routes>
      ) : (
        <div className="dash-section">
          <h1>Loading... </h1>
        </div>
      )}
    </main>
  );
}
