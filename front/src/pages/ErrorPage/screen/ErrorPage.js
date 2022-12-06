import React, { useEffect } from 'react';
import styled from 'styled-components';
import error from '../assets/error.svg';
import { UserState } from '../../../context/UserContext';

function ErrorPage({ title, text }) {
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
			<img src={error} alt="error smile" className='error-icon'/>
			<h1 className='error-title title'>{title}</h1>
			<p className='error-text'>{text}</p>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	text-align: center;
	width: 100%;
	padding-top: 6.25rem;

	.error-title {
		width: 30rem;
		line-height: 4.375rem;
		text-align: center;
		font-size: 40px;
		font-weight: 500;
		margin: 1.875rem auto 0;
	}

	.error-text {
		width: 42.5rem;
		line-height: 2.5rem;
		font-size: 20px;
		font-weight: 400;
		margin: 1.25rem auto 14.375rem;
	}

	@media (max-width: 992px) {
		.error-icon {
			width: 15rem;
			height: 15rem;
		}

		.error-title {
			font-size: 36px;
		}
	}

	@media (max-width: 768px) {
		.error-icon {
			width: 13rem;
			height: 13rem;
		}

		.error-title {
			font-size: 32px;
		}
		
		.error-text {
			font-size: 18px;
			text-align: center;
		}
	}
	
	@media (max-width: 480px) {
		.error-icon {
			width: 10rem;
			height: 10rem;
		}

		.error-title,
		.error-text {
			width: 100%;
		}

		.error-title {
			line-height: 3.125rem;
			font-size: 24px;
		}
	
		.error-text {
			line-height: 1.875rem;
			font-size: 16px;
		}
	}
`

export default ErrorPage;