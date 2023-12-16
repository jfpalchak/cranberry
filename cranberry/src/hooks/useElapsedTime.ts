import React, { useState, useEffect } from 'react';
import { calculateElapsedTime } from '../util/time-calculation';
import type { IElapsedTime } from '../types';

// Every second, calculate the amount of time that has passed
// since the User's given quitDate. Depends on the user.quitDate.
// Returns an ElapsedTime object containing the number of days passed,
// as well as a count for hours, minutes, and seconds until the next 24 hours passes.
export default function useElapsedTime(quitDate: Date) {
  
  const [elapsedTime, setElapsedTime] = useState<IElapsedTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timeInterval = setInterval(() => {
      setElapsedTime(calculateElapsedTime(quitDate));
      }, 1000 // every second
    );
      console.log("tick") // ! CONSOLE LOG
    return () => clearInterval(timeInterval);
  }, [quitDate])

  return elapsedTime;
}