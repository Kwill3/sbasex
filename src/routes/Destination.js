import React, { useState } from 'react';
import Data from '../data.json';

function Destination() {
	let [dest, setDest] = useState(0);
	const navButton = document.getElementsByClassName('destination-info-text-nav-link');

	function setMoon() {
		setDest(dest = 0);
		navButton[0].classList.add('active');
		navButton[1].classList.remove('active');
		navButton[2].classList.remove('active');
		navButton[3].classList.remove('active');
	}
	function setMars() {
		setDest(dest = 1);
		navButton[1].classList.add('active');
		navButton[0].classList.remove('active');
		navButton[2].classList.remove('active');
		navButton[3].classList.remove('active');
	}
	function setEuropa() {
		setDest(dest = 2);
		navButton[2].classList.add('active');
		navButton[0].classList.remove('active');
		navButton[1].classList.remove('active');
		navButton[3].classList.remove('active');
	}
	function setTitan() {
		setDest(dest = 3);
		navButton[3].classList.add('active');
		navButton[0].classList.remove('active');
		navButton[1].classList.remove('active');
		navButton[2].classList.remove('active');
	}

	return (
    <>
    	<div className="dest-bg"></div>
    	<div className='destination'>
			<h3 className='destination-header'>
				<span>01</span>
				Pick your destination
			</h3>
			<div className='destination-info'>
				<picture className='destination-info-picture'>
					<source srcSet={Data.destinations[dest].images.webp} type="image/webp" />
					<source srcSet={Data.destinations[dest].images.png} type="image/png" /> 
					<img src={Data.destinations[dest].images.png} alt="Moon"/>
				</picture>
				<div className='destination-info-text'>
					<nav className='destination-info-text-nav'>
						<p onClick={setMoon} className='destination-info-text-nav-link active'>Moon</p>
						<p onClick={setMars} className='destination-info-text-nav-link'>Mars</p>
						<p onClick={setEuropa} className='destination-info-text-nav-link'>Europa</p>
						<p onClick={setTitan} className='destination-info-text-nav-link'>Titan</p>
					</nav>
					<h4 className='destination-info-text-title'>
						{Data.destinations[dest].name}
					</h4>
					<p className='destination-info-text-desc'>
						{Data.destinations[dest].description}
					</p>
					<hr />
					<div className='destination-info-text-data'>
						<div className='destination-info-text-data-dist'>
							<h5>
								AVG. DISTANCE
							</h5>
							<p>
								{Data.destinations[dest].distance}
							</p>
						</div>
						<div className='destination-info-text-data-time'>
							<h5>
								EST. TRAVEL TIME
							</h5>
							<p>
								{Data.destinations[dest].travel}
							</p>
						</div>
					</div>
				</div>
        	</div>
      	</div>
    </>

  	)
}

export default Destination;