import { useState, useEffect } from "react";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { healthBenefitsOverTime } from "../data/health-benefits";

export default function useHealthBenefits(userQuitDate: string) {

  const [userHealthBenefits, setUserHealthBenefits] = useState<BenefitState>({
    getHealthItemProgress: (hours) => hours,
    totalHealthBenefits: healthBenefitsOverTime.length,
    totalHealthBenefitsAchieved: 0,
    totalHealthPercentAchieved: 0
  });

  useEffect(() => {
    console.log("Benefits hook is rendering.")
    if (userQuitDate){

      // Calculate the percentage of hours met to achieve a particular health milestone.
      // Takes the target number of hours needed, and the quit date for the registered user;
      // Calculates the elapsed time from the quit date and compares to the required hours,
      // returning a number between 0 and 100.
      const getHealthItemProgress = (benefitTargetHours: number) => {
        const elapsedTime = (differenceInMinutes(new Date(), new Date(userQuitDate)) / 60);
        const progress = (elapsedTime / benefitTargetHours) * 100;
        return progress > 100 ? 100 : progress;
      };
      
      // Get the total number of health benefit milestones listed.
      const totalHealthBenefits = healthBenefitsOverTime.length;
      
      // Calculate the total number of benefit milestones the user has achieved.
      const totalHealthBenefitsAchieved = healthBenefitsOverTime.reduce((value, benefit) => {
        const userHours = (differenceInMinutes(new Date(), new Date(userQuitDate)) / 60);
        const benefitAchieved = (userHours / benefit.time) >= 1;
        
        return benefitAchieved ? value + 1 : value + 0;
      }, 0);
      
      // Calculate the percentage of health benefit milestones achieved.
      const totalHealthPercentAchieved = (totalHealthBenefitsAchieved / totalHealthBenefits) * 100;
      
      const userHealthProgress = {
        getHealthItemProgress,
        totalHealthBenefits,
        totalHealthBenefitsAchieved,
        totalHealthPercentAchieved
      };

      setUserHealthBenefits(userHealthProgress);
    }
  }, [userQuitDate]);

  return userHealthBenefits;
}

interface BenefitState {
  getHealthItemProgress: (data: number) => number;
  totalHealthBenefits: number;
  totalHealthBenefitsAchieved: number;
  totalHealthPercentAchieved: number;
}