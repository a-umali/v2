// src/components/TobaccoChart.js

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import fetchTobaccoData from '../fetchTobaccodata';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const TobaccoChart = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await fetchTobaccoData();
        setData(results);
        processChartData(results);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const processChartData = (data) => {
    const labels = data.map(item => item.date); // Modify as needed based on data structure
    const values = data.map(item => item.count); // Modify as needed based on data structure

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Tobacco Problems Over Time',
          data: values,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1
        }
      ]
    });
  };

  if (loading) return <p>Loading chart data...</p>;
  if (error) return <p>{error}</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <div>
      <h1>Tobacco Problems Over Time</h1>
      <Line data={chartData} />
    </div>
  );
};

export default TobaccoChart;
