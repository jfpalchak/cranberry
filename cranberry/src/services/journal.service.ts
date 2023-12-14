import axios from "axios";
import api from "./api";
import { IJournal } from "../types";


const getUserJournals = (userId: string) => {

  return api.get(`/users/${userId}/journals`);
}

const createUserJournal = (userId: string, journalData: IJournal) => {

  return api.post(`/users/${userId}/journals`, journalData);
}

const JournalService = {
  getUserJournals,
  createUserJournal
};

export default JournalService;