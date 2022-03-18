import React, { useState } from 'react';
import Data from '../data.json';

function Crew() {
  let [page, setPage] = useState(0);
  const navButton = document.getElementsByClassName("grid-crew-nav-button");

  function setDoug(e) {
    setPage(page = 0);
    navButton[1].style.opacity = '0.17';
    navButton[2].style.opacity = '0.17';
    navButton[3].style.opacity = '0.17';
    e.target.style.opacity = '1';
  }
  function setMark(e) {
    setPage(page = 1);
    navButton[0].style.opacity = '0.17';
    navButton[2].style.opacity = '0.17';
    navButton[3].style.opacity = '0.17';
    e.target.style.opacity = '1';
  }
  function setVict(e) {
    setPage(page = 2);
    navButton[0].style.opacity = '0.17';
    navButton[1].style.opacity = '0.17';
    navButton[3].style.opacity = '0.17';
    e.target.style.opacity = '1';
  }
  function setAnou(e) {
    setPage(page = 3);
    navButton[0].style.opacity = '0.17';
    navButton[1].style.opacity = '0.17';
    navButton[2].style.opacity = '0.17';
    e.target.style.opacity = '1';
  }
  function hoverOpacity(e) {
    if (e.target.style.opacity !== '1') {
      e.target.style.opacity = '0.5';
    }
  }
  function revertOpacity(e) {
    if (e.target.style.opacity === '0.5') {
      e.target.style.opacity = '0.17';
    }
  }
  const defaultCrew = {
    opacity: '1'
  }

  return (
    <>
      <div className="crew-bg"></div>
      <div className='grid-crew'>
        <h3 className='grid-crew-header'>
          <span>02</span>
          MEET YOUR CREW
        </h3>
        <picture className='grid-crew-picture'>
          <source srcSet={Data.crew[page].images.webp} type="image/webp" />
          <source srcSet={Data.crew[page].images.png} type="image/png" /> 
          <img src={Data.crew[page].images.png} alt="crew"/>
        </picture>
        <nav className='grid-crew-nav'>
          <button className='grid-crew-nav-button' style={defaultCrew} onClick={setDoug} onMouseOver={hoverOpacity} onMouseLeave={revertOpacity}>
            <span>{Data.crew[0].role}</span>
          </button>
          <button className='grid-crew-nav-button' onClick={setMark} onMouseOver={hoverOpacity} onMouseLeave={revertOpacity}>
            <span>{Data.crew[1].role}</span>
          </button>
          <button className='grid-crew-nav-button' onClick={setVict} onMouseOver={hoverOpacity} onMouseLeave={revertOpacity}>
            <span>{Data.crew[2].role}</span>
          </button>
          <button className='grid-crew-nav-button' onClick={setAnou} onMouseOver={hoverOpacity} onMouseLeave={revertOpacity}>
            <span>{Data.crew[3].role}</span>
          </button>
        </nav>
        <div className="grid-crew-text">
          <p className='grid-crew-text-role'>{Data.crew[page].role}</p>
          <h4 className='grid-crew-text-name'>{Data.crew[page].name}</h4>
          <p className='grid-crew-text-bio'>{Data.crew[page].bio}</p>
        </div>
      </div>
    </>

  )
}

export default Crew;