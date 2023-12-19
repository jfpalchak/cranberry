import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider, ToggleButton, ToggleButtonGroup } from "@mui/material";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Input } from '@chakra-ui/react';
import type { IJournal, IUser } from "../../../types";

export default function JournalCreate(props: JournalCreateProps) {

  const { user, onSubmission } = props;

  const navigate = useNavigate();
  const [didSmoke, setDidSmoke] = useState<boolean | null>(null);
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

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    setFormData(prevData => ({...prevData, cravingIntensity: newValue as number}));
  }

  const handleToggleChange = (e: React.MouseEvent<HTMLElement>, newValue: boolean) => {
    setDidSmoke(newValue);
  }

  const handleCreateJournal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmission(formData);
  }

  return (
    <div className="journal-create journal-card">
      <h2>New Journal</h2>
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
          <Slider
            color="error"
            value={formData.cravingIntensity}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            onChange={handleSliderChange}
          />
          <label>Did you smoke?</label>
          <ToggleButtonGroup
            color="error"
            value={didSmoke}
            exclusive
            onChange={handleToggleChange}
          > 
            <ToggleButton value={true} >
              Yes
            </ToggleButton>
            <ToggleButton value={false} >
              No
            </ToggleButton>
            {(didSmoke && <p>That's okay! It's not a linear process.</p>) 
              ||
              (didSmoke != null && <p>Hell yeah! You're doing fantastic!</p>)}
          </ToggleButtonGroup>
          {didSmoke && 
            <>
              <label>How many?</label>
              <input 
                type="number"
                name="cigsSmoked"
                placeholder="How many cigarettes did you smoke?"
                value={formData.cigsSmoked > 0 ? formData.cigsSmoked : ""}
                required={ didSmoke ? true : false }
                onChange={handleChange}
              />
            </>
          }
          <label>Notes:</label>
          <textarea 
            name="notes"
            placeholder="Enter comments here."
            onChange={handleChange}
          />
        </div>
        <button className="btn primary-btn" type="submit">Submit</button>
      </form>
        <button className="btn cancel-btn" onClick={() => navigate(`/dashboard/journals/`)}>Cancel</button>
    </div>
  );
}

type JournalCreateProps = {
  user: IUser;
  onSubmission: (x: IJournal) => void;
}