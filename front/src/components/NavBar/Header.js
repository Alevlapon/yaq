import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

function Header({ show, setShow }) {
  return (
    <HeaderContainer>
      {show ? (
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" onClick={window.location.reload()} />
        </Link>
      ) : null}
      <div></div>

      <ul className="header-menu">
        <li className="header-item">
          <Link to="/" className="header-paragraph">
            +7 701 135 41 46
          </Link>
        </li>
        <li className="header-item">
          <Link to="/" className="header-paragraph">
            +7 775 656 48 27
          </Link>
        </li>
        <li className="header-item">
          <Link to="/" className="header-paragraph">
            WhatsApp
          </Link>
        </li>
        <li className="header-item">
          <Link to="/discount-system" className="header-paragraph">
            Дисконтная система
          </Link>
        </li>
        <li className="header-item">
          <Link to="/delivery-payment" className="header-paragraph">
            Доставка и оплата
          </Link>
        </li>
        <li className="header-item">
          <Link to="/faq" className="header-paragraph">
            FAQ
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.nav`
  width: 100%;
  position: static;
  display: flex;
  alin-items: center;

  .header-menu {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }

  .header-item {
    width: 100%;
  }

  .header-paragraph {
    font-size: 14px;
    font-weight: 500;
    color: var(--clr-primary-4);
  }

  @media (min-width: 481px) {
    height: 1.875rem;
    display: flex;
    justify-content: space-between;
    padding: 0 9vw;

    .nav-logo {
      display: flex;
      justify-content: start;
    }

    .nav-logo img {
      height: 3.5vw;
    }

    .header-menu {
      width: max-content;
      display: flex;
    }

    .header-item {
      width: max-content;
      padding: 0.85vw 0.5vw 0.625vw;
    }

    .header-paragraph {
      font-size: 8px;
    }
  }

  @media (min-width: 542px) {
    .nav-logo img {
      height: 3.267vw;
    }

    .header-paragraph {
      font-size: 9px;
    }
  }

  @media (min-width: 600px) {
    .header-paragraph {
      font-size: 10px;
    }
  }

  @media (min-width: 650px) {
    .nav-logo img {
      height: 3.867vw;
    }
  }

  @media (min-width: 768px) {
    height: 2.5rem;

    .nav-logo img {
      width: 3.125rem;
      height: 1.875rem;
    }

    .header-paragraph {
      font-size: 12px;
    }
  }

  @media (min-width: 1101px) {
    height: 3.125rem;
    padding: 0 13.125vw;

    .header-item {
      padding-top: 1.25vw;
    }

    .header-paragraph {
      font-size: 14px;
    }
  }
`;

export default Header;
