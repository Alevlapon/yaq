import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import images from '../../../data/images';
import pageLeft from '../assets/page-left.svg';
import pageRight from '../assets/page-right.svg';

class Hero extends Component {
  	render() {
    	const settings = {
			autoplay: true,
			infinite: true,
			slidesToShow: 2.23,
			slidesToScroll: 1,
			responsive: [
				{
				  	breakpoint: 992,
				  	settings: {
					 	slidesToShow: 1.95
				  	}
				},
				{
					breakpoint: 768,
				  	settings: {
					 	slidesToShow: 1.5
				  	}
				},
				{
				  	breakpoint: 480,
				  	settings: {
					 	slidesToShow: 1.2
				  	}
				}
			]
		};

    	return (
      	<Wrapper>
        		<Slider {...settings}>
				  	{images.map((image) => {
                  return(
                     <div className="image-box button">
         	            <img src={image} alt="home image" className='home-image'/>
                     </div>
                  );
               })}
				</Slider>
      	</Wrapper>
    	);
 	}
}

const Wrapper = styled.nav`
	max-width: 100%;

	.slick-track {
		margin-left: 38%;
	}

	.slick-slide {
		transform: skew(8.13deg);
	}
	
	.image-box {
		max-width: 43.75vw;
		height: 35rem;
		background-color: var(--clr-primary-3);
		overflow: hidden;
	}

	.home-image {
		width: 112%;
		height: 100%;
		margin: 0 -2.5vw;
		transform: skew(-8.13deg);
		pointer-events: none;
	}

	.slick-prev {
		left: 0%;
		z-index: 1;
		width: 0;
	}

	.slick-next {
		right: 0%;
		width: 0;
	}

	.slick-prev:before,
	.slick-next:before {
		position: absolute;
	}
	
	.slick-prev:before {
		content:"";
		background-image: url(${pageLeft});
		background-size: 33px 50px;
		width: 33px; 
		height: 50px;
		margin-left: 22.3125vw;
	}
	
	.slick-next:before {
		content:"";
		background-image: url(${pageRight});
		background-size: 33px 50px;
		width: 33px; 
		height: 50px;
		margin-left: -22.3125vw;
	}

	@media (max-width: 1510px) {
		.image-box {
			height: 30rem;
		}
	
		.home-image {
			width: 115%;
			margin: 0 -3vw;
		}

		.slick-prev {
			margin-top: -1.25rem;
		}

		.slick-next {
			margin-top: -1.25rem;
		}

		.slick-prev:before {
			margin-left: 19.813vw;
		}
		
		.slick-next:before {
			margin-left: -19.813vw;
		}
	}
	
	@media (max-width: 992px) {
		.slick-track {
			margin-left: 25%;
		}
		
		.image-box {
			max-width: 50vw;
			height: 25rem;
		}

		.home-image {
			margin: 0 -3.4vw;
		}

		.slick-prev:before {
			background-size: 28px 40px;
			width: 28px; 
			height: 40px;
			margin-left: 15vw;
		}
		
		.slick-next:before {
			background-size: 28px 40px;
			width: 28px; 
			height: 40px;
			margin-left: -15vw;
		}
	}
	
	@media (max-width: 768px) {
		.slick-track {
			margin-left: 50%;
		}
		
		.image-box {
			max-width: 65vw;
			height: 18rem;
		}

		.home-image {
			width: 125%
		}

		.slick-prev:before {
			background-size: 22px 35px;
			width: 22px; 
			height: 35px;
			margin-left: 7vw;
		}
		
		.slick-next:before {
			background-size: 22px 35px;
			width: 22px; 
			height: 35px;
			margin-left: -10vw;
			
		}
	}

	@media (max-width: 480px) {
		.slick-track {
			margin-left: 26.5%;
		}
		
		.home-image {
			margin: 0 -4.95vw;
		}

		.image-box {
			max-width: 79.762vw;
			height: 14.375rem;
		}
	
		.slick-prev:before,
		.slick-next:before {
			display: none;
		}
	}
`

export default Hero;