
export interface IUser {
  userId?: string;
  userName: string;
  avgSmokedDaily: number;
  cigsPerPack: number;
  pricePerPack: number;
  quitDate: string | Date;
}

export interface IRegistrationData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  quitDate: string;
  avgSmokedDaily: number;
  cigsPerPack: number;
  pricePerPack: number;
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