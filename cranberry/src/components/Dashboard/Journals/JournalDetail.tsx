import { useParams, useNavigate } from "react-router-dom";
import type { IJournal } from "../../../types";

type JournalDetailProps = {
  journals: IJournal[];
  onClickingDelete: (uI: string, jI: number) => void;
}

export default function JournalDetail({ journals, onClickingDelete }: JournalDetailProps) {

  // grab the Journal ID from the URL (:journalId)
  const { journalId } = useParams();
  const journal = journals.find(journal => journal.journalId === parseInt(journalId!))

  const navigate = useNavigate();

  return (
    <div className="journal-detail journal-card">
      <h1 className="center">Journal</h1>
      {journal && (
        <div className="details">
          <ul>
            <li>
              <h3>Date:</h3>
              <p>{((new Date(journal.date)).toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}))}</p>
            </li>
            <li>
              <h3>Craving Intensity:</h3>
              <p>{journal.cravingIntensity}</p>
            </li>
            <li>
              <h3>Cigarettes Smoked:</h3>
              <p>{journal.cigsSmoked}</p>
            </li>
            <li>
              <h3>Notes:</h3>
              <p>{journal?.notes}</p>
            </li>
          </ul>
          <div className="buttons">
            <div className="crud-btn">
              <button className="btn primary-btn" onClick={() => navigate(`/dashboard/journals/${journalId}/edit`)}>Edit</button>
              <button className="btn alternate-btn" onClick={() => onClickingDelete(journal.userId, journal.journalId!)}>Delete</button>
            </div>
            <button className="btn cancel-btn" onClick={() => navigate(`/dashboard/journals/`)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}