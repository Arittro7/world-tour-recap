import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Country.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountry = country =>{
    console.log('This Country has been Visited');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])


  return (
    <div>
      <h2>Country: {countries.length}</h2>
      <div>
        <h2>Visited Countries : {visitedCountries.length} </h2>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="country-container">
      {
        countries.map(country => <Country key={countries.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          country ={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;