import { IJournal } from "../../types";
import { useParams } from "react-router-dom";

export default function JournalDetail({ journals }: { journals: IJournal[] }) {

  // grab the Journal ID from the URL (:journalId)
  const params = useParams();

  const journal = journals.find(journal => journal.journalId === parseInt(params.journalId!))

  return (
    <div className="journal-detail">
      <h1 className="center">Journal</h1>
      {journal && (
        <ul>
          <li>
            <h3>Date:</h3>
            <p>{journal.date}</p>
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
      )}
    </div>
  )
}