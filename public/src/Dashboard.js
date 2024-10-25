import React, { useEffect, useState } from 'react';
import SalaryChart from './SalaryChart';
import PositionCountChart from './PositionCountChart';
import { getYearPositionBaseTotalDays, getYearPositionCount } from './api';

const Dashboard = () => {
  const [salaryData, setSalaryData] = useState([]);
  const [positionCountData, setPositionCountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const salaryResponse = await getYearPositionBaseTotalDays();
      setSalaryData(salaryResponse);

      const positionCountResponse = await getYearPositionCount();
      setPositionCountData(positionCountResponse);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>School District Financial Dashboard</h1>

      <div>
        <h2>Salaries Over Time</h2>
        {salaryData.length > 0 ? (
          <SalaryChart data={salaryData} />
        ) : (
          <p>Loading salary data...</p>
        )}
      </div>

      <div>
        <h2>Position Count by Year</h2>
        {positionCountData.length > 0 ? (
          <PositionCountChart data={positionCountData} />
        ) : (
          <p>Loading position count data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
