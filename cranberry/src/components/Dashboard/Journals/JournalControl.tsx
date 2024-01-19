import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { compareDesc } from 'date-fns';
import JournalService from '../../../services/journal.service';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import JournalCreate from './JournalCreate';
import JournalEdit from './JournalEdit';
import { Fab, Tooltip } from '@mui/material';
import type { IUser, IJournal } from "../../../types";
import './Journals.css';

import CreateIcon from '@mui/icons-material/Create';


export default function JournalControl(props: JournalControlProps) {

  const { user, userJournals, setUserJournals } = props;
  
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
    });
  };

  const handleEditingJournal = async(journalData: IJournal) => {
    JournalService.updateUserJournal(journalData)
      .then(response => {
        const jIndex = userJournals.findIndex(journal => journal.journalId === journalData.journalId);
        const newJournalList = [...userJournals];
        newJournalList[jIndex] = journalData;
        setUserJournals(newJournalList);
        navigate(`/dashboard/journals/${journalData.journalId}`)
      })
      .catch(error => {
        console.log("Edit Journal error: ", error); // ! CONSOLE LOG
      })
  }

  const handleDeletingJournal = async(userId: string, journalId: number) => {
    JournalService.deleteUserJournal(userId, journalId)
      .then(response => {
        setUserJournals(userJournals.filter((journal => journal.journalId !== journalId)));
        navigate("/dashboard/journals/");
      })
      .catch(error => {
        console.log("Delete Journal error: ", error); // ! CONSOLE LOG
      });
  };



  return  (
    <section className="user-journals dash-section">
      <div className="section-header">
        <h1>Journals</h1>
      </div>

      {user && (
      <div className="journals-content">

          <JournalList journals={userJournals} />

        {/* Dynamically render the chosen journal entries using our router parameters. */}
        <Routes>
          <Route index path="/" element={
            <>
            <div className="journal-card center journal-display-index">
              {userJournals.length > 0 
                ? <h1>Select a Journal</h1>
                : <><h1>Start your Journals:</h1></>
              }
              <br/>
              <br/>
              <Link className="add-journal" to="/dashboard/journals/new">
                <Fab className="action-button no-shadow" aria-label="edit">
                  <CreateIcon />
                </Fab>
              </Link>
            </div>
            <div className="mobile-only add-journal" >
              <Tooltip title="New Journal" placement="left-end">
                <Link to="/dashboard/journals/new">
                  <Fab className="action-button" aria-label="edit">
                    <CreateIcon />
                  </Fab>
                </Link>
              </Tooltip>
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

