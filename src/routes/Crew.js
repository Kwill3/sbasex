import React from 'react';
import Data from '../data.json';

function Crew() {
  return (
    <>
      <div className="crew-bg"></div>
      <div className='grid-crew'>
        <h3 className='grid-crew-header'>
          <span>02 </span>
          MEET YOUR CREW
        </h3>
        <picture className='grid-crew-picture'>
          <source srcSet={Data.crew[0].images.webp} type="image/webp" />
          <source srcSet={Data.crew[0].images.png} type="image/png" /> 
          <img src={Data.crew[0].images.png} alt="crew"/>
        </picture>
        <nav className='grid-crew-nav'>
          <button><span>{Data.crew[0].role}</span></button>
          <button><span>{Data.crew[1].role}</span></button>
          <button><span>{Data.crew[2].role}</span></button>
          <button><span>{Data.crew[3].role}</span></button>
        </nav>
        <div className="grid-crew-text">
          <p className='grid-crew-text-role'>{Data.crew[0].role}</p>
          <h4 className='grid-crew-text-name'>{Data.crew[0].name}</h4>
          <p className='grid-crew-text-bio'>{Data.crew[0].bio}</p>
        </div>
      </div>
    </>

  )
}

export default Crew;