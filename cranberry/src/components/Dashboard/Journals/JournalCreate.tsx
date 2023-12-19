import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Input } from '@chakra-ui/react';
import type { IJournal, IUser } from "../../../types";

export default function JournalCreate(props: JournalCreateProps) {

  const { user, onSubmission } = props;
  const navigate =useNavigate();
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
        <Input 
          type="datetime-local"
          id="date"
          name="date"
          onChange={handleChange} 
          isRequired={true}
        />
        <label>Craving Intensity:</label>
        <input 
          min={0} max={10}
          type="number" 
          name="cravingIntensity"
          placeholder="Between 1 - 10."
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
          placeholder="How many cigarettes did you smoke?"
          required
          onChange={handleChange}
        />
        <label>Notes:</label>
        <textarea 
          name="notes"
          placeholder="Enter comments here."
          onChange={handleChange}
        />
        </div>
        <button type="submit">Submit</button>
        <button onClick={() => navigate(`/dashboard/journals/`)}>Cancel</button>
      </form>
    </div>
  );
}

type JournalCreateProps = {
  user: IUser;
  onSubmission: (x: IJournal) => void;
}