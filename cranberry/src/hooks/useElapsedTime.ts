import React, { useState, useEffect } from 'react';

export default function useElapsedTime(quitDate: Date) {
  
  const [elapsedTime, setElapsedTime] = useState<ElapsedTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timeInterval = setInterval(() => {
      setElapsedTime(calculateElapsedTime(quitDate));
      }, 1000 // if a day has passed, count by minutes, otherwise count each second
    );
      console.log("tick")
    return () => clearInterval(timeInterval);
  }, [quitDate])

  const calculateElapsedTime = (startDate: Date | string): ElapsedTime => {
    startDate = (typeof startDate === 'string' ? new Date(startDate) : startDate);
    const currentTime = new Date();

    // get difference in seconds between now and given date
    const difference = Math.floor((currentTime.getTime() - startDate.getTime()) / 1000);

    // calculate the time that has passed in days / hours / minutes / seconds
    const days = Math.floor(difference / (24 * 60 * 60));
    const hours = Math.floor((difference % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);
    const seconds = Math.floor(difference % 60);

    return { days, hours, minutes, seconds };
  };


  return elapsedTime;
}

interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}