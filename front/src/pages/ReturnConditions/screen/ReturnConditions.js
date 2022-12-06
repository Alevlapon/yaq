import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';

function ReturnConditions() {
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
			<h1 className='title section-title'>УСЛОВИЯ ВОЗВРАТА</h1>

			<div className='section-content'>
				<p className='section-mini-header'>Курьерская доставка по Алматы</p>
				
				<br/>
				<p className='section-text'>Условия доставки:</p>
				<ul>
					<li className='section-text'>- Сроки доставки – от 1 до 3 рабочих дней;</li>
					<li className='section-text'>- При заказе на сумму до 25 000 тенге доставка за счет клиента.</li>
					<li className='section-text'>- При заказе на сумму от 25 000 тенге бесплатно</li>
				</ul>

				<br/>
				<p className='section-text'>Способы оплаты:</p>
				<ul>
					<li className='section-text'>- Оплата банковской картой</li>
					<li className='section-text'>- Оплата при помощи сервиса Kaspi QR</li>
					<li className='section-text'>- Оплата при помощи сервиса Kaspi RED</li>
					<li className='section-text'>- Оплата наличными (осуществляется только при самовывозе в г.Алматы).</li>
				</ul>
				
				<br/>
				<p className='section-text'>Выдача заказа осуществляется в розничном магазине “Як” по адресу: г. Алматы, ул. Бегалина, д. 68, уг. ул. Кабанбай Батыра в рабочие часы магазина (по предварительному согласованию).</p>
				
				<br/>
				<p className='section-text'>Заказ необходимо забрать в течении 48 часов с момента уведомления о готовности к самовывозу.</p>
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

	.section-mini-header {
		font-size: 18px;
		font-weight: 500;
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

		.section-mini-header,
		.section-text {
			font-size: 17px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.section-mini-header,
		.section-text {
			font-size: 16px;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
		}

		.section-mini-header,
		.section-text {
			font-size: 15px;
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
		
		.section-mini-header,
		.section-text {
			font-size: 16px;
		}
	}
`

export default ReturnConditions;