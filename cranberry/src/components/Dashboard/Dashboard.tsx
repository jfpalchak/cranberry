import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import compareDesc from 'date-fns/compareDesc';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DashNav from "./DashNav";
import Profile from "./Profile/Profile";
import Health from './Health/Health';
import Timeline from './Timeline/Timeline';
import JournalControl from "./Journals/JournalControl";
import JournalService from "../../services/journal.service";
import type { IJournal } from "../../types";
import './Dashboard.css';
import { setUserJournals, fetchUserJournals } from "../../store/journalsSlice";

export default function Dashboard() {

  const { userData, userId } = useAppSelector(state => state.auth);
  const userJournals = useAppSelector(state => state.journals.userJournals);
  const dispatch = useAppDispatch();

  // const [userJournals, setUserJournals] = useState<IJournal[]>([]);

  useEffect(() => {
    dispatch(fetchUserJournals(userId));
    // const fetchJournals = async () => {
    //   JournalService.getUserJournals(userId)
    //     .then((response) => {
    //       const journals = response.data.data
    //         .sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date) , new Date(b.date)));
    //       dispatch(setUserJournals(journals));
    //     })
    //     .catch((error) => {
    //     })
    // };
    // fetchJournals();
  }, [userId]);
  console.log(userJournals);

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
