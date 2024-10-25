import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const SalaryChart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const years = data.map(row => row[0]);  // Year in first column
      const baseSalaries = data.map(row => row[2]); // Base salary in third column
      const totalSalaries = data.map(row => row[3]); // Total salary in fourth column

      setChartData({
        labels: years,
        datasets: [
          {
            label: 'Base Salary',
            data: baseSalaries,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
          {
            label: 'Total Salary',
            data: totalSalaries,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      });
    }
  }, [data]);

  return <Line data={chartData} />;
};

export default SalaryChart;
