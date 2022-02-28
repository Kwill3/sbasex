import React from 'react';
import Data from '../data.json';

function Crew() {
  return (
    <div>
      <h3>
        <span>02 </span>
        MEET YOUR CREW
      </h3>
      <picture>
        <source srcSet={Data.crew[0].images.webp} type="image/webp" />
        <source srcSet={Data.crew[0].images.png} type="image/png" /> 
        <img src={Data.crew[0].images.png} alt="crew"/>
      </picture>
      <nav>
        <a href="/">1</a>
      </nav>
      <p>{Data.crew[0].role}</p>
      <h4>{Data.crew[0].name}</h4>
      <p>{Data.crew[0].bio}</p>
    </div>
  )
}

export default Crew;