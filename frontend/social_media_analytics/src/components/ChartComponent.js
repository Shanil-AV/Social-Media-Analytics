import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./ChartComponent.css";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [data, setData] = useState([
    {
      label: "Likes",
      data: [2679, 3209, 45987, 4560, 1234, 5678, 9012, 3456],
      backgroundColor: "#70CAD1",
    },
    {
      label: "Comments",
      data: [1234, 5678, 9012, 3456, 2679, 3209, 45987, 4560],
      backgroundColor: "#3E517A",
    },
  ]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: "Likes and Comments Over Time",
      display: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              datasets: data,
            }}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
