import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";

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
    <main>
      <h1>Dashboard</h1>
      {status}
      <h2>User: {user.userName}</h2>
      <h2>Average Smoked: {user.avgSmokedDaily}</h2>
      <h2># Cigs per Pack: {user.cigsPerPack}</h2>
      <h2>$ per Pack: {user.pricePerPack}</h2>
      <h2>Quite Date: {user.quitDate}</h2>
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