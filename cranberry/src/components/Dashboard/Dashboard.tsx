import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import DashNav from "./DashNav";
import Profile from "./Profile";
import JournalControl from "./JournalControl";
import { IUser } from "../../types";
import { Route, Routes, Outlet, useOutletContext } from "react-router-dom";

export default function Dashboard() {

  // const [user, setUser] = useState<IUser | null>(null);
  // const [status, setStatus] = useState("");
  // const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const user = await AuthService.getUserProfile()
  //       setStatus("Success");
  //       setUser(user.data)
  //       console.log("Fetched user: ", user); // ! CONSOLE LOG
  //     }
  //     catch (error) {
  //       setStatus("Error.")
  //       console.log("Error fetching user info: ", error); // ! CONSOLE LOG
  //     }
  //   }

  //   fetchProfile();

  // }, [])

  console.log("Dashboard rendered") // ! CONSOLE LOG

  return (
    <main className="main-dashboard">
      <DashNav />
      <Outlet />
      {/* <Routes>
        <Route index element={user ? <Profile user={user} /> : <p> Loading... </p> } />
        <Route path="dashboard/journals" element={<JournalControl />} />
      </Routes> */}
    </main>
  );
}
