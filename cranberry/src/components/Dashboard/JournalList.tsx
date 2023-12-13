import { IJournal } from "../../types"
import { NavLink } from "react-router-dom";

export default function JournalList(props: JournalListProps) {

  const { journals } = props;

  return (
    <div className="journal-list">
      <h1>Journal List</h1>
      {journals.map((journal: IJournal, index: number) => (
        <li
          className={"journal-item"}
          key={journal.journalId}
        >
          <p>{journal.date}</p>
        </li>
      ))}
    </div>
  )
}

type JournalListProps = {
  journals: IJournal[]
}