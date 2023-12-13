import React, { useState, useEffect } from 'react';
import { ElapsedTime, IUser } from "../types";


export default function useDataCalculations(userData: IUser) {

  const [userProgress, setUserProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    if(userData) {

      console.log("useEffect on Calculate Data") // ! CONSOLE LOG
      const elapsedDays = calculateElapsedDays(userData.quitDate!);
      const cigsAvoided = calcCigsAvoided(userData.avgSmokedDaily!, elapsedDays);
      const moneySaved = calcMoneySaved(cigsAvoided, userData.pricePerPack!, userData.cigsPerPack!);
      const timeSaved = calcTimeSaved(cigsAvoided);

      setUserProgress({
        cigsAvoided,
        moneySaved,
        timeSaved
        // TIME GAINED BACK?
      });      
    }
  }, [userData]);

  console.log("Called useDataCalculations") // ! CONSOLE LOG

  const calculateElapsedDays = (startDate: Date | string) => {
    startDate = (typeof startDate === 'string' ? new Date(startDate) : startDate);
    const currentTime = new Date();
    // get difference in seconds between now and given date
    const difference = Math.floor((currentTime.getTime() - startDate.getTime()) / 1000);

    const daysSince = (difference / (24 * 60 * 60));

    return daysSince;
  };

  const calcCigsAvoided = (cigsPerDay: number, elapsedDays: number) => {
    return (cigsPerDay * elapsedDays);
  }
  
  const calcMoneySaved = (cigsAvoided: number, pricePerPack: number, cigsPerPack: number) => {
    const costPerCig = pricePerPack / cigsPerPack
    return (cigsAvoided * costPerCig);
  }

  const calcTimeSaved = (cigsAvoided: number) => {
    const AVG_MINUTES_PER_CIG = 5;
    const minutesSaved = (cigsAvoided * AVG_MINUTES_PER_CIG);
    return (cigsAvoided * AVG_MINUTES_PER_CIG);
  }

  return userProgress;
}

interface ProgressData {
  cigsAvoided: number;
  moneySaved: number;
  timeSaved: Minutes;
}

type Minutes = number;