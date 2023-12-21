import { useNavigate } from "react-router-dom";
import { useHealthBenefits } from '../../../hooks';
import { LinearProgress } from '@mui/material';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


function HealthProgress({ userQuitDate } : { userQuitDate: string | Date } ) {

  const navigate = useNavigate();

  const { 
    totalHealthBenefits,
    totalHealthBenefitsAchieved, 
    totalHealthPercentAchieved
  } = useHealthBenefits(userQuitDate as string);

  return (
    <div className="health-milestones">

      <div className="milestone-info">
        <h3>Health Progress</h3>
        <p><FavoriteIcon /> {totalHealthBenefitsAchieved} / {totalHealthBenefits}</p>
      </div>

      <LinearProgress 
        className='progress-bar'
        variant='determinate'
        value={totalHealthPercentAchieved}
        color='error'
      />

      <button 
        className="btn alternate-btn milestone-btn" 
        onClick={() => navigate('/dashboard/health')}
      >
        See More
      </button>

    </div>
  )
}

export default HealthProgress;