import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';

function DiscountSystem() {
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
			<h1 className='title section-title'>ДИСКОНТНАЯ СИСТЕМА</h1>

			<div className='section-content'>
				<p className='section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 15rem;

	.section-title {
		font-size: 80px;
		font-weight: 500;
	}
	
	.section-content {
		width: 74.576%;
		margin-top: 3.125rem;
	}
	
	.section-text {
		font-size: 20px;
		font-weight: 300;
	}
	
	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 15rem;
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
			font-size: 17px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.section-text {
			font-size: 16px;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
		}

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
			padding: 0 5.5556vw 14.375rem;
			margin-top: 1.875rem;
		}
		
		.section-text {
			font-size: 16px;
		}
	}
`

export default DiscountSystem;