import { useHealthBenefits } from '../../../hooks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { IUser } from '../../../types';
import './Health.css';
import HealthBenefit from './HealthBenefit';
import HealthReferences from './HealthReferences';

export default function Health({ user }: { user: IUser }) {

  const {
    healthBenefitsList, 
    getHealthItemProgress, 
    totalHealthBenefits,
    totalHealthBenefitsAchieved, 
  } = useHealthBenefits(user.quitDate as string)

  return  (
    <section className="user-health dash-section">
      <div className="section-header health-header">
          <h1>Health Progress</h1>
          <h3> <FavoriteIcon /> <span><span className="achieved">{totalHealthBenefitsAchieved}</span> / {totalHealthBenefits}</span></h3>
      </div>
      <div className="health-content">
        <div className="health-progress">

          {healthBenefitsList.map((item, index) => (
            <HealthBenefit key={index} item={item} formatProgress={getHealthItemProgress} />
          ))}

        </div>

        <HealthReferences />

      </div>
    </section>
  );
}
