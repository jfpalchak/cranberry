import { useState, useEffect } from 'react';
import { calculateElapsedDays } from '../helpers/calculations-helper';
import type { IUser } from "../types";

const AVG_MINUTES_PER_CIG = 5;
const AVG_HOURS_PER_DAY_BACK_SANS_SMOKE = 6;

// Calculates the following information...
function useProgressCalculations(userData: IUser) {

  const [userProgress, setUserProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    if(userData) {

      const elapsedDays = calculateElapsedDays(userData.quitDate);
      const cigsAvoided = userData.avgSmokedDaily * elapsedDays;
      const moneySaved = (userData.pricePerPack / userData.cigsPerPack) * cigsAvoided;
      const timeSaved = cigsAvoided * AVG_MINUTES_PER_CIG;
      const timeGained = elapsedDays * AVG_HOURS_PER_DAY_BACK_SANS_SMOKE;

      setUserProgress({
        cigsAvoided,
        moneySaved,
        timeSaved,
        timeGained
        // STATS HERE
      });      
    }
  }, [userData]);

  return userProgress;
}

interface ProgressData {
  cigsAvoided: number;
  moneySaved: number;
  timeSaved: Minutes;
  timeGained: Hours;
}

type Minutes = number;
type Hours = number;

export default useProgressCalculations;