import './Health.css';
import { LinearProgress } from '@mui/material';
import { healthBenefitsOverTime } from '../../data/health-benefits';

export default function Health() {
  return  (
    <section className="user-health dash-section">
      <h1>Health Progress</h1>
      <div className="health-content">
        <div className="health-progress">
          {healthBenefitsOverTime.map(item => (
            <div className="health-item">
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