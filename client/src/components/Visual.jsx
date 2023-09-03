import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryWise from './CountryWise';
import TopicWise from './TopicWise';
import Intensity from './Intensity';
import Region from './Region';
import Sector from './Sector';
import EndYearAreaChart from './EndYearAreaChart';

const Visual = () => {
  const [data, setData] = useState([]); 
  const [end_year, setEndyear] = useState(''); 
  const [topic, setTopic] = useState(''); 
  const [sector, setSector] = useState(''); 
  const [region, setRegion] = useState(''); 
  const [pestle, setPestle] = useState(''); 
  const [source, setSource] = useState(''); 
  const [country, setCountry] = useState(''); 
  const [uniqueCountryNames, setUniqueCountryNames] = useState([]);
  const [totalsector, setTotalSector] = useState([]);
  const [totalregion, setTotalRegion] = useState([]);
  const [totalpestle, setTotalPestle] = useState([]);
  const [totalsource, setTotalSource] = useState([]);
  const [totalcountry, setTotalCountry] = useState([]);

  

  useEffect(() => {
    async function fetchData() {
      try {
        const queryString = `&end_year=${end_year}&topic=${topic}&sector=${sector}&region=${region}&pestle=${pestle}&source=${source}&country=${country}`
        const apiUrl = `/api/getdata?${queryString}`;
        const response = await axios.get(`http://localhost:5000${apiUrl}`);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, [end_year, topic, sector, region, pestle, source, country]);

  useEffect(() => {
    async function fetchWholeData() {
      try {
        const queryString = '';
        const apiUrl = `/api/getdata?${queryString}`;
        const response = await axios.get(`http://localhost:5000${apiUrl}`);
        
        const topicLookup = {};
      const sectorLookup = {};
      const regionLookup = {};
      const pestleLookup = {};
      const sourceLookup = {};
      const countryLookup = {};


      const uniqueTopics = [];
      const uniqueSectors = [];
      const uniqueRegions = [];
      const uniquePestles = [];
      const uniqueSources = [];
      const uniqueCountries = [];



      for (let i = 0; i < response.data.length; i++) {
        const topic = response.data[i].topic;
        const sector = response.data[i].sector;
        const region = response.data[i].region;
        const pestle = response.data[i].pestle;
        const source = response.data[i].source;
        const country = response.data[i].country;


        if (!(topic in topicLookup)) {
          topicLookup[topic] = 1;
          uniqueTopics.push(topic); 
        }

        if (!(sector in sectorLookup)) {
          sectorLookup[sector] = 1;
          uniqueSectors.push(sector);
          
        }
        if (!(region in regionLookup)) {
          regionLookup[region] = 1;
          uniqueRegions.push(region);
        }
        if (!(pestle in pestleLookup)) {
          pestleLookup[pestle] = 1;
          uniquePestles.push(pestle);
        }
        if (!(source in sourceLookup)) {
          sourceLookup[source] = 1;
          uniqueSources.push(source);
        }
        if (!(country in countryLookup)) {
          countryLookup[country] = 1;
          uniqueCountries.push(country);
        }
      }

      setUniqueCountryNames(uniqueTopics);
      setTotalSector(uniqueSectors);
      setTotalRegion(uniqueRegions);
      setTotalPestle(uniquePestles);
      setTotalSource(uniqueSources);
      setTotalCountry(uniqueCountries);


      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchWholeData();
  }, []);

  const handleYearChange = (e)=>{
      setEndyear(e.target.value);
  }
  const handleTopicChange = (e)=>{
      setTopic(e.target.value);
  }
  const handleSectorChange = (e)=>{
      setSector(e.target.value);
  }
  const handleRegionChange = (e)=>{
      setRegion(e.target.value);
  }
  const handlePestleChange = (e)=>{
      setPestle(e.target.value);
  }
  const handleSourceChange = (e)=>{
      setSource(e.target.value);
  }
  const handleCountryChange = (e)=>{
      setCountry(e.target.value);
  }
  
  const years = [];
  for (let year = 2001; year <= 2050; year++) {
    years.push(year);
  }
  return (
    <div>
      <h1 className='text-center p-2'>Visualization Dashboard</h1>
 <div className='d-flex row'>
   
<div className="filter col-xs-3 col-sm-3 col-md-2 col-lg-3  ">
  <div className="d-flex flex-column">
     <label>Choose Year</label>
      <select id="yearDropdown" name='end_year' onChange={handleYearChange} value={end_year}>
        {years.map((year) => (
          <option key={year}>
            {year}
          </option>
        ))}
      </select>

      <label>Choose Topic</label>
      <select  onChange={handleTopicChange} value={topic}>
        {uniqueCountryNames.map((topic) => (
          <option key={topic}>
            {topic}
          </option>
        ))}
      </select>
      <label>Choose Sector</label>
      <select  onChange={handleSectorChange} value={sector}>
        {totalsector.map((sector) => (
          <option key={sector}>
            {sector}
          </option>
        ))}
      </select>
      <label>Choose Region</label>
      <select  onChange={handleRegionChange} value={region}>
        {totalregion.map((region) => (
          <option key={region}>
            {region}
          </option>
        ))}
      </select>
      <label>Choose Country</label>
      <select  onChange={handleCountryChange} value={country}>
        {totalcountry.map((country) => (
          <option key={country}>
            {country}
          </option>
        ))}
      </select>

      

      <label>Choose Pestle</label>
      <select  onChange={handlePestleChange} value={pestle}>
        {totalpestle.map((pestle) => (
          <option key={pestle}>
            {pestle}
          </option>
        ))}
      </select>
      <label>Choose Source</label>
      <select  onChange={handleSourceChange} value={source}>
        {totalsource.map((source) => (
          <option key={source}>
            {source}
          </option>
        ))}
      </select>
      </div>
      </div>
      <div className="Visual col-xs-7 col-sm-8 col-md-9 col-lg-9">
      <Intensity data={data}/>
      <Region data= {data}/>
    <CountryWise data={data} />
    <TopicWise data= {data}/>
    <Sector data= {data}/>
    <EndYearAreaChart data= {data}/>


    

  </div>
    </div>
    </div>
  )
}

export default Visual;
