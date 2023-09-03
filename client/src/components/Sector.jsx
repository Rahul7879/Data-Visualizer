import React from 'react';
import { Chart } from 'react-google-charts';

const Sector = ({ data }) => {

  const sectorCounts = {};

  data.forEach((item) => {
    const sector = item.sector;
    if (!sectorCounts[sector]) {
      sectorCounts[sector] = 1;
    } else {
      sectorCounts[sector]++;
    }
  });

  const chartData = [['Sector', 'Count']];
  for (const sector in sectorCounts) {
    chartData.push([sector, sectorCounts[sector]]);
  }

  const barChartOptions = {
    title: 'Sector Distribution',
    legend: { position: 'none' },
  };

  return (
    <div>
    <h2 style={{textAlign: 'center'}}>Sector Visualization</h2>
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

export default Sector;
