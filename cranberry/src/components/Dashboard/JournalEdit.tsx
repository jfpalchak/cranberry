import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IJournal } from "../../types";

export default function JournalEdit({ journals, onSubmission }: JournalEditProps) {

  const params = useParams();
  const journal = journals.find(journal => journal.journalId === parseInt(params.journalId!))
  
  const [formData, setFormData] = useState<IJournal>({
    journalId: journal!.journalId,
    date: journal!.date,
    cravingIntensity: journal!.cravingIntensity,
    cigsSmoked: journal!.cigsSmoked,
    notes: journal!.notes,
    userId: journal!.userId
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleUpdateJournal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmission(formData);
  }

  return (
    <div className="journal-edit journal-card">
      <form onSubmit={handleUpdateJournal}>
      <div className="journal-form">
        <label>Entry Date:</label>
        <p>{((new Date(formData.date)).toLocaleDateString())}</p>
        <label>Craving Intensity:</label>
        <input 
          min={0} max={10}
          type="number" 
          name="cravingIntensity"
          value={formData.cravingIntensity}
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
          value={formData.cigsSmoked}
          onChange={handleChange}
        />
        <label>Notes:</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        </div>
        <button type="submit">Update</button>
        <button onClick={() => navigate(`/dashboard/journals/${journal!.journalId}`)}>Cancel</button>
      </form>
    </div>
  );
}

type JournalEditProps = {
  journals: IJournal[];
  onSubmission: (x: IJournal) => void;
}