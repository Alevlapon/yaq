import React from 'react';
import MaskedInput from 'react-text-mask'
import styled from 'styled-components';

function Input({ type, mask, placeholder, onChange, value, classname }) {
  	return (
    	<Wrapper>
			<MaskedInput
				type={type}
				mask={mask}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className={classname}
				className='input-placeholder-text'
			/>
    	</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.input-placeholder-text {
		width: 100%;
		font-family: 'Jost';
		font-size: 16px;
		font-weight: 300;
		border: 1px solid var(--clr-primary-4);
		padding-left: 10px;
		::placeholder {
			color: var(--clr-primary-4);
		}
	}
`

export default Input;