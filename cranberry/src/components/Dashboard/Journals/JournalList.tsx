import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import type { IJournal } from "../../../types"

export default function JournalList(props: JournalListProps) {

  const { journals } = props;

  return (
    <div className="journal-list">
      {journals.length === 0 
        ? (
          <div>
            <h2>Track your journey! </h2>
            <p>See your cravings decrease over time; </p>
            <p>keep notes to journal your process.</p>
            <p>Click 'Add Journal' to get started!</p>
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
              <div className="date-card-head">
                {((new Date(journal.date)).toDateString())}
              </div>
              {/* <div className="date-card-body">
                {(new Date(journal.date)).getDate()}
              </div> */}
            </div>
          </Link>
        </li>
      ))}
    </div>
  )
}

type JournalListProps = {
  journals: IJournal[]
}