import React from 'react';
import { Chart } from 'react-google-charts';

const TopicWise = ({ data }) => {
  const topicCounts = {};

  data.forEach((item) => {
    const topic = item.topic;
    if (!topicCounts[topic]) {
      topicCounts[topic] = 1;
    } else {
      topicCounts[topic]++;
    }
  });


  const chartData = [['Topic', 'Count']];
  for (const topic in topicCounts) {
    chartData.push([topic, topicCounts[topic]]);
  }


  const pieChartOptions = {
    title: 'Topic Distribution',
    pieHole: 0.4, 
  };
  
const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    <div>
    <h2 style={{textAlign: 'center'}}>Topic Distribution</h2>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default TopicWise;
