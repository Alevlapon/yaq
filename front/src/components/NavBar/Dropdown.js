import React, { useState } from 'react';
import styled from 'styled-components';
import AllGoods from './AllGoods';
import LoginButton from '../Button1';
import Header from './Header';
import { UserState } from '../../context/UserContext';

function Dropdown({ setShow, setHide }) {
	const {
		user
	} = UserState();

	const [navbar, setNavbar] = useState(false);
	
	const changeTop = () => {
		if (window.scrollY >= 60) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeTop);

  	return (
		<DropdownContainer className={navbar ? 'active' : ''}>
			<div className='container' onMouseEnter={setShow} onMouseLeave={setHide}>
				<AllGoods/>
				<div className="dd-header-content">
					<Header/>
				</div>

				{ user.auth ?
					null
						:
					<a href="/login" className="login-button button">
						<LoginButton text={"ВХОД"}/>
					</a> 
				}
			</div>
	 	</DropdownContainer>
  	)
}


const DropdownContainer = styled.nav`
	z-index: 2;
	height: 100%;

	.container {
		background: var(--clr-white);
		width: 73.75vw;
		height: 29.375vw;
		padding: 2.5vw 6.25vw 3.75vw;
		margin: 0 13.125vw;
	}

	.dd-header-content {
		display: none;
	}

	.dropdown-menu {
		width: 11.25vw;
	}
	
	.dropdown-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.625vw;
	}

	.dropdown-title {
		line-height: 1.875vw;
		font-size: 1.125vw;
		font-weight: 600;
	}

	.dropdown-icon {
		display: none;
	}

	.dropdown-item {
		height: 1.25vw;
		line-height: 100%;
		margin-bottom: 0.938vw;
	}
	
	.dropdown-link {
		font-size: 1.125vw;
		font-weight: 300;
	}

	.login-button {
		display: none;
		height: 13.889vw;
		margin-top: 5.556vw;
	}

	@media (max-width: 1100px) {
		.container {
			width: 82vw;
			margin: 0 9vw;
		}

		.dropdown-item {
			line-height: 50%;
		}
	}

	@media (max-width: 480px) {
		height: max-content;
		
		.container {
			width: 100vw;
			height: 100%;
			margin: 0;
			padding: 5.556vw 5.556vw 11.111vw;
		}
		
		.dropdown-menu {
			width: 100%;
		}
		
		.dropdown-header {
			border-bottom: 1px solid var(--clr-primary-5);
			margin-bottom: 20px;
		}
		
		.dropdown-icon {
			display: block;
		}
		
		.dropdown-title {
			line-height: 30px;
			font-size: 16px;
			font-weight: 400;
		}
		
		.weighted {
			font-weight: 600;
		}
		
		.dropdown-close .dropdown-item {
			height: 0;
			overflow: hidden;
			margin: 0;
		}

		.dropdown-close .dropdown-icon {
			transform: rotate(90deg);
		}
		
		.dropdown-open .dropdown-item {
			height: 20px;
			line-height: 100%;
			margin-bottom: 10px;
		}

		.dropdown-open .dropdown-icon {
			transform: rotate(-180deg);
		}

		.dropdown-link {
			font-size: 16px;
		}

		.dd-header-content {
			display: block;
		}
		
		.login-button {
			display: block;
		}
	}
`

export default Dropdown;