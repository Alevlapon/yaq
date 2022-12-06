import React, { useState } from 'react';
import arrow from '../assets/blackArrow.svg';

function QABox({question, answer}) {
	const [isActive, setActive] = useState("false");
	
	const handleToggle = () => {
		setActive(!isActive);
	};

  	return (
		<div className={isActive ? 'section-box section-close' : 'section-box section-open'}>
			<div className='section-content'>
				<p className='section-question'>{question}</p>
				<p className='section-text'>{answer}</p>
			</div>
					
			<img src={arrow} alt="arrow icon" className='button section-icon' onClick={handleToggle}/>
		</div>
  	);
}

export default QABox;