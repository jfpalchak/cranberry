import JournalList from "./JournalList";
import JournalShow from "./JournalShow";
import { IUser } from "../../types";

export default function JournalControl(props: JournalControlProps) {

  const { user } = props;

  return  (
    <section>
      <JournalList />
      <JournalShow />
    </section>
  );
}

type JournalControlProps = {
  user: IUser;
}