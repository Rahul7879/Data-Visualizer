import React from 'react';
import { Chart } from 'react-google-charts';

const EndYearAreaChart = ({ data }) => {
  const endYearCounts = {};

  data.forEach((item) => {
    const endYear = item.end_year;
    if (endYear !== "") {
      if (!endYearCounts[endYear]) {
        endYearCounts[endYear] = 1;
      } else {
        endYearCounts[endYear]++;
      }
    }
  });

  
  const chartData = [['End Year', 'Count']];
  for (const endYear in endYearCounts) {
    chartData.push([parseInt(endYear), endYearCounts[endYear]]);
  }


  chartData.sort((a, b) => a[0] - b[0]);

  const areaChartOptions = {
    title: 'End Year Data',
    legend: { position: 'none' },
    hAxis: {
      title: 'End Year',
    },
    vAxis: {
      title: 'Count',
      minValue: 0,
    },
    chartArea: { width: '80%', height: '70%' },
    isStacked: true,
  };

  return (
    <div>
      <Chart
        chartType="AreaChart"
        data={chartData}
        options={areaChartOptions}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default EndYearAreaChart;
