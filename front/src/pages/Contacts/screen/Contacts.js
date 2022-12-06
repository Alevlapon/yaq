import React, { useEffect } from 'react';
import styled from 'styled-components';
import instagram from '../assets/instagram-icon.svg';
import telegram from '../assets/telegram-icon.svg';
import whatsapp from '../assets/whatsapp-icon.svg';
import { UserState } from '../../../context/UserContext';

function Contacts() {
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
	  	<Wrapper>
		 	<h1 className='title section-title'>КОНТАКТЫ</h1>

		 	<div className='section-box'>
				<div className='section-map'>
					<p className='section-text'>Интерактивная карта</p>
				</div>
				
				<div className='section-content'>
					<p className='section-text'><span>Адрес:</span> 050010, Казахстан, г. Алматы, ул. Бегалина, д. 68, уг. ул. Кабанбай Батыра</p>
					<p className='section-text'><span>Телефон:</span> +7 775 656 48 27, +7 701 135 41 46</p>
					<p className='section-text'><span>E-mail:</span> yakastana@gmail.com</p>
					<p className='section-text text'>Где нас также можно найти:</p>
					
					<div className="icons-box">
						<div className='button section-icon'>
							<img src={instagram} alt="instagram icon"/>
						</div>
						<div className='button section-icon'>
							<img src={telegram} alt="instagram icon"/>
						</div>
						<div className='button section-icon'>
							<img src={whatsapp} alt="instagram icon"/>
						</div>
					</div>
				</div>

		 </div>
	 </Wrapper>
	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 10rem;

	.section-title {
		font-size: 80px;
		font-weight: 500;
	}

	.section-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.875rem;
	}

	.section-map {
		width: 40.678%;
		height: 23.75rem;
	}
	
	.section-map .section-text {
		width: 100%;
		font-size: 26px;
		font-weight: 400;
		text-align: center;
		background: var(--clr-primary-5);
		margin: 0;
		padding: 10.688rem 0;
	}

	.section-content {
		width: 54.237%;
	}

	.section-text {
		font-size: 24px;
		font-weight: 300;
		margin-bottom: 1.25rem;
	}

	.text {
		margin: 3.125rem 0 0;
	}
	
	.section-text span {
		font-size: 24px;
		font-weight: 400;
	}

	.icons-box {
		display: flex;
		gap: 1.25rem;
		margin-top: 0.625rem;
	}

	.section-icon {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--clr-black);
	}

	@media (max-width: 1400px) {
		.section-map {
			height: 21.25rem;
		}

		.section-map .section-text {
			padding: 9.438rem 0;
		}

		.section-text {
			font-size: 22px;
		}

		.section-icon {
			width: 2.188rem;
			height: 2.188rem;
		}

		.section-icon img {
			width: 1.063rem;
			height: 1.063rem;
		}
	}
	
	@media (max-width: 1250px) {
		.section-map {
			height: 18.75rem;
		}

		.section-map .section-text {
			padding: 8.188rem 0;
		}

		.section-text {
			font-size: 20px;
		}
 
		.text {
			margin-top: 1.875rem;
		}
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 9.375rem;
	}

	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}
		
		.section-map {
			height: 17.5rem;
		}
		
		.section-map .section-text {
			padding: 7.563rem 0;
		}
	}
		
	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
		}

		.section-map {
			width: 45%;
			height: 15.625rem;
		}

		.section-map .section-text {
			padding: 6.625rem 0;
		}
		
		.section-content {
			width: 48%;
		}

		.section-text span {
			font-size: 17px;
		}

		.section-text {
			font-size: 16px;
			margin-bottom: 0.625rem;
		}

		.text {
			margin-top: 1.25rem;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.section-map {
			height: 13.125rem;
		}

		.section-map .section-text {
			font-size: 22px;
			padding: 5.563rem 0;
		}

		.section-text span {
			font-size: 15px;
		}

		.section-text {
			font-size: 14px;
			margin-bottom: 0.375rem;
		}

		.text {
			margin-top: 1rem;
		}

		.section-icon {
			width: 1.875rem;
			height: 1.875rem;
		}

		.section-icon img {
			width: 0.938rem;
			height: 0.938rem;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
		}

		.section-map {
			width: 48%;
			height: 11.25rem;
		}

		.section-map .section-text {
			font-size: 18px;
			padding: 4.797rem 0;
		}

		.section-content {
			width: 46%;
		}

		.section-text {
			font-size: 13.5px;
		}

		.section-icon {
			width: 1.5rem;
			height: 1.5rem;
		}

		.section-icon img {
			width: 0.7rem;
			height: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		padding: 0;
		background-color: var(--clr-primary-6);

		.section-title {
			font-size: 28px;
			line-height: 3.125rem;
			background-color: var(--clr-white);
			padding: 1.25rem 5.5556vw;
		}

		.section-box {
			flex-direction: column;
			padding: 0 5.5556vw 7.5rem;
			margin-top: 1.875rem;
		}
		
		.section-map {
			width: 100%;
			height: 20rem;
			background-color: var(--clr-white);
			padding: 10px
		}
		
		.section-map .section-text {
			font-size: 20px;
			font-weight: 300;
			padding: 8.469rem 0;
		}

		.section-content {
			width: 100%;
			margin-top: 30px;
		}
		
		.section-text {
			font-size: 16px;
			margin-bottom: 0.625rem;
		}

		.text {
			display: none;
		}

		.icons-box {
			width: 130px;
			margin: 20px auto 0;
		}

		.section-icon {
			width: 30px;
			height: 30px;
		}

		.section-icon img {
			width: 17.4px;
			height: 17.4px;
		}
 	}
`

export default Contacts;