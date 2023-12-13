import axios from "axios";
import api from "./api";


const getUserJournals = (userId: string) => {

  return api.get(`/users/${userId}/journals`);
}

const JournalService = {
  getUserJournals
};

export default JournalService;