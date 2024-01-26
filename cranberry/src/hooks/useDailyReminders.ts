import { useState, useEffect } from 'react';
import { dailyReminders } from '../data/reminders';

// Return a random Reminder 
function useDailyReminders() {
  const [reminder, setReminder] = useState(dailyReminders[0]);
  
  useEffect(() => {
    const setRandomReminder = () => {
      const randomIndex = Math.floor(Math.random() * (dailyReminders.length));
      setReminder(dailyReminders[randomIndex]);
    };
    setRandomReminder();
  }, []);

  return reminder;
}

export default useDailyReminders;