import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IJournal } from "../../../types";
import { Slider, ToggleButton, ToggleButtonGroup } from "@mui/material";

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
  const [didSmoke, setDidSmoke] = useState<boolean>(formData.cigsSmoked > 0 ? true : false);
  
  const navigate = useNavigate();
  
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
          <Slider
            color="error"
            defaultValue={formData.cravingIntensity}
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
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <button className="btn primary-btn" type="submit">Update</button>
      </form>
        <button className="btn cancel-btn" onClick={() => navigate(`/dashboard/journals/${journal!.journalId}`)}>Cancel</button>
    </div>
  );
}

type JournalEditProps = {
  journals: IJournal[];
  onSubmission: (x: IJournal) => void;
}