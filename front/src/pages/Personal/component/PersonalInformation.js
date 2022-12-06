import React, { useState } from 'react';
import styled from 'styled-components';
import { UserState }  from '../../../context/UserContext';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

function PersonalInformation() {
	const {
		errorMessage,
		Update,
	} = UserState();

	const [details, setDetails] = useState({ name: "", phone: "", email: "" });
	
	const handleSubmit = e => {
		e.preventDefault();
		Update(details);
	}
	
  	return (
	 	<Wrapper>
			{errorMessage !== "" ? <div className='error-message'>{errorMessage}</div> : ""}

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="email">Ваше имя</label>
					</div>
					<input
						type="text"
						name="name"
						id="name"
						onChange={e => setDetails({...details, name: e.target.value})}
						value={details.name}
					/>
				</div>

				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="number">Ваш телефон</label>
					</div>
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

				<div className='form-group'>
					<div className="form-label">
						<label htmlFor="email">Ваш email</label>
					</div>
					<input
						type="text"
						name="email"
						id="email"
						onChange={e => setDetails({...details, email: e.target.value})}
						value={details.email}
					/>
				</div>
									
				<div className='form-button'>
					<Button text={"Сохранить"}/>
				</div>
			</form>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	width: 420px;
	margin: 0 auto;
	padding-top: 70px;

	.form-label {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 0.625rem;
	}

	input,
	.input-placeholder-text {
		width: 26.25vw;
		height: 3.125rem;
		font-size: 16px;
		border: 1px solid var(--clr-primary-4);
		margin-bottom: 1.25rem;
		padding-left: 1.25rem;
	}

	.form-button {
		text-align: center;
	}

	.form-button .button {
		height: 3.125rem;
		width: 13.75vw;
		margin-top: 0.625rem;
	}
`

export default PersonalInformation;