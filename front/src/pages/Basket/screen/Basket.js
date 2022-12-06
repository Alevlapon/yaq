import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItem from "../component/ProductItem";
import { CartState } from "../../../context/Context";
import ErrorPage from "../../ErrorPage/screen/ErrorPage";
import Button from "../../../components/Button";
import close from "../assets/close.svg";

function Basket() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalArray = cart.map((item) => item.quantity * item.product.price);
    setTotal(totalArray.reduce((acc, curr) => acc + Number(curr), 0));
  }, [cart]);

  return (
    <Wrapper>
      {cart.length > 0 ? (
        <div className="basket-box block">
          {cart.map((item) => (
            <ProductItem
              product={item.product}
              quantity={item.quantity}
              color={item.color}
              size={item.size}
            />
          ))}

          <div className="summary">
            <h1 className="product-total-price">
              ИТОГОВАЯ СУММА: <span>{total} KZT</span>
            </h1>

            <a href={`/order`} className="button-container">
              <Button text={"Оформить заказ"} />
            </a>
          </div>
        </div>
      ) : (
        <div className="basket-box none">
          <ErrorPage
            title={"КОРЗИНА ПУСТА"}
            text={"Самое время её пополнить!"}
          />

          <a href={`/products/clothes`} className="button-container">
            <Button text={"Перейти в магазин"} />
          </a>
        </div>
      )}

      <a href="/">
        <img src={close} alt="close button" className="close-button" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: #00000080;
  padding: 8.75rem 13.125vw 21.25rem;
  display: flex;

  .basket-box {
    width: 1180px;
    background: var(--clr-white);
  }

  .basket-box.block {
    padding: 90px 63px 80px 50px;
  }

  .summary {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
  }

  .summary:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--clr-primary-5);
  }

  .product-total-price {
    font-size: 26px;
    font-weight: 700;
    margin-top: 10px;
  }

  .product-total-price span {
    color: var(--clr-primary-2);
  }

  .button-container .button {
    width: 320px;
  }

  .block .button-container .button {
    height: 60px;
    font-size: 26px;
    font-weight: 400;
  }

  .basket-box.none {
    padding: 10px 0 160px;
  }

  .error-text {
    margin-bottom: 0;
  }

  .none .button-container .button {
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    margin: 30px 430px 0;
  }

  .close-button {
    position: absolute;
    margin-left: 45px;
  }
`;

export default Basket;
