
export interface IUser {
  userId?: string;
  userName: string;
  avgSmokedDaily: number;
  cigsPerPack: number;
  pricePerPack: number;
  quitDate: string | Date;
}

export interface IJournal {
  journalId?: number;
  date: string;
  cravingIntensity: number;
  didSmoke?: boolean;
  cigsSmoked: number;
  notes: string;
  userId: string;
}