import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
      text: 'Line Chart',
    },
  },
};

export default function NewChart({data: chartdata}) {

const labels = chartdata.map(({date})=>date);

const data = {
  labels,
  datasets: [
    {
      label: 'Emails sent',
      data: chartdata.map(({sent})=>sent),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Success',
      data: chartdata.map(({success})=>success),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


  return <Line options={options} data={data} />;
}
