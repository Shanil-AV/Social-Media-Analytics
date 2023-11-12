import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "./Nextchart.css";

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "monthly followers increase",
      data: [50, 75, 60, 80, 95, 70, 85, 90],
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Nextchart = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          {/* Chart */}
          <div className="chart">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nextchart;
