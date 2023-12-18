import differenceInMinutes from 'date-fns/differenceInMinutes';

// Calculate the total number of days that have passed since the given date.
export const calculateElapsedDays = (startDate: Date | string): number => {
  startDate = (typeof startDate === 'string' ? new Date(startDate) : startDate);
  const currentTime = new Date();
  // get difference in seconds between now and given date
  const difference = Math.floor((currentTime.getTime() - startDate.getTime()) / 1000);

  const daysSince = (difference / (24 * 60 * 60));

  return daysSince;
};

// Calculate the percentage of hours met to achieve a particular health milestone.
// Takes the target number of hours needed, and the quit date for the registered user;
// Calculates the elapsed time from the quit date and compares to the required hours,
// returning a number between 0 and 100.
const healthProgress = (targetHours: number, userQuitDate: string | Date): number => {
  const elapsedTime = (differenceInMinutes(new Date(), new Date(userQuitDate)) / 60);
  const progress = (elapsedTime / targetHours) * 100;
  return progress > 100 ? 100 : progress;
};