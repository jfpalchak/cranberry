import { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import JournalService from '../../services/journal.service';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import JournalCreate from './JournalCreate';
import JournalEdit from './JournalEdit';
import { IUser, IJournal } from "../../types";
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

export default function JournalControl(props: JournalControlProps) {

  const { user } = props;
  const [userJournals, setUserJournals] = useState<IJournal[]>([]);
  const navigate = useNavigate();

  // fetch user's journals
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
    });
  };

  // I need to use Redux.
  const handleEditingJournal = async(journalData: IJournal) => {
    JournalService.updateUserJournal(journalData)
      .then(response => {
        const jIndex = userJournals.findIndex(journal => journal.journalId === journalData.journalId);
        const newJournalList = [...userJournals];
        newJournalList[jIndex] = journalData;
        setUserJournals(newJournalList);
        console.log("Edit Journal success.");
        navigate(`/dashboard/journals/${journalData.journalId}`)
      })
      .catch(error => {
        console.log("Edit Journal error: ", error);
      })
  }

  const handleDeletingJournal = async(userId: string, journalId: number) => {
    JournalService.deleteUserJournal(userId, journalId)
      .then(response => {
        setUserJournals(userJournals.filter((journal => journal.journalId != journalId)));
        console.log(`JOURNAL ${journalId} DELETED.`)
        navigate("/dashboard/journals/");
      })
      .catch(error => {
        console.log("Delete Journal error: ", error);
      });
  };



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
              {userJournals.length > 0 
                ? <h1>Select a journal.</h1>
                : <h1>Start your Journal:</h1>
              }
              <br/>
              <br/>
              <Link to="/dashboard/journals/new">
                <AddCircleOutlineIcon />
                <br/>
                Add Journal
              </Link>
            </div>
          } />
          <Route path="/new" element={<JournalCreate user={user} onSubmission={handleAddingNewJournal} />} />
          <Route path="/:journalId" element={<JournalDetail journals={userJournals} onClickingDelete={handleDeletingJournal}/>} />
          <Route path="/:journalId/edit" element={<JournalEdit journals={userJournals} onSubmission={handleEditingJournal} />} />
        </Routes>
      </div>
      )}
    </section>
  );
}

type JournalControlProps = {
  user: IUser;
}

