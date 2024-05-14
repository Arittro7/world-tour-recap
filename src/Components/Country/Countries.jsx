import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Country.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) =>{
    console.log('This Country has been Visited');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlag = flag =>{
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
  }

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])


  return (
    <div>
      <h2>Country: {countries.length}</h2>
      {/* visited Countries */}
      <div>
        <h2>Visited Countries : {visitedCountries.length} </h2>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      {/* Visited Flags */}
      <div className="flag-container">
          {
            visitedFlags.map((flag, idx) => <img key={idx} src={flag} ></img>)
          }
      </div>
      <div className="country-container">
      {
        countries.map(country => <Country key={countries.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlag={handleVisitedFlag}
          country ={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;