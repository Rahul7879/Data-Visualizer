import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const CountryWise = ({ data }) => {
  const [uniqueCountryNames, setUniqueCountryNames] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [intensity, setIntensity] = useState([]);


  useEffect(() => {
    
    const countryCounts = data.reduce((counts, document) => {
      const { country } = document;
      if (country) {
        counts[country] = (counts[country] || 0) + 1;
      }
      return counts;
    }, {});


    const countryDataArray = [['Region', 'Relevance']];
    for (const country in countryCounts) {
      countryDataArray.push([country, countryCounts[country]]);
    }

    setUniqueCountryNames(Object.keys(countryCounts));
    setCountryData(countryDataArray);
  }, [data]);

  const pieChartOptions = {
    title: 'Topics Distribution',
  };

  return (
    <div>
    <h2 style={{textAlign: 'center'}}>Country Distribution</h2>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="600px"
        data={countryData}
        options={pieChartOptions}
      />
    </div>
  );
};

export default CountryWise;
