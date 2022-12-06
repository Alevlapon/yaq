import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CartState } from "../../context/Context";
import { UserState } from "../../context/UserContext";
import heart from "../../assets/heart.svg";
import heart2 from "../../assets/heart2.svg";
import shop from "../../assets/shop.svg";
import shop2 from "../../assets/shop2.svg";
import search from "../../assets/search.svg";
import search2 from "../../assets/search2.svg";
import close from "../../assets/close.svg";
import userIcon from "../../assets/user.svg";

function CartButtons({ show, setShow }) {
  const { handleOpenLogin } = UserState();

  const state = useSelector(({ user }) => {
    return {
      user: user.user,
      isAuth: user.isAuth,
    };
  });

  const dispatch = useDispatch();

  const {
    state: { cart, saved },
  } = CartState();

  let totalItems = 0;
  cart.map((item) => (totalItems = totalItems + item.quantity));

  return (
    <Wrapper>
      <div className="mobile-icons">
        {show ? null : (
          <div className="mobile-add-icons">
            {state.isAuth ? (
              <a href="/personal" className="nav-item">
                <img src={userIcon} alt="user icon" />
              </a>
            ) : null}
            <a href="/saved" className="nav-item cart-container">
              <img src={heart2} alt="saved icon" />
              {saved.length > 0 ? (
                <span className="saved-cart"></span>
              ) : (
                <span></span>
              )}
            </a>
            <a href="/basket" className="nav-item cart-container">
              <img src={shop2} alt="purchased icon" />
              {cart.length > 0 ? (
                <span className="purchased-cart"></span>
              ) : (
                <span></span>
              )}
            </a>
          </div>
        )}

        {show ? (
          <img
            src={close}
            alt="close button"
            className="button nav-item close-button"
            onClick={setShow}
          />
        ) : (
          <img
            src={search2}
            alt="search button"
            className="button nav-item"
            onClick={setShow}
          />
        )}
      </div>

      <div className="laptop-icons">
        {state.isAuth ? (
          <a href="/personal" className="button nav-user nav-link">
            АККАУНТ
          </a>
        ) : (
          <p
            className="button nav-user nav-link"
            id="signup"
            onClick={handleOpenLogin}
          >
            ВХОД
          </p>
        )}

        {show ? (
          <img
            src={close}
            alt="close button"
            className="button nav-item"
            onClick={setShow}
          />
        ) : (
          <img
            src={search}
            alt="search button"
            className="button nav-item"
            onClick={setShow}
          />
        )}

        <a href="/saved" className="nav-item cart-container">
          <img src={heart} alt="saved icon" />
          <span className="saved-cart">{saved.length}</span>
        </a>
        <a href="/basket" className="nav-item cart-container">
          <img src={shop} alt="purchased icon" />
          <span className="purchased-cart">{totalItems}</span>
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .laptop-icons {
    display: flex;
    align-items: center;
  }

  .mobile-icons {
    display: none;
  }

  .laptop-icons img {
    height: 1.875rem;
  }

  .cart-container {
    position: relative;
  }

  .nav-user {
    margin: 0 0.9375vw;
  }

  .saved-cart,
  .purchased-cart {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: var(--clr-primary-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
  }

  @media (max-width: 1100px) {
    #signup {
      font-size: 15px;
    }

    .laptop-icons img {
      height: 1.563rem;
    }

    .saved-cart,
    .purchased-cart {
      bottom: 15px;
      left: 16px;
      width: 18px;
      height: 18px;
      font-size: 0.65rem;
    }
  }

  @media (max-width: 768px) {
    #signup {
      font-size: 2.083vw;
    }

    .laptop-icons img {
      height: 3.125vw;
    }

    .saved-cart,
    .purchased-cart {
      bottom: 1.654vw;
      left: 2.036vw;
      width: 2.163vw;
      height: 2.163vw;
      font-size: 1.272vw;
    }
  }

  @media (max-width: 480px) {
    .mobile-icons,
    .mobile-add-icons {
      display: flex;
    }

    .laptop-icons {
      display: none;
    }

    .mobile-icons .nav-item {
      margin: 0 0 0 5vw;
    }

    .close-button {
      height: 17px;
    }

    .saved-cart,
    .purchased-cart {
      position: absolute;
      top: 14px;
      left: 11px;
      width: 11px;
      height: 11px;
      background: var(--clr-primary-7);
    }
  }
`;

export default CartButtons;
