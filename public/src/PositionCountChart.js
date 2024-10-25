import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const PositionCountChart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const years = data.map(row => row[0]);  // Year in first column
      const counts = data.map(row => row[1]); // Position count in second column

      setChartData({
        labels: years,
        datasets: [
          {
            label: 'Position Count',
            data: counts,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true,
          },
        ],
      });
    }
  }, [data]);

  return <Bar data={chartData} />;
};

export default PositionCountChart;
