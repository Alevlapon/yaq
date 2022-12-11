import React from "react";
import styled from "styled-components";
import { CartState } from "../../../context/Context";
import bin from "../assets/bin.svg";

function ProductItem({ product, quantity, color, size }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const images = product?.product_variations?.length
    ? product?.product_variations[0]?.prod_var_options.map((el) =>
        el ? { ...el, label: process.env.REACT_APP_URL + el.optionImage } : el
      )
    : [];
  product.color = color;
  product.size = size;

  return (
    <Wrapper>
      <img
        src={images[0]?.label}
        alt="product image"
        className="product-image"
      />

      <div className="product-info">
        <p className="product-title">{product.productName}</p>

        <div className="product-color">
          <p>
            <span>Цвет:</span> {color}
          </p>
        </div>

        <div className="product-size">
          <p>
            <span>Размер:</span> {size}
          </p>
        </div>
      </div>

      <div className="product-amount">
        <p>Количество:</p>
        <div className="product-count">
          <div
            className="button product-count-adder"
            onClick={() =>
              dispatch({
                type: "DECREMENT-QUANTITY",
                payload: product,
              })
            }
          >
            -
          </div>
          <div className="product-count-number">{quantity}</div>
          <div
            className="button product-count-remover"
            onClick={() =>
              dispatch({
                type: "INCREMENT-QUANTITY",
                payload: product,
              })
            }
          >
            +
          </div>
        </div>
      </div>

      <div className="product-price">
        <p>К оплате:</p>
        <h1>{product.price * quantity} KZT</h1>
      </div>

      <div className="button product-icon">
        <img
          src={bin}
          alt="recycle bin"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product,
            })
          }
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 0 70px;

  .product-image {
    width: 150px;
    height: 150px;
    margin-right: 40px;
  }

  .product-info {
    width: 280px;
    text-align: left;
    margin-right: 20px;
  }

  .product-title {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }

  .product-color,
  .product-size {
    display: flex;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
  }

  .product-color span,
  .product-size span {
    font-weight: 500;
  }

  .product-amount,
  .product-price {
    margin-top: 10px;
  }

  .product-amount {
    width: 180px;
    margin-right: 80px;
  }

  .product-amount p {
    font-size: 20px;
    font-weight: 400;
  }

  .product-count {
    display: flex;
    height: 80px;
    border: 1px solid var(--clr-primary-5);
    margin-top: 10px;
  }

  .product-count-adder,
  .product-count-number,
  .product-count-remover {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 20px;
    font-weight: 400;
  }

  .product-count-adder,
  .product-count-remover {
    width: 50px;
    background-color: var(--clr-primary-5);
  }

  .product-count-number {
    width: 80px;
  }

  .product-price {
    width: 240px;
    margin-right: 60px;
  }

  .product-price p {
    font-size: 16px;
    font-weight: 400;
  }

  .product-price h1 {
    font-size: 26px;
    font-weight: 700;
    margin-top: 30px;
  }

  .product-icon {
    margin-top: 75px;
  }
`;

export default ProductItem;
