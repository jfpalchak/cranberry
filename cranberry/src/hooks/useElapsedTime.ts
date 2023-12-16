import React, { useState, useEffect } from 'react';
import { calculateElapsedTime } from '../util/time-calculation';
import type { IElapsedTime } from '../types';

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
      }, 1000 
    );
      console.log("tick") // ! CONSOLE LOG
    return () => clearInterval(timeInterval);
  }, [quitDate])

  return elapsedTime;
}