import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data: ChartData<'doughnut'> = {
  labels: [],
  datasets : []
};

function Doughnuts() {
  return (
    <Doughnut data={data} />
  );
}

export default Doughnuts;