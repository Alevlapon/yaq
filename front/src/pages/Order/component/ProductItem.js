import React from "react";
import styled from "styled-components";

function ProductItem({ product, quantity }) {
  const images = product?.product_variations?.length
    ? product?.product_variations[0]?.prod_var_options.map((el) =>
        el ? { ...el, label: "http://localhost:7000/" + el.optionImage } : el
      )
    : [];
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
            <span>Цвет:</span> {product.color}
          </p>
        </div>

        <div className="product-size">
          <p>
            <span>Размер:</span> {product.size}
          </p>
        </div>
        <div className="product-size">
          <p>
            <span>Количество:</span> {quantity}
          </p>
        </div>

        <div className="product-price">
          <h1>{product.price * quantity} KZT</h1>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  padding-top: 40px;

  .product-image {
    width: 150px;
    height: 150px;
    margin-right: 40px;
  }

  .product-title {
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
  }

  .product-color,
  .product-size {
    display: flex;
    font-size: 18px;
    font-weight: 300;
  }

  .product-color span,
  .product-size span {
    font-weight: 500;
  }

  .product-price {
    margin-top: 10px;
  }

  .product-price h1 {
    font-size: 26px;
    font-weight: 700;
  }
`;

export default ProductItem;
