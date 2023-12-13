
export interface IUser {
  userId?: string;
  userName?: string;
  avgSmokedDaily?: number;
  cigsPerPack?: number;
  pricePerPack?: number;
  quitDate?: string | Date;
}

export interface ElapsedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}