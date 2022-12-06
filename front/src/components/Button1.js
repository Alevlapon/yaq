import React from 'react';
import styled from 'styled-components';

function LoginButton({ text }) {
  return (
	  <Button>
      <div className='button-container'>
        <p className='button-text button'>{text}</p>
      </div>
    </Button>
  )
}

const Button = styled.nav`
  .button-container {
    width: 100%;  
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--clr-primary-1);
  }

  .button-text {
    color: var(--clr-white);
    font-size: 5vw;
    font-weight: 500;
  }
`

export default LoginButton;