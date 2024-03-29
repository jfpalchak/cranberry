import { Link } from "react-router-dom";
import format from "date-fns/format";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import type { IJournal } from "../../../types"

type JournalListProps = {
  journals: IJournal[]
}

export default function JournalList(props: JournalListProps) {

  const { journals } = props;

  return (
    <div className="journal-list">
      {journals.length === 0 
        ? (
          <div>
            <h2>Track your journey! </h2>
            <br/>
            <p>See your cravings decrease over time; </p>
            <p>keep notes to journal your process.</p>
            <br/>
            <p>Create a journal to get started!</p>
          </div>
        ) : (
          <div className="introduction">
            Keeping a journal is a great way to track your progress, and your cravings.
          </div>
        )
      }
      {journals.map((journal: IJournal, index: number) => (
        <li
          className={"journal-item"}
          key={journal.journalId}
        >
          <Link to={`./${journal.journalId}`}>
            <div className="date-card">
              <CalendarTodayIcon/>
              <div className="date-card-head">
                {format(new Date(journal.date), 'MMMM dd, yyyy')}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </div>
  )
}