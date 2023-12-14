import { useState, useEffect } from 'react';
import JournalService from '../../services/journal.service';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import JournalCreate from './JournalCreate';
import { IUser, IJournal } from "../../types";
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

export default function JournalControl(props: JournalControlProps) {

  const { user } = props;
  const [userJournals, setUserJournals] = useState<IJournal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJournals = async () => {
      JournalService.getUserJournals(user.userId!)
        .then((response) => {
          console.log("Fetch Journals success", response.data);
          setUserJournals(response.data.data);
        })
        .catch((error) => {
          console.log("Fetch Journals error: ", error);
        })
    };

    fetchJournals();
  }, []);

  const handleAddingNewJournal = async (journalData: IJournal) => {
    JournalService.createUserJournal(user.userId!, journalData)
    .then(response => {
      const newJournal = response.data.data;
      setUserJournals([...userJournals, newJournal]);
      navigate(`/dashboard/journals/${newJournal.journalId}`)
    })
    .catch(error => {
      console.log("Create Journal error: ", error);
    })
  }

  return  (
    <section className="user-journals dash-section">
      <h1>Journals</h1>

      {user && (
      <div className="journals-content">
        <JournalList journals={userJournals} />

        {/* Dynamically render the chosen journal entries using our router parameters. */}
        <Routes>
          <Route index path="/" element={
            <div className="journal-card center">
              <h1>Select a journal.</h1>
              <br/>
              <br/>
              <Link to="/dashboard/journals/new">Add Journal</Link>
            </div>
          } />
          <Route path="/:journalId" element={<JournalDetail journals={userJournals} />} />
          <Route path="/new" element={<JournalCreate user={user} onSubmission={handleAddingNewJournal} />} />
        </Routes>
      </div>
      )}
    </section>
  );
}

type JournalControlProps = {
  user: IUser;
}

