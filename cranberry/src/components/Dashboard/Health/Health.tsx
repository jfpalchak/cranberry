import './Health.css';
import { CircularProgress, LinearProgress } from '@mui/material';
import { healthBenefitsOverTime } from '../../../data/health-benefits';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import type { IUser } from '../../../types';

export default function Health({ user }: { user: IUser }) {

  // To calculate progress towards each health benefit,
  // we calculate the difference in hours between now and the user's quit date,
  // and compare with the number of hours needed to reach a benefit

  // Make this a hook?
  // let elapsedTime = (differenceInMinutes(new Date(), new Date(user.quitDate)) / 60);

  const healthProgress = (targetHours: number) => {
    const elapsedTime = (differenceInMinutes(new Date(), new Date(user.quitDate)) / 60);
    const progress = (elapsedTime / targetHours) * 100;
    return progress > 100 ? 100 : progress;
  };
  
  // TODO : refactor into smaller components

  return  (
    <section className="user-health dash-section">
      <h1>Health Progress</h1>
      <div className="health-content">
        <div className="health-progress">

          {healthBenefitsOverTime.map((item, index) => (
            <div className="health-item" key={index} >
              <div className="progress-label">
                <LinearProgress 
                  className="progress-bar" 
                  variant='determinate' 
                  value={healthProgress(item.time)} 
                  color={(healthProgress(item.time) > 99 ? 'success' : 'primary')}
                  />
                <p>{healthProgress(item.time).toFixed()}%</p>
              </div>
                  <h4>{item.benefit}</h4>
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
