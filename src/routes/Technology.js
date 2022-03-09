import React from 'react';
import Data from '../data.json';

function Technology() {
  return (
    <>
      <div className="tech-bg"></div>
      <div className='grid-tech'>
        <h3 className='grid-tech-header'>
          <span>03</span>
          SPACE LAUNCH 101
        </h3>
        <picture className='grid-tech-picture'>
          <source media='(max-width: 999px)' srcSet={Data.technology[0].images.landscape}/>
          <source media='(min-width: 1000px)' srcSet={Data.technology[0].images.portrait}/>
          <img src={Data.technology[0].images.landscape} alt="technology"/>
        </picture>
        <nav className='grid-tech-nav'>
          <button><span>1</span></button>
          <button><span>2</span></button>
          <button><span>3</span></button>
        </nav>
        <div className="grid-tech-text">
          <p className='grid-tech-text-title'>THE TERMINOLOGY...</p>
          <h4 className='grid-tech-text-name'>{Data.technology[0].name}</h4>
          <p className='grid-tech-text-desc'>{Data.technology[0].description}</p>
        </div>
      </div>
    </>
  )
}

export default Technology;