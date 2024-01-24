import { LinearProgress } from "@mui/material";

interface HealthBenefit {
  benefit: string;
  time: number;
}

interface HealthBenefitProps {
  item: HealthBenefit;
  formatProgress: (data: number) => number;
}

function HealthBenefit(props: HealthBenefitProps) {

  const { formatProgress, item } = props;

  const description = (benefit: string) => {
    let array = benefit.split(":");
    let units = array[0];
    let text = array[1];
    return {units, text}
  }

  return (
    <div className="health-item" >

      <div className={("progress-marker".concat(formatProgress(item.time) > 99 ? ' complete' : ' ongoing'))}></div>

      <div className="health-item-info">
        <div className="description">
          <h4>{description(item.benefit).units}</h4>
          <p>{description(item.benefit).text}</p>
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