import api from "./api";
import { type IJournal } from "../types";

const getUserJournals = (userId: string) => {

  return api.get(`/users/${userId}/journals`);
}

const getUserJournal = (userId: string, journalId: number) => {

  return api.get(`/users/${userId}/journals/${journalId}`);
}

const createUserJournal = (userId: string, journalData: IJournal) => {

  return api.post(`/users/${userId}/journals`, journalData);
}

const updateUserJournal = (journalData: IJournal) => {

  return api.put(`/users/${journalData.userId}/journals/${journalData.journalId}`, journalData);
}

const deleteUserJournal = (userId: string, journalId: number) => {
  
  return api.delete(`/users/${userId}/journals/${journalId}`)
}

const JournalService = {
  getUserJournals,
  getUserJournal,
  createUserJournal,
  updateUserJournal,
  deleteUserJournal
};

export default JournalService;