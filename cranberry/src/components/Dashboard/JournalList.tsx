import { Link } from "react-router-dom";
import type { IJournal } from "../../types"

export default function JournalList(props: JournalListProps) {

  const { journals } = props;

  return (
    <div className="journal-list">
      {journals.length === 0 &&
        <div>
          <h2>Track your journey! </h2>
          <p>See your cravings decrease over time; </p>
          <p>keep notes to journal your process.</p>
          <p>Click 'Add Journal' to get started!</p>
        </div>
      }
      {journals.map((journal: IJournal, index: number) => (
        <li
          className={"journal-item"}
          key={journal.journalId}
        >
          <Link to={`./${journal.journalId}`}>
            {((new Date(journal.date)).toDateString())}
          </Link>
        </li>
      ))}
    </div>
  )
}

type JournalListProps = {
  journals: IJournal[]
}