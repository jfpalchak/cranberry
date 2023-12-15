import { IJournal } from "../../types"
import { Link } from "react-router-dom";

export default function JournalList(props: JournalListProps) {

  const { journals } = props;

  return (
    <div className="journal-list">
      {journals.length === 0 &&
        <div>
          <h2>Track your journey! </h2>
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