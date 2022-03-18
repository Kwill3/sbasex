import React from 'react';

function Home() {
  const circleBg = document.getElementsByClassName('home-button');
  function circleOpacity() {
    circleBg[0].classList.add('active');
  }
  function revertCircle() {
    circleBg[0].classList.remove('active');
  }

  return (
    <div className='home'>
      <div className="home-text">
        <h1>
            SO, YOU WANT TO TRAVEL TO
            <span>SPACE</span>
        </h1>
        <h2>
            Let's face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we'll give you a truly out of this world experience!
        </h2>
      </div>
      <div className="home-button">
        <button onMouseOver={circleOpacity} onMouseLeave={revertCircle}>EXPLORE</button>
      </div>
    </div>
  )
}

export default Home;