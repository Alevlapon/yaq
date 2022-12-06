import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';

function DeliveryPayment() {
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
			<h1 className='title section-title'>ДОСТАВКА И ОПЛАТА</h1>
			
			<div className='section-content'>
				<p className='section-mini-header'>ВОЗВРАТ ТОВАРА</p>
				<br/>
				
				<p className='section-text'>Возврат приобретенных в магазине «Як» товаров осуществляется в розничном магазине Limpopo - Outdoor по адресу г. Алматы, ул. Бегалина, д. 68, уг. ул. Кабанбай Батыра ежедневно в рабочие часы магазина (по предварительному согласованию).</p>
				<br/>

				<p className='section-mini-header'>СРОК ОБМЕНА И ВОЗВРАТА ТОВАРА</p>
				<br/>

				<p className='section-text'>Срок возврата товара надлежащего качества составляет 14 дней с момента получения товара.</p>
				<br/>

				<p className='section-text'>Причины для возврата товара:</p>
				<ul>
					<li className='section-text'>- Не подошел размер, фасон, длина и т.п.</li>
					<li className='section-text'>- Наличие дефекта/брака</li>
				</ul>
				<br/>

				<p className='section-text'>*Обмен и возврат товара производится, если указанный товар не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки, товарные или кассовые чеки, выданные потребителю вместе с проданным товаром.</p>
				<br/>
				
				<p className='section-mini-header'>ВОЗВРАТ ЗАКАЗОВ, ДОСТАВЛЕННЫХ ПО АЛМАТЫ КУРЬЕРОМ</p>
				<br/>

				<p className='section-text'>Покупатель может самостоятельно вернуть не подошедший товар.</p>
				<br/>

				<p className='section-text'>Для возврата заказа, оплаченного наличными средствами, предусматривает наличие:</p>
				<ul>
					<li className='section-text'>- Удостоверения личности;</li>
					<li className='section-text'>- Фискальный чек на возвращаемые товары;</li>
					<li className='section-text'>- Основанием для возврата является составленное покупателем заявление на возврат товара (заполняется в магазине)</li>
				</ul>
				<br/>
				
				<p className='section-mini-header'>ДЛЯ ВОЗВРАТА ЗАКАЗА, ОПЛАЧЕННОГО ПЛАТЕЖНОЙ КАРТОЙ ЧЕРЕЗ POS-ТЕРМИНАЛ ИЛИ СЕРВИС ИНТЕРНЕТ ЭКВАЙРИНГА НА САЙТЕ НЕОБХОДИМО ПРИ СЕБЕ ИМЕТЬ:</p>
				<br/>

				<ul>
					<li className='section-text'>- Удостоверения личности;</li>
					<li className='section-text'>- Фискальный чек (накладная) на возвращаемые товары;</li>
					<li className='section-text'>- Основанием для возврата является составленное покупателем заявление на возврат товара (заполняется в магазине).</li>
					<li className='section-text'>- Возврат осуществляется на платежную карту, откуда была произведена оплата, через POS-терминал.</li>
				</ul>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 9.375rem;

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
		padding: 1.875rem 9vw 9.375rem;
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

export default DeliveryPayment;