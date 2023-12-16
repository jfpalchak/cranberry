import React, { useState, useEffect } from 'react';
import { calculateElapsedDays } from '../util/time-calculation';
import type { IUser } from "../types";

// Calculates the following information...
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


  // TODO: Refactor out of using these functions to shorten our hook down a bit.

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