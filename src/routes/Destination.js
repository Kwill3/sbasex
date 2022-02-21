import React from 'react';
import Data from '../data.json';

function Destination() {

  return (
    <div>
      <h3>01 PICK YOUR DESTINATION</h3>
      <picture>
        <source srcSet={Data.destinations[0].images.webp} type="image/webp" />
        <source srcSet={Data.destinations[0].images.png} type="image/png" /> 
        <img src={Data.destinations[0].images.png} alt="Moon"/>
      </picture>
      <nav>
        <a href="/">Moon</a>
      </nav>
      <h4>{Data.destinations[0].name}</h4>
      <p>{Data.destinations[0].description}</p>
      <div>
        <p>AVG. DISTANCE</p>
        <h5>{Data.destinations[0].distance}</h5>
      </div>
      <div>
        <p>EST. TRAVEL TIME</p>
        <h5>{Data.destinations[0].travel}</h5>
      </div>
    </div>
  )
}

export default Destination;