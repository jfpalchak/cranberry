import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import JournalService from "../../services/journal.service";
import DashNav from "./DashNav";
import Profile from "./Profile/Profile";
import Health from './Health/Health';
import Timeline from './Timeline/Timeline';
import JournalControl from "./Journals/JournalControl";
import { Route, Routes, Outlet, useOutletContext } from "react-router-dom";
import type { IUser, IJournal } from "../../types";
import compareDesc from 'date-fns/compareDesc';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function Dashboard() {

  const { userData, userId } = useAppSelector(state => state.auth);

  const [userJournals, setUserJournals] = useState<IJournal[]>([]);


  console.log("User Id: ", userId);
  console.log("User Data: ", userData)
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
  }, []);

  return (
    <main className="main-dashboard">
      <DashNav />
      {userData ? (
      <Routes>
        <Route index path="/" element={<Profile user={userData} />} />
        <Route path="/profile" element={<Profile user={userData} />} />
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
        <p>Loading.. </p>
      )}
    </main>
  );
}
