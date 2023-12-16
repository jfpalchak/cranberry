import { useParams, useNavigate } from "react-router-dom";
import type { IJournal } from "../../types";

export default function JournalDetail({ journals, onClickingDelete }: JournalDetailProps) {

  // grab the Journal ID from the URL (:journalId)
  const params = useParams();
  const journal = journals.find(journal => journal.journalId === parseInt(params.journalId!))

  const navigate = useNavigate();

  return (
    <div className="journal-detail">
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
          <button onClick={() => navigate(`/dashboard/journals/`)}>Close</button>
          <button onClick={() => navigate(`/dashboard/journals/${params.journalId}/edit`)}>Edit</button>
          <button onClick={() => onClickingDelete(journal.userId, journal.journalId!)}>Delete</button>
        </div>
      )}
    </div>
  )
}

type JournalDetailProps = {
  journals: IJournal[];
  onClickingDelete: (uI: string, jI: number) => void;
}