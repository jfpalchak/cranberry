import { LinearProgress } from "@mui/material";

interface Benefit {
  goal: string;
  benefit: string;
  time: number;
}

interface HealthBenefitProps {
  item: Benefit;
  formatProgress: (data: number) => number;
}

function HealthBenefit(props: HealthBenefitProps) {

  const { formatProgress, item } = props;

  return (
    <div className="health-item" >

      <div className={`progress-marker ${formatProgress(item.time) > 99 ? 'complete' : 'ongoing'}`}></div>

      <div className="health-item-info">
        <div className="description">
          <h4>{item.goal}</h4>
          <p>{item.benefit}</p>
        </div>
        <div className="progress-label">
          <LinearProgress 
            className="progress-bar" 
            variant='determinate' 
            value={formatProgress(item.time)} 
            color='error'
            />
            <p>{formatProgress(item.time).toFixed()}</p>
        </div>
      </div>

    </div>
  );
}

export default HealthBenefit;