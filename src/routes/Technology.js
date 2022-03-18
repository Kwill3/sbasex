import React, { useState } from 'react';
import Data from '../data.json';

function Technology() {
  let [tech, setTech] = useState(0);
  const navButton = document.getElementsByClassName('grid-tech-nav-button');

  function setVehicle() {
    setTech(tech = 0);
    navButton[0].classList.add('active');
    navButton[1].classList.remove('active');
    navButton[2].classList.remove('active');
  }
  function setPort() {
    setTech(tech = 1);
    navButton[1].classList.add('active');
    navButton[0].classList.remove('active');
    navButton[2].classList.remove('active');
  }
  function setCapsule() {
    setTech(tech = 2);
    navButton[2].classList.add('active');
    navButton[0].classList.remove('active');
    navButton[1].classList.remove('active');
  }

  return (
    <>
      <div className="tech-bg"></div>
      <div className='grid-tech'>
        <h3 className='grid-tech-header'>
          <span>03</span>
          SPACE LAUNCH 101
        </h3>
        <picture className='grid-tech-picture'>
          <source media='(max-width: 999px)' srcSet={Data.technology[tech].images.landscape}/>
          <source media='(min-width: 1000px)' srcSet={Data.technology[tech].images.portrait}/>
          <img src={Data.technology[tech].images.landscape} alt="technology"/>
        </picture>
        <nav className='grid-tech-nav'>
          <button className='grid-tech-nav-button active' onClick={setVehicle}>1</button>
          <button className='grid-tech-nav-button' onClick={setPort}>2</button>
          <button className='grid-tech-nav-button' onClick={setCapsule}>3</button>
        </nav>
        <div className="grid-tech-text">
          <p className='grid-tech-text-title'>THE TERMINOLOGY...</p>
          <h4 className='grid-tech-text-name'>{Data.technology[tech].name}</h4>
          <p className='grid-tech-text-desc'>{Data.technology[tech].description}</p>
        </div>
      </div>
    </>
  )
}

export default Technology;