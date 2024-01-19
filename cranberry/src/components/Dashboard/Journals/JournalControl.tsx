import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Fab, Tooltip } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import JournalList from "./JournalList";
import JournalDetail from "./JournalDetail";
import JournalCreate from './JournalCreate';
import JournalEdit from './JournalEdit';
import type { IUser, IJournal } from "../../../types";
import './Journals.css';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { createJournal, deleteJournal, editJournal } from '../../../store/journalsSlice';

export default function JournalControl({ user }: { user: IUser}) {

  const { userJournals } = useAppSelector(state => state.journals)
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleAddingNewJournal = async (journalData: IJournal) => {
    dispatch(createJournal({ userId: user.userId!, journalData }))
      .unwrap()
      .then((response) => {
        navigate(`/dashboard/journals/${response.journalId}`)
      })
      .catch((error) => {
        console.log('Create Journal error: ', error);
      });
  };

  const handleEditingJournal = async(journalData: IJournal) => {
    dispatch(editJournal(journalData))
    navigate(`/dashboard/journals/${journalData.journalId}`)
  };

  const handleDeletingJournal = async(userId: string, journalId: number) => {
    dispatch(deleteJournal({ userId, journalId }));
    navigate("/dashboard/journals/");
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
              userId={user.userId!} 
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