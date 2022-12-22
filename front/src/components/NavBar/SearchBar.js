import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getProductsBySearch } from "../../redux/actions/products";
import { useHistory } from "react-router-dom";

function SearchBar({ value, changeInput }) {
  const history = useHistory();

  const input = useRef();
  const dispatch = useDispatch();
  const onKeyDown = (e) => {
    e.preventDefault();

    dispatch(getProductsBySearch(input.current.value));
  };

  useEffect(() => {
    input.current.focus();
  });
  return (
    <Wrapper>
      <form onSubmit={onKeyDown}>
        <input
          ref={input}
          type="text"
          placeholder="ПОИСК..."
          value={value}
          //   onChange={onKeyDown}
          className="title"
        />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  margin-left: 6.25vw;

  input {
    width: 42.5vw;
    height: 3.125rem;
    border: none;
  }

  input::placeholder {
    font-size: 30px;
    font-weight: 500;
    color: var(--clr-black);
  }

  @media (max-width: 1100px) {
    input {
      height: 2.813rem;
      border: none;
    }

    input::placeholder {
      font-size: 26px;
    }
  }

  @media (max-width: 768px) {
    input {
      height: 4.904vw;
      border: none;
      margin: 0.624vw 0 0.832vw;
    }

    input::placeholder {
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    margin-left: 0;

    input {
      width: 200%;
      height: 1.563rem;
      border: none;
      margin: 0.75rem 0 0.813rem;
    }

    input::placeholder {
      font-size: 16px;
    }
  }
`;

export default SearchBar;
