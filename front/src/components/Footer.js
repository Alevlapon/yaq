import React from 'react';
import styled from 'styled-components';
import FooterLinkMenu from './FooterLinkMenu';
import FooterShopMenu from './FooterShopMenu';
import FootelContactMenu from './FooterContactMenu';

function Footer() {
  	return (
	 	<Wrapper>
			<div className="footer-container">
				<FooterShopMenu />
				<FooterLinkMenu />
				<FootelContactMenu />
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	width: 100%;
	background-color: var(--clr-black);
	
	.footer-container {
		color: var(--clr-white);
    	display: flex;
		padding: 5rem 13.125vw 5.938rem;
	}

	.footer-menu {
		width 25.424%;
	}

	.footer-header {
		display: flex;
		justify-content: space-between;
		position: relative;
		padding-bottom: 1.25vw;
		margin-bottom: 1.25vw;
	}
	
	.footer-header:before {
		content: "";
		position: absolute;
		width: 11.25rem;
		height: 1px;
		bottom: 0;
		background: var(--clr-white);
	}
	
	.contacts.footer-header:before {
		width: 100%;
	}
	
	.footer-title {
		font-size: 20px;
		font-weight: 500;
	}

	.icon-arrow {
		display: none;
	}

	.footer-item {
		margin-bottom: 0.625vw;
	}

	.footer-link {
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
	}

	.footer-box {
		width: 49.152%;
	}

	.contacts-content {
		position: relative;
		display: flex;
		justify-content: space-between;
		margin: 1.875vw 0 1.563vw;
		padding-bottom: 1.875vw;
	}

	.contacts-content:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		background: var(--clr-white);
	}

	.co-logo {
		height: 3.125rem;
		margin-right: 0.75vw;
	}

	.social-box {
		display: flex;
		align-items: center;
		gap: 1.25vw;
		margin-top: 1.875vw
	}

	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--clr-white);
		border-radius: 50%;
	}

	.contact-item {
		display: flex;
		justify-content: end;
		font-weight: 500;
		margin-top: 0.625vw;
	}

	.contact-icon {
		margin-right: 0.625vw;
	}

	.mail1 {
		display: none;
	}

	.footer-policy {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.policy-text {
		font-size: 14px;
		font-weight: 400;
	}
	
	.text1 {
		width: 65.5172%;
	}
	
	.policy-content {
		width: 31.0345%;
	}
	
	.box2 {
		display: none;
	}
	
	.text2 {
		width: 100%;
		text-align: right;
	}
	
	.text2 a {
		text-decoration: underline;
		color: white;
	}

	@media (max-width: 1433px) {
		.footer-link {
			font-size: 17px;
		}

		.policy-text {
			font-size: 13px;
 		}
	}

	@media (max-width: 1340px) {
		.footer-link {
			font-size: 16px;
		}

		.co-logo {
			height: 2.5rem;
		}

		.policy-text {
			font-size: 11.5px;
 		}
	}
	
	@media (max-width: 1220px) {
		.co-logo {
			height: 2.5rem;
		}

		.policy-text {
			font-size: 11.5px;
 		}
	}

	@media (max-width: 1100px) {
		.footer-container {
			padding: 5rem 9vw 5.938rem;
		}

		.footer-menu {
			width 23.674%;
		}
		
		.footer-box {
			width: 52.652%;
		}

		.footer-header:before {
			width: 10.75rem;
		}

		.footer-title {
			font-size: 18px;
		}
	}

	@media (max-width: 992px) {
		.footer-menu {
			width 24.174%;
		}
		
		.footer-box {
			width: 51.652%;
		}

		.footer-header:before {
			width: 8.25rem;
		}

		.footer-title {
			font-size: 15px;
		}

		.footer-item {
			margin-bottom: 0.125vw;
		}

		.footer-link {
			font-size: 13px;
		}

		.co-logo {
			height: 1.875rem;
		}

		.social-box {
			gap: 1vw;
		}

		.social-icon {
			width: 1.875rem;
			height: 1.875rem;
		}
		
		.social-icon img,
		.contact-icon {
			width: 0.938rem;
		}

		.text1 {
			width: 60.5172%;
		}
		
		.policy-content {
			width: 37.0345%;
		}

		.policy-text {
			font-size: 10px;
 		}
	}

	@media (max-width: 768px) {
		.footer-container {
			padding: 3rem 9vw 3.938rem;
		}

		.footer-header:before {
			width: 5.5rem;
		}

		.footer-title {
			font-size: 10px;
		}

		.footer-link {
			font-size: 10px;
		}
		
		.footer-item {
			line-height: 15px;
		}

		.co-logo {
			height: 1.25rem;
		}

		.social-icon {
			width: 1.25rem;
			height: 1.25rem;
		}
		
		.social-icon img,
		.contact-icon {
			width: 0.625rem;
		}

		.policy-text {
			font-size: 8px;
 		}
	}
	
	@media (max-width: 480px) {
		height: 100%;

		.footer-container {
			flex-direction: column;
			padding: 1.875rem 5.5556vw 25px;
		}

		.footer-menu,
		.footer-box {
			width: 100%;
		}

		.footer-header {
			padding-bottom: 0;
			margin-bottom: 1.25rem;
		}
		
		.footer-header:before {
			width: 100%;
		}
		
		.footer-title {
			font-size: 16px;
			padding-bottom: 6px;
		}
		
		.icon-arrow {
			display: block;
		}

		.footer-close .footer-item,
		.footer-close .contacts-content {
			height: 0;
			overflow: hidden;
			margin: 0;
		}
		
		.footer-close .icon-arrow {
			transform: rotate(-180deg);
		}

		.footer-open .footer-item,
		.footer-open .contacts-content {
			height: 100%;
		}

		.footer-open .icon-arrow {
			transform: rotate(0deg);
		}

		.footer-open.footer-menu {
			list-style-type: disc;
			margin-bottom: 10px;
		}

		.footer-item {
			margin: 0 0 10px 20px;
			line-height: 1.25rem;
		}

		.footer-link {
			font-size: 16px;
		}

		.contacts-content {
			flex-direction: row-reverse;
			margin: 0 0 25px;
			margin: 0;
			padding: 0;
		}

		.contacts-content:before {
			height: 0;
		}
		
		.social-box {
			margin-top: 5px
		}

		.social-icon {
			width: 2.5rem;
			height: 2.5rem;
		}
		
		.social-icon img {
			width: 1.25rem;
		}

		.contact-item {
			justify-content: start;
			margin: 0 0 10px;
		}
		
		.contact-icon {
			display: none;
		}
		
		.phone-numbers .button {
			font-family: 'Jost', sans-serif;
			font-weight: 400;
		}

		.mail1 {
			display: block;
			margin-top: 15px; 
			text-align: right;
		}
		
		.mail2 {
			display: none;
		}

		.footer-policy {
			flex-direction: column-reverse;
		}

		.policy-text {
			font-size: 14px;
 		}

		.text1 {
			width: 100%;
			text-align: center;
			margin-top: 15px;
		}

		.policy-content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30px;
		}

		.co-logo {
			height: 30px;
			margin-right: 0.313rem;
		}

		.box1 {
			display: none;
		}

		.box2 {
			display: block;
		}

		.text2 {
			width: 56.25%;
		}
	}
`

export default Footer;