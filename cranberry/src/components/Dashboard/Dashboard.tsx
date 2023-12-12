import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import DashNav from "./DashNav";
import Profile from "./Profile";

export default function Dashboard() {

  const [user, setUser] = useState<IUser>({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await AuthService.getUserProfile()
        setStatus("Success");
        setUser(user.data)
        console.log(user);
      }
      catch (error) {
        setStatus("Error.")
        console.log(error);
      }
    }

    fetchProfile();

  }, [])

  return (
    <main className="main-dashboard">
      <DashNav />
      <Profile />
    </main>
  );
}

interface IUser {
  userId?: string;
  userName?: string;
  avgSmokedDaily?: number;
  cigsPerPack?: number;
  pricePerPack?: number;
  quitDate?: string;
}