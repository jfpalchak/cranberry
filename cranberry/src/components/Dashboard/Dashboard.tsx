import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import DashNav from "./DashNav";
import Profile from "./Profile";
import { IUser } from "../../types";
import { Route } from "react-router-dom";

export default function Dashboard() {

  const [user, setUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await AuthService.getUserProfile()
        setStatus("Success");
        setUser(user.data)
        console.log("Fetched user: ", user); // ! CONSOLE LOG
      }
      catch (error) {
        setStatus("Error.")
        console.log("Error fetching user info: ", error); // ! CONSOLE LOG
      }
    }

    fetchProfile();

  }, [])

  console.log("Dashboard rendered") // ! CONSOLE LOG

  // TODO: possibly use Routes to render between Profile / Journals / Health / etc
  return (
    <main className="main-dashboard">
      <DashNav />
      { user 
        ? <Profile user={user}/>
        : <p>Loading...</p>}
    </main>
  );
}