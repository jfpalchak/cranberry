import { useState, useEffect } from 'react';
import JournalService from '../../services/journal.service';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import { IUser, IJournal } from "../../types";

export default function JournalControl(props: JournalControlProps) {

  const [userJournals, setUserJournals] = useState<IJournal[]>([]);
  const { user } = props;

  useEffect(() => {
    const fetchJournals = async () => {
      JournalService.getUserJournals(user.userId!)
        .then((response) => {
          console.log("Fetch Journals success", response.data);
          setUserJournals(response.data.data);
          console.log("State: ", userJournals)
        })
        .catch((error) => {
          console.log("Fetch Journals error: ", error);
        })
    };

    fetchJournals();
  }, []);

  return  (
    <section className="user-journals">
      <h1>Journals</h1>
      <div className="journals-content">
        <JournalList journals={userJournals} />
        <JournalDetail />
      </div>
    </section>
  );
}

type JournalControlProps = {
  user: IUser;
}

