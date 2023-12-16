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
import type { ChartData, ChartOptions } from 'chart.js';
import type { IJournal } from '../../types';

ChartJS.register(
  LineElement, 
  TimeScale, 
  LinearScale, 
  PointElement, 
  Tooltip, 
  Legend
);

export default function Timeline({ userJournals }: { userJournals: IJournal[] }) {

  const data: ChartData<'line'> = {
    labels: userJournals.map(journal => journal.date), // journal dates
    datasets: [
      // {
      //   label: 'Cravings',
      //   data: [8, 2, 6],
      //   backgroundColor: 'darkgreen',
      //   borderColor: 'green',
      //   tension: 0.4
      // },
      {
        label: 'Craving Intensity',
        data: userJournals.map(journal => journal.cravingIntensity),
        backgroundColor: 'blue',
        borderColor: 'lightblue',
        tension: 0.4
      },
      {
        label: 'Smoked',
        data: userJournals.map(journal => journal.cigsSmoked),
        backgroundColor: 'red',
        borderColor: 'orange',
        tension: 0.4
      }
    ]
  };

  const options: ChartOptions<'line'> = {
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
          <Line
            data={data}
            options={options}
          ></Line>
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