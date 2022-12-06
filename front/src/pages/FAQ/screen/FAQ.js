import React, { useEffect } from 'react';
import styled from 'styled-components';
import questions from '../../../data/questions.js';
import QABox from '../components/QABox';
import { UserState } from '../../../context/UserContext';

function FAQ() {
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
			<h1 className='title section-title'>FAQ</h1>

			{questions.map((question) => {
				return(
					<QABox key={question.id} {...question}/>
				);
			})}
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 19.375vw 13.75rem 13.125vw;
	
	.section-title {
		font-size: 80px;
		font-weight: 500;
		margin-bottom: 1.25rem;
	}

	.section-box {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: end;
		padding-bottom: 1.875rem;
	}
	
	.section-box:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		background: var(--clr-primary-3);
	}
	
	.section-content {
		width: 81.4815%;
		margin-top: 3.125vw;
	}
	
	.section-question {
		font-size: 24px;
		font-weight: 500;
	}
	
	.section-text {
		font-size: 20px;
		font-weight: 300;
		margin-top: 1.25rem;
	}

	.section-icon {
		width: 19px;
		height: 12px;
		margin-bottom: -0.313rem;
	}

	.section-close.section-box {
		padding-bottom: 1.25rem;
	}

	.section-close .section-text {
		height: 0;
		overflow: hidden;
		margin: 0;
	}
		
	.section-close .section-icon {
		transform: rotate(-180deg);
		margin-bottom: 0.438rem;
	}

	.section-open .section-text {
		height: 100%;
	}

	.section-open .section-icon {
		transform: rotate(0deg);
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 15.25vw 13.75rem 9vw;
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

		.section-question {
			font-size: 21px;
		}
		
		.section-text {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {
		padding: 0;
		background-color: var(--clr-primary-6);
		padding-bottom: 8.125rem;

		.section-title {
			font-size: 28px;
			line-height: 3.125rem;
			background-color: var(--clr-white);
			margin: 0;
			padding: 1.25rem 5.5556vw;
		}

		.section-box {
			padding-bottom: 2.5rem;
			margin: 0 5.5556vw;
		}
		
		.section-content {
			width: 100%;
			margin-top: 1.875rem;
		}

		.section-question {
			font-size: 16px;
		}
		
		.section-text {
			font-size: 16px;
			margin-top: 0.625rem;
		}
	
		.section-icon {
			width: 11px;
			height: 7px;
			margin-bottom: -1.438rem;
		}
	
		.section-close.section-box {
			padding-bottom: 0.625rem;
		}
	
		.section-close .section-icon {
			margin-bottom: 0.563rem;
		}
	}
`

export default FAQ;