import { useState } from "react";
import { IJournal, IUser } from "../../types";

export default function JournalCreate(props: JournalCreateProps) {

  const { user, onSubmission } = props;

  const [formData, setFormData] = useState<IJournal>({
    date: "",
    cravingIntensity: 0,
    cigsSmoked: 0,
    notes: "",
    userId: user.userId!
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleCreateJournal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmission(formData);
  }

  return (
    <div className="journal-create journal-card">
      <form onSubmit={handleCreateJournal}>
        <div className="journal-form">
        <label>Entry Date:</label>
        <input 
          type="date" 
          name="date"
          required
          onChange={handleChange}
        />
        <label>Craving Intensity:</label>
        <input 
          min={0} max={10}
          type="number" 
          name="cravingIntensity"
          value={0}
          required
          onChange={handleChange}
        />
        <label>Did you smoke?</label>
        <input 
          type="checkbox" 
        />
        <label>How many?</label>
        <input 
          type="number"
          name="cigsSmoked"
          value={0}
          onChange={handleChange}
        />
        <label>Notes:</label>
        <textarea 
          name="notes"
          onChange={handleChange}
        />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

type JournalCreateProps = {
  user: IUser;
  onSubmission: (x: IJournal) => void;
}