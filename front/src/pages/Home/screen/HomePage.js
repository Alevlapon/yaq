import React, { useEffect } from 'react';
import About from '../components/About';
import Services from '../components/Services';
import Hero from '../components/Hero';
import { UserState } from '../../../context/UserContext';

function HomePage() {
	const {
		showLogin,
		showSignup
	} = UserState();
	
	useEffect(() => {
		if (showLogin || showSignup) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showLogin, showSignup])
	
  	return (
		<main>
	 		<Hero/>
	 		<About/>
			<Services/>
		</main>
  	);
}

export default HomePage;