import type { IElapsedTime } from "../types";
// Calculate the amount of time that has passed since the given date.
// Returns an object containing:
// the total number of days passed,
// including hours, minutes, and seconds that count up to 24 hours before being reset
export const calculateElapsedTime = (startDate: Date | string): IElapsedTime => {

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


// Calculate the total number of days that have passed since the given date.
export const calculateElapsedDays = (startDate: Date | string) => {
  startDate = (typeof startDate === 'string' ? new Date(startDate) : startDate);
  const currentTime = new Date();
  // get difference in seconds between now and given date
  const difference = Math.floor((currentTime.getTime() - startDate.getTime()) / 1000);

  const daysSince = (difference / (24 * 60 * 60));

  return daysSince;
};