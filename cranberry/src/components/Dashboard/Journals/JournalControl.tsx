import JournalService from '../../../services/journal.service';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import JournalCreate from './JournalCreate';
import JournalEdit from './JournalEdit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import compareDesc from 'date-fns/compareDesc';
import type { IUser, IJournal } from "../../../types";
import './Journals.css';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export default function JournalControl(props: JournalControlProps) {

  const { user, userJournals, setUserJournals } = props;
  // const [userJournals, setUserJournals] = useState<IJournal[]>([]);
  const navigate = useNavigate();

  // TODO : create Journal reducer w/ redux tk

  const handleAddingNewJournal = async (journalData: IJournal) => {
    JournalService.createUserJournal(user.userId!, journalData)
    .then(response => {
      const newJournal = response.data.data;
      const updatedJournalList = [...userJournals, newJournal]
        .sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date) , new Date(b.date)));
      setUserJournals(updatedJournalList);
      navigate(`/dashboard/journals/${newJournal.journalId}`)
    })
    .catch(error => {
      console.log("Create Journal error: ", error); // ! CONSOLE LOG
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
            <>
            <div className="journal-card center journal-display-index">
              {userJournals.length > 0 
                ? <h1>Select a journal.</h1>
                : <h1>Start your Journals:</h1>
              }
              <br/>
              <br/>
              <Link className="add-journal" to="/dashboard/journals/new">
                <Fab className="action-button" aria-label="edit">
                  <AddIcon />
                </Fab>
              </Link>
            </div>
            <div className="mobile-only add-journal" >
              <Link to="/dashboard/journals/new">
                <Fab className="action-button" aria-label="edit">
                  <AddIcon />
                </Fab>
              </Link>
            </div>
            </>
          } />
          <Route path="/new" element={
            <JournalCreate 
              user={user} 
              onSubmission={handleAddingNewJournal} 
            />} 
          />
          <Route path="/:journalId" element={
            <JournalDetail 
              journals={userJournals} 
              onClickingDelete={handleDeletingJournal}
            />} 
          />
          <Route path="/:journalId/edit" element={
            <JournalEdit 
              journals={userJournals} 
              onSubmission={handleEditingJournal} 
            />} 
          />
        </Routes>
      </div>
      )}
    </section>
  );
}

type JournalControlProps = {
  user: IUser;
  userJournals: IJournal[];
  setUserJournals: (data: IJournal[]) => void;
}

