import React from 'react';
import Data from '../data.json';

function Destination() {

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
					<source srcSet={Data.destinations[0].images.webp} type="image/webp" />
					<source srcSet={Data.destinations[0].images.png} type="image/png" /> 
					<img src={Data.destinations[0].images.png} alt="Moon"/>
				</picture>
				<div className='destination-info-text'>
					<nav className='destination-info-text-links'>
						<a href="/">Moon</a>
						<a href="/">Mars</a>
						<a href="/">Europa</a>
						<a href="/">Titan</a>
					</nav>
					<h4 className='destination-info-text-title'>
						{Data.destinations[0].name}
					</h4>
					<p className='destination-info-text-desc'>
						{Data.destinations[0].description}
					</p>
					<hr />
					<div className='destination-info-text-data'>
						<div className='destination-info-text-data-dist'>
							<h5>
								AVG. DISTANCE
							</h5>
							<p>
								{Data.destinations[0].distance}
							</p>
						</div>
						<div className='destination-info-text-data-time'>
							<h5>
								EST. TRAVEL TIME
							</h5>
							<p>
								{Data.destinations[0].travel}
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