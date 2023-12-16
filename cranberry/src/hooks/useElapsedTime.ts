import { useState, useEffect } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';

// Every second, calculate the amount of time that has passed
// since the User's given quitDate. Depends on the user.quitDate.
// Returns an Duration object containing the number of days passed,
// as well as a count for hours, minutes, and seconds until the next 24 hours passes.
export default function useElapsedTime(quitDate: Date) {
  
  const [elapsedTime, setElapsedTime] = useState<Duration>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timeInterval = setInterval(() => {
      setElapsedTime(intervalToDuration({ start: quitDate, end: new Date() }))
      }, 1000 // every second
    );

    console.log("tick") // ! CONSOLE LOG

    return () => clearInterval(timeInterval);
  }, [quitDate])

  return elapsedTime;
}