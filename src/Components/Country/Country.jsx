import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
  // console.log(country);
  const{name, flags, cca3, population} = country;

  const[visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited)
  }
  return (
    <div className='country'>
      <h2>Country Name : {name?.common} </h2>
      <img src={flags.png} alt="" />
      <h2>Population : {population}</h2>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>{visited ? 'Visited': 'Going' }</button>
      {visited ? 'I have visited this COUNTRY' : 'One day I will visit In-Sha-Allah'}
    </div>
  );
};

export default Country;

