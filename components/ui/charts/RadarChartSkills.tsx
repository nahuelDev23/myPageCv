import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import { primaryColor } from "../../../theme/theme_base";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export const data = {
  labels: ["React", "Express", "MongoDB", "Node", "Jest", "Testing-Library"],
  datasets: [
    {
      label: "",
      data: [9, 6, 8, 6, 8, 7],
      backgroundColor: "rgba(100, 255, 218, 0.4)",
      borderColor: primaryColor,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      suggestedMax: 1,
      angleLines: {
        color: "white",
      },
      min: 4,
      grid: {
        color: "rgba(255, 255, 255, 0.6)",
        lineWidth: 2,
      },
      ticks: {
        display: false,
      },
      pointLabels: {
        color: "rgba(255, 255, 255, 0.9)",
        font: {
          size: 14,
        },
      },
    },
  },
};

export const RadarChartSkills = () => {
  return <Radar data={data} options={options} />;
};
