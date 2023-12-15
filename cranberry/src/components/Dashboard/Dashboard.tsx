import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import DashNav from "./DashNav";
import Profile from "./Profile";
import Health from './Health';
import Timeline from './Timeline';
import JournalControl from "./JournalControl";
import { IUser } from "../../types";
import { Route, Routes, Outlet, useOutletContext } from "react-router-dom";

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

  console.log("Dashboard rendered") // ! CONSOLE LOG

  return (
    <main className="main-dashboard">
      <DashNav logout={logout} />
      <Routes>
        <Route index path="/" element={<Profile user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/journals/*" element={<JournalControl user={user} />} />
        <Route path="/health" element={<Health />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </main>
  );
}
