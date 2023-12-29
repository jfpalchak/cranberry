import { useHealthBenefits } from '../../../hooks';
import { LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { IUser } from '../../../types';
import './Health.css';

export default function Health({ user }: { user: IUser }) {

  const {
    healthBenefitsList, 
    getHealthItemProgress, 
    totalHealthBenefits,
    totalHealthBenefitsAchieved, 
  } = useHealthBenefits(user.quitDate as string)

  const description = (benefit: string) => {
    let array = benefit.split(":");
    let units = array[0];
    let text = array[1];
    return {units, text}
  }

  console.log("Health page rendered")
  
  // TODO : refactor into smaller components

  return  (
    <section className="user-health dash-section">
      <div className="section-header health-header">
          <h1>Health Progress</h1>
          <h3> <FavoriteIcon /> <span><span className="achieved">{totalHealthBenefitsAchieved}</span> / {totalHealthBenefits}</span></h3>
      </div>
      <div className="health-content">
        <div className="health-progress">

          {healthBenefitsList.map((item, index) => (
            <div className="health-item" key={index} >

              <div className={("progress-marker".concat(getHealthItemProgress(item.time) > 99 ? ' complete' : ' ongoing'))}></div>

              <div className="health-item-info">
                <div className="description">
                  <h4>{description(item.benefit).units}</h4>
                  <p>{description(item.benefit).text}</p>
                </div>
                <div className="progress-label">
                  <LinearProgress 
                    className="progress-bar" 
                    variant='determinate' 
                    value={getHealthItemProgress(item.time)} 
                    color='error'
                    />
                    <p>{getHealthItemProgress(item.time).toFixed()}</p>
                </div>
              </div>

            </div>
          ))}

        </div>

        <div className="references">
          <p>Information sourced by:</p>
          <a href="https://www.who.int/news-room/questions-and-answers/item/tobacco-health-benefits-of-smoking-cessation">
            World Health Organization (WHO)
          </a>
          <a href="https://www.cdc.gov/tobacco/quit_smoking/how_to_quit/benefits/">
            CDC
          </a>
          <a href="https://www.heart.org/en/healthy-living/healthy-lifestyle/quit-smoking-tobacco/the-benefits-of-quitting-smoking-now">
            heart.org
          </a>
        </div>
      </div>
    </section>
  );
}
