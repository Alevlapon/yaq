import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';

function AboutCo() {
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
			<h1 className='title section-title'>О КОМПАНИИ</h1>

			<div className='section-content'>
				<p className='section-text'>«Як» - сеть спортивных мультибрендовых магазинов, в которых представлены экипировка и снаряжение для активного отдыха, хайкинга, треккинга, скайраннинга, бега и других видов спорта и активного отдыха на открытом воздухе.</p>
				<br/>

				<p className='section-text'>Товары мы приобретаем  у официальных дистрибьюторов и производителей, поэтому гарантируем качество представленного у нас снаряжения. Если у вас нет возможности посетить наши магазины, мы можем доставить заказанный вами товар в любой населенный пункт страны.</p>
				<br/>

				<p className='section-text'>Адрес:</p>
				<p className='section-text'>050010, Казахстан, г. Алматы, ул. Бегалина, д. 68, уг. ул. Кабанбай Батыра</p>
				<p className='section-text'>Телефон: +7 701 135 41 46, +7 775 656 48 27</p>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 8.75rem;
	
	.section-title {
		font-size: 80px;
		font-weight: 500;
	}
	
	.section-content {
		width: 74.576%;
		margin-top: 2.5rem;
	}
	
	.section-text {
		font-size: 18px;
		font-weight: 300;
	}
	
	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 8.75rem;
	}

	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}
	}

	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
		}

		.section-text {
			font-size: 14px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 50px;
		}

		.section-text {
			font-size: 12px;
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
		
		.section-content {
			width: 100%;
			line-height: 30px;
			padding: 0 5.5556vw 8.125rem;
			margin-top: 1.875rem;
		}
		
		.section-text {
			font-size: 16px;
		}
	}
`

export default AboutCo;