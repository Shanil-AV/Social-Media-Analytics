import React from "react";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

const PieChart = () => {
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
