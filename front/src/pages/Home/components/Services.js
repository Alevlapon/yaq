import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.svg';
import Products from './Products';
import Brands from './Brands';
import About from './About';

function Services() {
  	return (
		<Wrapper>
			<Products/>
			<Brands/>
			<About/>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding: 13.75% 13.125% 9.0625%;

	@media (min-width: 481px) {
		.about-container {
			display: none;
		}
   }
	
	@media (max-width: 1100px) {
		padding: 13.75% 9% 9.0625%;
	}

	@media (max-width: 1024px) {
		.slick-dots {
			top: calc(100% + 5px);
		}

		.slick-dots button {
			font-size: 0;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			border: 1px solid var(--clr-black);
			padding: 2px;
			margin: auto;
		}

		.slick-active button {
			background-color: var(--clr-black);
		}

		.slick-dots button:before {
			display: none;
		}
	}

	@media (max-width: 480px) {
		height: 70.625rem;
		padding: 70px 5.5556vw 90px;

		.section-title,
		.image-box,
		.text2 {
			display: block;
		}

		.text1 {
			display: none;
		}

		.section-title.about {
			position: relative;
			font-size: 22px;
			font-weight: 500;
			text-align: center;
			margin: 3.75rem 3.75rem 0.875rem;
			padding-bottom: 0.125rem; 
		}
		
		.section-title:after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 2px;
			background: var(--clr-primary-1);
		}

		.about-container {
			position: relative;
			flex-direction: column;
			margin: 0;
		}

		.image-box {
			position: absolute;
			width: 100%;
			height: 12.5rem;
			margin-top: 145px;
		}

		.co-image {
			font-family: 'Jost';
			font-size: 24px;
			line-height: 40px;
			text-align: center;
			margin: 5rem 0;
		}

		br {
			margin: 0;
		}

		.text2 {
			line-height: 27px;
			padding-bottom: 0;
		}
	
		.home-text:before {
			height: 0;
		}

		@media (max-width: 405px) {
			.image-box {
				margin-top: 172px;
			}
		}

		@media (max-width: 375px) {
			.image-box {
				margin-top: 12.5rem;
			}
		}
	}
`

export default Services;