import React from 'react';
import Data from '../data.json';

function Technology() {
  return (
    <div>
      <h3>03 SPACE LAUNCH 101</h3>
      <picture>
        <img src={Data.technology[0].images.landscape} alt="technology"/>
      </picture>
      <nav>
        <a href="/">1</a>
      </nav>
      <p>THE TERMINOLOGY...</p>
      <h4>{Data.technology[0].name}</h4>
      <p>{Data.technology[0].description}</p>
    </div>
  )
}

export default Technology;