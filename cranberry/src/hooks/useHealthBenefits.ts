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
    if (userQuitDate){

      console.log("Benefits hook is rendering.")
      const getHealthItemProgress = (benefitTargetHours: number) => {
        const elapsedTime = (differenceInMinutes(new Date(), new Date(userQuitDate)) / 60);
        const progress = (elapsedTime / benefitTargetHours) * 100;
        return progress > 100 ? 100 : progress;
      };
      
      const totalHealthBenefits = healthBenefitsOverTime.length;
      
      const totalHealthBenefitsAchieved = healthBenefitsOverTime.reduce((value, benefit) => {
        const userHours = (differenceInMinutes(new Date(), new Date(userQuitDate)) / 60);
        const benefitAchieved = (userHours / benefit.time) >= 1;
        
        return benefitAchieved ? value + 1 : value + 0;
      }, 0);
      
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