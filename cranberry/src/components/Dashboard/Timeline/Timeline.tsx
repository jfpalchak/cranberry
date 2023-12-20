import './Timeline.css';
import { 
  Chart as ChartJS,
  LineElement, 
  BarElement, // !
  TimeScale, 
  LinearScale, 
  PointElement, 
  Tooltip, 
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Chart, Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import type { IJournal } from '../../../types';

ChartJS.register(
  LineElement, 
  BarElement, // !
  TimeScale, 
  LinearScale, 
  PointElement, 
  Tooltip, 
  Legend
);

export default function Timeline({ userJournals }: { userJournals: IJournal[] }) {

  const data: ChartData<'line' | 'bar'> = {
    labels: userJournals.map(journal => journal.date), // journal dates
    datasets: [
      {
        type: 'line' as const,
        label: 'Craving Intensity',
        data: userJournals.map(journal => journal.cravingIntensity),
        backgroundColor: 'lightblue',
        borderColor: 'darkblue',
        borderWidth: 2,
        tension: 0.2,
      },
      {
        type: 'bar' as const,
        label: 'Smoked',
        data: userJournals.map(journal => journal.cigsSmoked),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 2
        // tension: 0.2
      }
    ]
  };

  const options: ChartOptions<'line' | 'bar'> = {
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
  };

  return  (
    <section className="user-timeline dash-section">
      <div className="section-header">
        <h1>Timeline</h1>
      </div>

      <div className="timeline-content">
      {userJournals.length > 1 
        ? (
        <div className="time-scale">
          <Chart
            type='bar'
            data={data}
            options={options}
          ></Chart>

        </div>
        ) : (
          <div className="time-scale">
            <h1>You'll need to add a couple journals before there can be data to plot!</h1>
          </div>
      )}
      </div>
    </section>
  );
}