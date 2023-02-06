import React from "react";
import {
  Chart,
  ArcElement,
  Title,
  DoughnutController,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(Title, ArcElement, DoughnutController, Legend, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["withdrawn", "sent"];

const DonutChart = ({ withdrawal, sent }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "set1",
        data: [withdrawal, sent],
        backgroundColor: ["rgb(234, 67, 53)", "rgb(32, 152, 95)"],
      },
    ],
  };
  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default DonutChart;
