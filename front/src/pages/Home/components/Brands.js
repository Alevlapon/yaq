import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brands from '../../../data/brand_data';

function Brands() {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	};

  	return (
		<Wrapper>
			<h3 className='section-title title'>Бренды</h3>
			
			<Slider {...settings}>
				{brands.map((brand) => {
					return(
						<img src={brand} alt="brand logo" className=' button brand-logo'/>
					);
				})}
			</Slider>
		</Wrapper>
  	)
}

const Wrapper = styled.nav`
	padding-top: 6.875rem;
	
	.section-title {
		font-size: 30px;
		font-weight: 500;
		width: max-content;
		line-height: 1.875rem;
		margin-bottom: 25px;
	}

	.slick-slide > div {
		display: grid;
		place-items: center;
		height: 3.75rem;
	}
	
	.slick-slide {
		margin: 0 0.987rem;
	}

	.slick-prev,
	.slick-next,
	.slick-prev:before,
	.slick-next:before {
		display: none;
		left: 0;
	}

	@media (max-width: 1024px) {
		padding-top: 60px;

		.section-title {
			position: relative;
			font-size: 22px;
			margin-bottom: 20px;
			padding-bottom: 5px; 
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
	}
`

export default Brands;