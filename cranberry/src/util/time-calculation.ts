// Calculate the total number of days that have passed since the given date.
export const calculateElapsedDays = (startDate: Date | string) => {
  startDate = (typeof startDate === 'string' ? new Date(startDate) : startDate);
  const currentTime = new Date();
  // get difference in seconds between now and given date
  const difference = Math.floor((currentTime.getTime() - startDate.getTime()) / 1000);

  const daysSince = (difference / (24 * 60 * 60));

  return daysSince;
};