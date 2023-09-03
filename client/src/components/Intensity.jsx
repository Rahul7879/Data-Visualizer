import React from 'react';
import { Chart } from 'react-google-charts';

const Intensity = ({ data }) => {

  const intensityCounts = {};

  data.forEach((item) => {
    const intensity = item.intensity;
    if (!intensityCounts[intensity]) {
      intensityCounts[intensity] = 1;
    } else {
      intensityCounts[intensity]++;
    }
  });

  const chartData = [['Intensity', 'Count']];
  for (const intensity in intensityCounts) {
    chartData.push([intensity, intensityCounts[intensity]]);
  }

 
  const barChartOptions = {
    title: 'Intensity Distribution',
    legend: { position: 'none' },
  };

  return (
    <div>
    <h2 style={{textAlign: 'center'}}>Intensity</h2>
      <Chart
        chartType="Bar"
        data={chartData}
        options={barChartOptions}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default Intensity;
