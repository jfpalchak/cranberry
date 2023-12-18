import { useState, useEffect } from 'react';
import { calculateElapsedDays } from '../helpers/calculations-helper';
import type { IUser } from "../types";

const AVG_MINUTES_PER_CIG = 5;

// Calculates the following information...
function useProgressCalculations(userData: IUser) {

  const [userProgress, setUserProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    if(userData) {

      const elapsedDays = calculateElapsedDays(userData.quitDate);
      const cigsAvoided = userData.avgSmokedDaily * elapsedDays;
      const moneySaved = (userData.pricePerPack / userData.cigsPerPack) * cigsAvoided;
      const timeSaved = cigsAvoided * AVG_MINUTES_PER_CIG;

      setUserProgress({
        cigsAvoided,
        moneySaved,
        timeSaved
        // FUTURE STATS HERE
      });      
    }
  }, [userData]);

  return userProgress;
}

interface ProgressData {
  cigsAvoided: number;
  moneySaved: number;
  timeSaved: Minutes;
}

type Minutes = number;

export default useProgressCalculations;