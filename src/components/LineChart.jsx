import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Body Mass Index (BMI)',
          data: [],
          borderWidth: 2,
          fill: false,
          borderColor: 'rgba(0, 238, 131, 0.8)', // Default color
          backgroundColor: 'rgba(0, 238, 131, 0.2)', // For filling area if needed
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 50, // Set a sensible max value for BMI
            title: {
              display: true,
              text: 'BMI'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        },
      },
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, []);

  const calculateBMI = (weight, height) => {
    if (weight <= 0 || height <= 0) return null;
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const addData = () => {
    if (!chart) return;

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const bmi = calculateBMI(weightValue, heightValue);

    if (date && !isNaN(bmi) && bmi <= 50) {
      const newLabel = date;
      const newData = { label: newLabel, bmi };

      // Create an array of current data with new entry
      const dataEntries = chart.data.labels.map((label, index) => ({
        label,
        bmi: chart.data.datasets[0].data[index]
      }));

      dataEntries.push(newData);

      // Sort the entries by date
      dataEntries.sort((a, b) => new Date(a.label) - new Date(b.label));

      // Update chart data
      chart.data.labels = dataEntries.map(entry => entry.label);
      chart.data.datasets[0].data = dataEntries.map(entry => entry.bmi);

      // Update line color based on the latest BMI value
      const latestBMI = dataEntries[dataEntries.length - 1].bmi;
      const color = latestBMI < 18.5 || latestBMI > 24.9 ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 238, 131, 0.8)';
      chart.data.datasets[0].borderColor = color;

      chart.update();
    } else {
      alert("Please enter a valid date and ensure that weight and height are positive numbers.");
    }
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <canvas
        ref={chartRef}
        style={{ width: '100%', height: '100%' }} 
      />
      <div style={{ marginBottom: '10px' }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter date"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default LineChart;
