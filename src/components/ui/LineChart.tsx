"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const fontGrotesk = getComputedStyle(document.documentElement)
//   .getPropertyValue("--font-grotesk")
//   .trim();

// ChartJS.defaults.font = {
//   family: "--font-space-grotesk",
//   size: 13,
//   weight: 700,
// };

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#ffffff",
        font: {
          weight: 700,
          size: 23,
          //   family: "sans",
        },

        callback: function (tickValue) {
          // Safely cast to number and format
          const value = Number(tickValue);
          if (value >= 1_000_000) return value / 1_000_000 + "m";
          //   if (value >= 1_000) return value / 1_000 + "k";
          return value;
        },
      },
    },
    x: {
      ticks: {
        color: "#ffffff",
        font: {
          family: "--font-space-grotesk",
          weight: 700,
          size: 23,
        },
      },
      grid: {
        display: true,
      },
    },
  },
};

const labels = ["MAY", "JUN", "JUL", "AUG", "SEP", "OCT"];

const data = {
  labels,
  datasets: [
    {
      data: [0, 2000000, 4000000, 5000000, 7000000],
      borderColor: "#b5ffa5",
      backgroundColor: "#b5ffa5",
      tension: 0.3,
      pointRadius: 7,
      lineTension: 0.4,
    },
  ],
};

export function LineChartComponent() {
  return <Line options={options} data={data} />;
}
