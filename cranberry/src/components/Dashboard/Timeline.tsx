import './Timeline.css';
import { 
  Chart as ChartJS,
  LineElement, 
  TimeScale, 
  LinearScale, 
  PointElement, 
  Tooltip, 
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement, 
  TimeScale, 
  LinearScale, 
  PointElement, 
  Tooltip, 
  Legend
);

export default function Timeline() {

  const data = {
    labels: ['2023-12-11T11:58', '2023-12-10T11:58', '2023-12-09T11:58'], // dates
    datasets: [
      {
        label: 'Cravings',
        data: [8, 2, 6], // smoked
        backgroundColor: 'blue',
        borderColor: 'black',
        tension: 0.4
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }
  return  (
    <section className="user-timeline dash-section">
      <div className="section-header">
        <h1>Timeline</h1>
      </div>

      <div className="timeline-content">
        <div className="time-scale">
          <Line
            data={data}
            options={options as any}
          ></Line>
        </div>
      </div>
    </section>
  );
}