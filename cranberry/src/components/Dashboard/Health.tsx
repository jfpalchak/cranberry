import './Health.css';
import { LinearProgress } from '@mui/material';
import { healthBenefitsOverTime } from '../../data/health-benefits';
import intervalToDuration from 'date-fns/intervalToDuration';
import type { IUser } from '../../types';

export default function Health({ user }: { user: IUser }) {

  const elapsedTime = intervalToDuration({ start: new Date(user.quitDate), end: new Date() })


  return  (
    <section className="user-health dash-section">
      <h1>Health Progress</h1>
      <div className="health-content">
        <div className="health-progress">
          {healthBenefitsOverTime.map((item, index) => (
            <div className="health-item" key={index} >
              <h4>{item.benefit}</h4>
              <LinearProgress className="progress-bar" variant='determinate' value={30} />
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