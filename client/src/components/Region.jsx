import React from 'react';
import { Chart } from 'react-google-charts';

const Region = ({ data }) => {

  const regionCounts = {};

  data.forEach((item) => {
    const region = item.region;
    if (!regionCounts[region]) {
      regionCounts[region] = 1;
    } else {
      regionCounts[region]++;
    }
  });

  const chartData = [['Region', 'Count']];
  for (const region in regionCounts) {
    chartData.push([region, regionCounts[region]]);
  }

  const barChartOptions = {
    title: 'Region Distribution',
    legend: { position: 'none' },
  };

  return (
    <div>
    <h2 style={{textAlign: 'center'}}>Region Distribution</h2>
      <Chart
        chartType="BarChart"
        data={chartData}
        options={barChartOptions}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default Region;
