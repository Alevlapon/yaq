import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import images from '../../../data/company_data';
import pageLeft from '../assets/page-left.svg';
import pageRight from '../assets/page-right.svg';

const CompanyImages = () => {
	const settings = {
		infinite: true,
  		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					dots: true
				}
      	}
		]
	};

	return(
		<BoxContainer>
			<Slider {...settings}>
				{images.map((image) => {
					return(
						<p className='button co-image title'>{image.name}</p>
					);
				})}
			</Slider>
		</BoxContainer>
	);
}

const BoxContainer = styled.nav`
	.slick-prev {
		width: 0;
		left: 0;
		z-index: 1;
	}

	.slick-next {
		width: 0;
		right: 0;
	}

	.slick-prev:before,
	.slick-next:before {
		position: absolute;
		content: "";
		background-size: 26px 40px;
		width: 26px; 
		height: 40px;
	}
	
	.slick-prev:before {
		background-image: url(${pageLeft});
		margin-left: -2.875vw;
	}
	
	.slick-next:before {
		background-image: url(${pageRight});
		margin-left: 1.25vw;
	}

	.co-image {
		text-align: center;
		font-size: 60px;
		font-weight: 400;
		margin: 42.8125% 0;
	}

	@media (max-width: 1440px) {
		.co-image {
		  font-size: 48px;
		  margin: 43.8079% 0;
		}
	}

	@media (max-width: 1255px) {
		.co-image {
			font-size: 46px;
			margin: 41.7045% 0;
		}

		.slick-prev:before {
			margin-left: -3.125vw;
		}
		
		.slick-next:before {
			margin-left: 1vw;
		}
	 }
  
	@media (max-width: 1100px) {
		.slick-prev:before {
			background-size: 18px 32px;
			width: 18px;
			height: 32px;
			margin-left: -3.425vw;
		}
		
		.slick-next:before {
			background-size: 18px 32px;
			width: 18px;
			height: 32px;
			margin-left: 1.3vw;
		}
		
		.co-image {
		  font-size: 40px;
		}
	}
  
	@media (max-width: 768px) {
		.slick-prev:before {
			margin-left: -3.525vw;
		}
		
		.slick-next:before {
			margin-left: 1.1vw;
		}

		.co-image {
		  font-size: 32px;
		}
	}	

	@media (max-width: 722px) {
		.slick-prev:before {
			background-size: 13px 25px;
			width: 13px;
			height: 25px;
			margin-left: -3.225vw;
		}
		
		.slick-next:before {
			background-size: 13px 25px;
			width: 13px;
			height: 25px;
			margin-left: 0.8vw;
		}

		.co-image {
		  font-size: 32px;
		}
	}	

	@media (max-width: 600px) {
		.slick-prev:before {
			background-size: 10px 18px;
			width: 10px;
			height: 18px;
			margin-left: -3.225vw;
		}
		
		.slick-next:before {
			background-size: 10px 18px;
			width: 10px;
			height: 18px;
			margin-left: 0.8vw;
		}

		.co-image {
		  font-size: 23px;
		  margin: 47.27% 0;
		}
	}	

	@media (max-width: 480px) {
		.slick-prev:before,
		.slick-next:before {
			display: none;
		}
	}
`

export default CompanyImages;