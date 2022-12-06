import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';

function ResetPassword() {
	const history = useHistory();
	const [details, setDetails] = useState({ email: "", phone: "" });

	function checkPhoneNumber (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) === '_') {
				return true;
			}
		}
		return false;
	};

	function checkEmailAddres (str) {
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) === '@') {
				return false;
			}
		}
		return true;
	};

	const handleSubmit = e => {
			e.preventDefault();
			history.push("/");
			history.go(0);
	}

  	return (
	 	<Wrapper>
			<h1 className='title section-title'>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>

			<form onSubmit={handleSubmit}>
				<p className='section-text1'>Если вы забыли пароль, введите свой email зарегистрированный на сайте. В скором времени вам будет выслан новый пароль, который после входа на сайт, вы сможете изменить в личном кабинете.</p>
				
				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="email">Email</label>
					</div>
					<div className={(details.email !== "" && checkEmailAddres(details.email)) ? 'error-border' : 'default-border'}>
						<input
							type="text"
							name="email"
							id="email"
							onChange={e => setDetails({...details, email: e.target.value})}
							value={details.email}
						/>
					</div>
				</div>

				<p className='section-text2'>Или вы можете ввести номер телефона. В скором времени вам будет отправлен новый пароль.</p>
								
				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="number">Телефон</label>
					</div>
					<div className={(details.phone !== "" && checkPhoneNumber(details.phone)) ? 'error-border' : 'default-border'}>
						<Input 
							type="text"
							placeholder={'+7 (___) ___-__-__'} 
							mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
							name="phone"
							id="phone"
							onChange={e => setDetails({...details, phone: e.target.value})}
							value={details.phone}
						/>
					</div>
				</div>
								
				<div className='form-button'>
					<Button text={"Отправить"} bool={checkEmailAddres(details.email) || checkPhoneNumber(details.phone)}/>
				</div>
			</form>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 8.75rem;
	
	.section-title {
		font-size: 80px;
		font-weight: 500;
		margin-bottom: 3.125rem;
	}

	.section-text1,
	.section-text2 {
		font-weight: 400;
	}
	
	.section-text1 {
		width: 56.25vw;
		font-size: 20px;
		margin-bottom: 2.5rem;
	}
	
	.section-text2 {
		width: 30vw;
		font-size: 18px;
		margin-bottom: 1.875rem;		
	}

	.form-label {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 0.625rem;
	}

	input,
	.input-placeholder-text {
		margin-bottom: 1.875rem;		
	} 
	
	.input-placeholder-text {
		border: none;
	}

	.form-button .button {
		height: 3.125rem;
		width: 16.25vw;
		margin-top: 1.25rem;
	}

	.default-border input,
	.default-border .input-placeholder-text {
		width: 26.25vw;
		height: 3.125rem;
		border: 1px solid var(--clr-primary-4);
		padding-left: 1.25rem;
		font-size: 16px;
	}

	.error-border input,
	.error-border .input-placeholder-text {
		width: 26.25vw;
		height: 3.125rem;
		border: 1px solid #FA0000;
		padding-left: 1.25rem;
		font-size: 16px;
	}

	@media (max-width: 1280px) {
		.section-title {
			font-size: 75px;
		}

		.section-text1 {
			width: 60.25vw;
			font-size: 19px;
			margin-bottom: 2.1875rem;
		}
		
		.section-text2 {
			width: 34vw;
			font-size: 17px;
			margin-bottom: 1.5625rem;	
		}

		.form-label {
			font-size: 17px;
		}

		.form-button .button {
			width: 20.25vw;
		}
	
		.default-border input,
		.default-border .input-placeholder-text {
			width: 30.25vw;
		}
	
		.error-border input,
		.error-border .input-placeholder-text {
			width: 30.25vw;
		}
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 8.75rem;

		.section-text1 {
			width: 64.25vw;
		}
		
		.section-text2 {
			width: 38vw;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 34.25vw;
			height: 2.8125rem;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 34.25vw;
			height: 2.8125rem;
		}
		
		.form-button .button {
			width: 24.25vw;
			height: 2.8125rem;
		}
	}

	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}
	}

	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
			margin-bottom: 2.8125rem;
		}

		.section-text1 {
			width: 62.25vw;
			font-size: 18px;
			margin-bottom: 1.875rem;
		}
		
		.section-text2 {
			width: 36vw;
			font-size: 16px;
			margin-bottom: 1.25rem;	
		}

		.form-label {
			font-size: 16px;
		}

		input,
		.input-placeholder-text {
			margin-bottom: 1.5625rem;
		} 
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 32.25vw;
			font-size: 14px;
			padding-left: 0.9375rem;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 32.25vw;
			font-size: 14px;
			padding-left: 0.9375rem;
		}
		
		.form-button .button {
			width: 22.25vw;
			font-size: 20px;
			margin-top: 0.9375rem;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.section-text1 {
			width: 66.25vw;
			font-size: 16px;
			margin-bottom: 1.5625rem;
		}
		
		.section-text2 {
			width: 40vw;
			font-size: 14px;
			margin-bottom: 0.9375rem;	
		}
		
		.form-label {
			font-size: 14px;
			margin-bottom: 0.3125rem;	
		}

		input,
		.input-placeholder-text {
			margin-bottom: 1.5625rem;
		} 
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 36.25vw;
			height: 2.5rem;
			margin-bottom: 1.25rem;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 36.25vw;
			height: 2.5rem;
			margin-bottom: 1.25rem;
		}
		
		.form-button .button {
			width: 26.25vw;
			height: 2.5rem;
			font-size: 18px;
			margin-top: 0.625rem;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
			margin-bottom: 2.5rem;
		}

		.section-text1 {
			width: 70.25vw;
			font-size: 15px;
		}
		
		.section-text2 {
			width: 44vw;
			font-size: 13px;
		}
		
		.form-label {
			font-size: 13px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 40.25vw;
			height: 2.1875rem;
			font-size: 12px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 40.25vw;
			height: 2.1875rem;
			font-size: 12px;
		}
		
		.form-button .button {
			width: 30.25vw;
			height: 2.5rem;
		}
	}
	
	@media (max-width: 610px) {
		.section-title {
			font-size: 40px;
			margin-bottom: 2.1875rem;
		}

		.section-text1 {
			font-size: 14px;
			margin-bottom: 1.25rem;
		}
		
		.section-text2 {
			font-size: 12px;
		}
		
		.form-label {
			font-size: 12px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			height: 1.875rem;
			font-size: 11px;
			margin-bottom: 0.9375;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			height: 1.875rem;
			font-size: 11px;
			margin-bottom: 0.9375;
		}
		
		.form-button .button {
			width: 30.25vw;
			height: 2.1875rem;
			font-size: 17px;
		}
	}
	
	@media (max-width: 550px) {
		.section-title {
			font-size: 2.1875rem;
			margin-bottom: 1.875rem;
		}

		.section-text1 {
			width: 70.25vw;
			font-size: 11px;
		}
		
		.section-text2 {
			width: 46vw;
			font-size: 10px;
			margin-bottom: 0.625ren=m;
		}
		
		.form-label {
			font-size: 10px;
		}
		
		.default-border input,
		.default-border .input-placeholder-text {
			width: 42.25vw;
			font-size: 9px;
		}
		
		.error-border input,
		.error-border .input-placeholder-text {
			width: 42.25vw;
			font-size: 9px;
		}
		
		.form-button .button {
			width: 32.25vw;
			font-size: 16px;
		}
	}
	
	@media (max-width: 480px) {
		padding: 0 0 6.875rem;
		background-color: var(--clr-primary-6);

		.section-title {
			font-size: 28px;
			line-height: 3.125rem;
			background-color: var(--clr-white);
			padding: 1.25rem 5.5556vw;
			margin: 0;
		}

		form {
			width: 20rem;
			background: var(--clr-white);
			margin: 1.25rem auto;
			padding: 1.25rem;
		}

		.section-text1,
		.section-text2 {
			line-height: 1.875rem;
			margin-bottom: 1.25rem;
		}
		
		.form-label {
			margin-bottom: 0.625rem
		}

		.section-text1,
		.section-text2, 
		.form-label {
			font-size: 16px;
		}

		.section-text1,
		.section-text2, 
		.default-border input,
		.default-border .input-placeholder-text,
		.error-border input,
		.error-border .input-placeholder-text {
			width: 100%;
		}

		.default-border input,
		.default-border .input-placeholder-text,
		.error-border input,
		.error-border .input-placeholder-text {
			height: 3.125rem;
			font-size: 14px;
			margin-bottom: 1.25rem;
			padding-left: 1.25rem;
		}

		.form-button {
			text-align: center;
		}

		.form-button .button {
			width: 12.5rem;
			height: 3.125rem;
			font-size: 22px;
			margin: 0.625rem 0 1.25rem;
		}
	}
`

export default ResetPassword;