import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import JournalService from "../../services/journal.service";
import DashNav from "./DashNav";
import Profile from "./Profile";
import Health from './Health';
import Timeline from './Timeline';
import JournalControl from "./JournalControl";
import { Route, Routes, Outlet, useOutletContext } from "react-router-dom";
import type { IUser, IJournal } from "../../types";
import compareDesc from 'date-fns/compareDesc';

export default function Dashboard({ logout, user }: { logout: () => void, user: IUser }) {

  // const [user, setUser] = useState<IUser | null>(null);
  // const [status, setStatus] = useState("");
  // const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const user = await AuthService.getUserProfile()
  //       setStatus("Success");
  //       setUser(user.data)
  //       console.log("Fetched user: ", user);
  //     }
  //     catch (error) {
  //       setStatus("Error.")
  //       console.log("Error fetching user info: ", error);
  //     }
  //   }

  //   fetchProfile();

  // }, [])

  const [userJournals, setUserJournals] = useState<IJournal[]>([]);

  // fetch user's journals
  useEffect(() => {
    const fetchJournals = async () => {
      JournalService.getUserJournals(user.userId!)
        .then((response) => {
          console.log("Fetch Journals success", response.data);
          const journals = response.data.data
            .sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date) , new Date(b.date)));
          setUserJournals(journals);
        })
        .catch((error) => {
          console.log("Fetch Journals error: ", error);
        })
    };
    fetchJournals();
  }, []);

  console.log("Dashboard rendered") // ! CONSOLE LOG

  return (
    <main className="main-dashboard">
      <DashNav logout={logout} />
      <Routes>
        <Route index path="/" element={<Profile user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/journals/*" element={
          <JournalControl 
            userJournals={userJournals} 
            setUserJournals={setUserJournals} 
            user={user} 
          />} 
        />
        <Route path="/health" element={<Health user={user} />} />
        <Route path="/timeline" element={<Timeline userJournals={userJournals} />} />
      </Routes>
    </main>
  );
}
