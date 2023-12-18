import { useState, useEffect } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';

// Every second, calculate the amount of time that has passed
// since the User's given quitDate. 
// Returns a Duration object containing the number of days passed,
// as well as a count for hours, minutes, and seconds until the next 24 hours passes.
export default function useElapsedTime(quitDate: Date) {
  
  const [elapsedTime, setElapsedTime] = useState<Duration>(intervalToDuration({ start: quitDate, end: new Date() }));

  useEffect(() => {

    const timeInterval = setInterval(() => {
      setElapsedTime(intervalToDuration({ start: quitDate, end: new Date() }))
      }, 1000 // every second
    );

    console.log("tick", elapsedTime) // ! CONSOLE LOG

    return () => clearInterval(timeInterval);
  }, [])

  return elapsedTime;
}