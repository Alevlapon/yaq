import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItem from "../component/ProductItem";
import { CartState } from "../../../context/Context";
import ErrorPage from "../../ErrorPage/screen/ErrorPage";
import Button from "../../../components/Button";
import close from "../assets/close.svg";
import { useSelector, useDispatch } from "react-redux";
import { getBasket, addToBasket } from "../../../redux/actions/basket";

function Basket() {
  const dispatch = useDispatch();

  const state = useSelector(({ basket }) => {
    return {
      products: basket.item.basket_products,
      amount: basket.item.amount,
    };
  });

  const [total, setTotal] = useState();
  useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <Wrapper>
      {state.products?.length > 0 ? (
        <div className="basket-box block">
          {state.products?.map((item) => (
            <ProductItem
              key={item.id}
              product={item.product}
              quantity={item.quantity}
              color={item.productColor}
              size={item.productSize}
            />
          ))}

          <div className="summary">
            <h1 className="product-total-price">
              ИТОГОВАЯ СУММА: <span>{state.amount} KZT</span>
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

      <a href="/products/clothes">
        <img src={close} alt="close button" className="close-button" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: #00000080;
  padding: 8.75rem 16.125vw 7.25rem;
  display: flex;

  .basket-box {
    width: 100%;
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
  @media (max-width: 1280px) {
    padding: 3.75rem 8.125vw 7.25rem;
  }
`;

export default Basket;
