import { useState, useEffect } from 'react';
import { calculateElapsedDays } from '../helpers/calculations-helper';
import type { IUser } from "../types";

const AVG_MINUTES_PER_CIG = 5;
const AVG_HOURS_PER_DAY_BACK_SANS_SMOKE = 6;

function useProgressCalculations(userData: IUser) {

  const [userProgress, setUserProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    if(userData) {

      // Calculate the precise number of days that have passed since User quit.
      const elapsedDays = calculateElapsedDays(userData.quitDate);
      // Calculate the precise number of cigarettes the user would have otherwise smoked.
      const cigsAvoided = userData.avgSmokedDaily * elapsedDays;
      // Calculate the precise amount money each avoided cigarette would have otherwise cost the user.
      const moneySaved = (userData.pricePerPack / userData.cigsPerPack) * cigsAvoided;
      // Calculate the amount of time each avoided cigarette the user would have otherwise spent smoking.
      const timeSaved = cigsAvoided * AVG_MINUTES_PER_CIG;
      // Calculate the lifespan, in days, the user has gained back since quitting.
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