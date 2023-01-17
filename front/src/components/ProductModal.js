import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import Select from "../components/Select";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import delivery from "../assets/delivery.svg";
import ImageCarousel from "./ImageCarousel";

function ProductModal({ product, similarProducts, id, setActive }) {
  const colorOptions = similarProducts?.length
    ? similarProducts?.map((el) =>
        el ? { label: el.colorName, value: el.colorName } : el
      )
    : [];

  const sizeOptions = product?.product_variations?.length
    ? product?.product_variations[1]?.prod_var_options.map((el) =>
        el ? { label: el.optionName, value: el.optionName } : el
      )
    : [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = product?.product_variations?.length
    ? product?.product_variations[0]?.prod_var_options.map((el) =>
        el ? { ...el, label: process.env.REACT_APP_URL + el.optionImage } : el
      )
    : [];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [dispImg, setDispImg] = useState("null");
  const [currentProduct, setCurrentProduct] = useState("null");
  function goToColorProduct(value) {
    // event.preventDefault();
    const [id] = similarProducts?.filter(
      (item) => item.colorName === value.value
    );
    window.location.href = `${id.id}`;
  }

  useEffect(() => {
    setSelectedColor({ label: product.colorName, value: product.colorName });
    setDispImg(images[0]?.label);
  }, [images.length]);

  useEffect(() => {
    if (selectedColor?.value && product?.colorName !== selectedColor.value) {
      const [id] = similarProducts?.filter(
        (item) => item.colorName === selectedColor.value
      );
      window.location.href = `${id.id}`;
    }
  }, [product, selectedColor]);

  return (
    <Wrapper>
      <div className="left-box">
        <div className="image-content">
          <div className="mini-boxes">
            {images?.length ? (
              images.map((el) => (
                <div key={el.id} className="mini-image-box">
                  <img
                    src={el.label}
                    alt="product image"
                    onClick={() => setDispImg(el.label)}
                  />
                </div>
              ))
            ) : (
              <p>Фото</p>
            )}
          </div>

          <div className="image-box">
            {(() => {
              if (Date.parse(product?.createdAt) + 1200000000 > Date.now()) {
                return (
                  <div className="sale-container">
                    <h5 className="product-sale title">Новинка</h5>
                  </div>
                );
              } else if (product?.inSale === null) {
                return <h5 className="title"></h5>;
              } else {
                return (
                  <div className="sale-container">
                    <h5 className="product-sale title">-{product?.inSale}%</h5>
                  </div>
                );
              }
            })()}

            <img
              src={product?.product_variations?.length ? dispImg : <p>Фото</p>}
              alt="product image"
            />
            {/* <ImageCarousel images={images} /> */}
          </div>
        </div>
      </div>

      <div className="right-box">
        <p className="product-name">{product?.productName}</p>
        <p className="product-price">
          {Number(product?.inSale) > 0 ? product?.price + " KZT" : ""}
        </p>
        <p className="product-sale-price">
          {Number(product?.inSale) > 0
            ? (product?.price / 100) * (100 - Number(product?.inSale)) + " KZT"
            : product?.price + " KZT"}
        </p>
        <div className="product-color">
          <p>Цвет:</p>
          <Select
            options={colorOptions}
            placeholder={"Выберите цвет"}
            selectedOption={{
              label: product?.colorName,
              value: product?.colorName,
            }}
            setSelectedOption={setSelectedColor}
            onChange={goToColorProduct}
          />
        </div>
        <div className="product-size">
          <div className="size-box">
            <p>Размер:</p>
            <a href="">Таблица размеров</a>
          </div>
          <Select
            options={sizeOptions}
            placeholder={"Выберите размер"}
            // selectedOption={sizeOptions[0]}
            setSelectedOption={setSelectedSize}
          />
        </div>

        {id === 1 ? (
          <div className="product-button">
            <AddButton
              product={product}
              color={selectedColor?.label}
              size={selectedSize?.label}
              bool={
                selectedColor === null || selectedSize === null ? true : false
              }
            />
            <a href={`/products/${product?.id}`} className="about-button">
              <Button text={"Подробнее"} />
            </a>
          </div>
        ) : (
          <div className="product-button-detail">
            <AddButton
              product={product}
              color={selectedColor?.label}
              size={selectedSize?.label}
              bool={
                selectedColor === null || selectedSize === null ? true : false
              }
              setActive={setActive}
            />
          </div>
        )}

        <div className="product-delivery">
          <div>
            <img src={delivery} alt="delivery icon" className="delivery-icon" />
            <p>Бесплатная доставка по Алматы</p>
          </div>
          <div>
            <img src={delivery} alt="delivery icon" className="delivery-icon" />
            <Link to="/delivery_payment">Подробнее о доставке и оплате</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;

  .left-box {
    width: 30vw;
    margin: 2.5vw 2.1875vw 0 6.25vw;
  }

  .image-content {
    display: flex;
    justify-content: space-between;
  }

  .mini-image-box {
    width: 3.75vw;
    height: 4.375vw;
    background: var(--clr-primary-5);
    margin-bottom: 1.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mini-image-box p {
    font-size: 16px;
    font-weight: 400;
  }

  .mini-image-box img {
    height: 100%;
    background: var(--clr-white);
    overflow: hidden;
  }

  .sale-container {
    position: absolute;
    width: 5vw;
    height: 2.5vw;
    background-color: var(--clr-primary-1);
  }

  .product-sale {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    color: var(--clr-white);
    margin: auto;
  }

  .image-box img {
    width: 23.75vw;
    height: 30vw;
    padding: 15.8% 0;
  }

  .right-box {
    width: 26.875vw;
    margin: 1.875vw 6.25vw 0 2.1875vw;
  }

  .product-name {
    font-size: 20px;
    font-weight: 400;
  }

  .product-price {
    font-size: 20px;
    font-weight: 700;
    color: var(--clr-primary-4);
    text-decoration-line: line-through;
    margin-top: 0.625vw;
  }

  .product-sale-price {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 1.25vw;
  }

  .product-color,
  .product-size {
    width: 17.5vw;
    margin-bottom: 1.5625vw;
  }

  .product-color p,
  .product-size p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0.3125vw;
  }

  .size-box {
    display: flex;
    justify-content: space-between;
  }

  .size-box a {
    font-size: 16px;
    font-weight: 300;
    text-decoration: underline;
  }

  .product-button {
    display: flex;
    justify-content: space-between;
    width: 20vw;
    padding-top: 0.625vw;
  }

  .product-button .button {
    width: 9.375vw;
  }

  .button {
    height: 3.75vw;
  }

  .about-button .button {
    background: transparent;
    color: var(--clr-primary-1);
    border: 2px solid var(--clr-primary-1);
  }

  .product-button-detail {
    padding-top: 0.625vw;
  }

  .product-button-detail .button {
    width: 17.5vw;
  }

  .product-delivery {
    width: 17.5vw;
    height: 5vw;
    background: var(--clr-primary-6);
    margin-top: 1.875vw;
    padding: 0.625vw 0.625vw 0.9375vw 0.9375vw;
  }

  .product-delivery div {
    display: flex;
    gap: 0.9375vw;
    padding-bottom: 0.9375vw;
  }

  .product-delivery p,
  .product-delivery a {
    font-size: 14px;
    font-weight: 400;
  }

  .product-delivery a {
    text-decoration-line: underline;
  }

  @media (max-width: 1520px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 15.5px;
    }

    .product-sale,
    .product-color p,
    .product-size p {
      font-size: 17.5px;
    }

    .product-name,
    .product-price {
      font-size: 19.5px;
    }

    .product-sale-price {
      font-size: 25.5px;
    }

    .button {
      font-size: 21.5px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 13.5px;
    }
  }

  @media (max-width: 1472px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 15px;
    }

    .product-sale,
    .product-color p,
    .product-size p {
      font-size: 17px;
    }

    .product-name,
    .product-price {
      font-size: 19px;
    }

    .product-sale-price {
      font-size: 25px;
    }

    .button {
      font-size: 21px;
    }

    .delivery-icon {
      width: 1.75rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 13px;
    }
  }

  @media (max-width: 1412px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 14.5px;
    }

    .product-sale,
    .product-color p,
    .product-size p {
      font-size: 16.5px;
    }

    .product-name,
    .product-price {
      font-size: 18.5px;
    }

    .product-sale-price {
      font-size: 24.5px;
    }

    .button {
      font-size: 20px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 12.5px;
    }
  }

  @media (max-width: 1365px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 14px;
    }

    .product-sale,
    .product-color p,
    .product-size p {
      font-size: 16px;
    }

    .product-name {
      font-size: 18px;
    }

    .product-price {
      font-size: 18px;
      margin-top: 0.3125vw;
    }

    .product-sale-price {
      font-size: 24px;
      margin-bottom: 0.9375vw;
    }

    .product-color,
    .product-size {
      margin-bottom: 1.25vw;
    }

    .button {
      font-size: 19px;
    }

    .product-delivery {
      margin-top: 1.5625vw;
    }

    .delivery-icon {
      width: 1.625rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 12px;
    }
  }

  @media (max-width: 1304px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 13.5px;
    }

    .product-sale,
    .product-color p,
    .product-size p {
      font-size: 15.5px;
    }

    .product-name,
    .product-price {
      font-size: 17.5px;
    }

    .product-sale-price {
      font-size: 23.5px;
    }

    .button {
      font-size: 18.5px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 11.5px;
    }
  }

  @media (max-width: 1266px) {
    .product-sale {
      font-size: 15px;
    }

    .product-name,
    .product-price {
      font-size: 17px;
    }

    .product-sale-price {
      font-size: 23px;
    }
  }

  @media (max-width: 1257px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 13px;
    }

    .product-color p,
    .product-size p {
      font-size: 15px;
    }

    .button {
      font-size: 18px;
    }

    .delivery-icon {
      width: 1.5rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 11px;
    }
  }

  @media (max-width: 1230px) {
    .product-sale {
      font-size: 14.5px;
    }

    .product-name,
    .product-price {
      font-size: 16.5px;
    }

    .product-sale-price {
      font-size: 22.5px;
    }
  }

  @media (max-width: 1197px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 12.5px;
    }

    .button {
      font-size: 17.5px;
    }

    .product-color,
    .product-size {
      margin-bottom: 1.125vw;
    }

    .product-color p,
    .product-size p {
      font-size: 14.5px;
    }

    .delivery-icon {
      width: 1.375rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 10.5px;
    }
  }

  @media (max-width: 1194px) {
    .product-sale {
      font-size: 14px;
    }

    .product-name,
    .product-price {
      font-size: 16px;
    }

    .product-sale-price {
      font-size: 22px;
    }
  }

  @media (max-width: 1158px) {
    .product-sale {
      font-size: 13.5px;
    }

    .product-name,
    .product-price {
      font-size: 15.7px;
    }

    .product-sale-price {
      font-size: 21.7px;
    }
  }

  @media (max-width: 1136px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 12px;
    }

    .product-sale {
      font-size: 13px;
    }

    .product-color p,
    .product-size p {
      font-size: 14px;
    }

    .product-name,
    .product-price {
      font-size: 15.5px;
    }

    .product-sale-price {
      font-size: 21.5px;
    }

    .button {
      font-size: 17px;
    }

    .delivery-icon {
      width: 1.25rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 10px;
    }
  }

  @media (max-width: 1122px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 11.5px;
    }

    .product-sale {
      font-size: 12.5px;
    }

    .product-name,
    .product-price {
      font-size: 15px;
    }

    .product-sale-price {
      font-size: 21px;
    }

    .button {
      font-size: 16.5px;
    }

    .product-color,
    .product-size {
      margin-bottom: 1vw;
    }

    .product-color p,
    .product-size p {
      font-size: 13.5px;
    }

    .delivery-icon {
      width: 1.25rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 9.5px;
    }
  }

  @media (max-width: 1085px) {
    .product-name,
    .product-price {
      font-size: 14.5px;
    }

    .product-sale-price {
      font-size: 20.5px;
    }
  }

  @media (max-width: 1049px) {
    .product-sale {
      font-size: 13px;
    }

    .product-name,
    .product-price {
      font-size: 14.3px;
    }

    .product-sale-price {
      font-size: 20.3px;
    }

    .about-button .button {
      border: 1.5px solid var(--clr-primary-1);
    }

    .button {
      font-size: 15.5px;
    }
  }

  @media (max-width: 1035px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 11px;
    }

    .product-sale {
      font-size: 12px;
    }

    .product-name,
    .product-price {
      font-size: 14px;
    }

    .product-sale-price {
      font-size: 20px;
    }

    .product-color p,
    .product-size p {
      font-size: 13px;
    }

    .button {
      font-size: 15px;
    }

    .delivery-icon {
      width: 1.25rem;
    }

    .product-delivery {
      width: 18.5vw;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 9px;
    }
  }

  @media (max-width: 1013px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 10.5px;
    }

    .product-sale {
      font-size: 11.5px;
    }

    .product-name,
    .product-price {
      font-size: 13.5px;
    }

    .product-sale-price {
      font-size: 19.5px;
    }

    .product-color p,
    .product-size p {
      font-size: 12.5px;
    }

    .button {
      font-size: 14.5px;
    }

    .delivery-icon {
      width: 1.125rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 8.5px;
    }
  }

  @media (max-width: 992px) {
    .left-box {
      width: 31.25rem;
      margin: 2.5vw 1.875vw 0 5vw;
    }

    .right-box {
      width: 28.125rem;
      margin: 1.875vw 5vw 0 1.875vw;
    }

    .product-sale-price {
      margin-bottom: 0.75vw;
    }

    .about-button .button {
      border: 1px solid var(--clr-primary-1);
    }

    .product-delivery {
      margin-top: 1.5vw;
    }
  }

  @media (max-width: 924px) {
    .product-sale {
      font-size: 11px;
    }

    .product-name,
    .product-price {
      font-size: 13px;
    }

    .product-sale-price {
      font-size: 19px;
    }

    .button {
      font-size: 13.5px;
    }
  }

  @media (max-width: 889px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 10px;
    }

    .product-sale {
      font-size: 10.5px;
    }

    .product-name,
    .product-price {
      font-size: 12.5px;
    }

    .product-sale-price {
      font-size: 18.5px;
    }

    .product-color p,
    .product-size p {
      font-size: 12px;
    }

    .button {
      font-size: 13px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 8px;
    }
  }

  @media (max-width: 855px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 9.5px;
    }

    .product-sale {
      font-size: 10px;
    }

    .product-name,
    .product-price {
      font-size: 12px;
    }

    .product-sale-price {
      font-size: 18px;
    }

    .product-color p,
    .product-size p {
      font-size: 11.5px;
    }

    .delivery-icon {
      width: 1rem;
    }

    .button {
      font-size: 12.5px;
    }
  }

  @media (max-width: 821px) {
    .mini-image-box p,
    .select-placeholder-text,
    .size-box a {
      font-size: 9px;
    }

    .product-sale {
      font-size: 9.5px;
    }

    .product-sale-price {
      font-size: 17.5px;
    }

    .product-name,
    .product-price {
      font-size: 11.5px;
    }

    .select-placeholder-text {
      font-size: 9px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 7.5px;
    }

    .button {
      font-size: 12px;
    }
  }

  @media (max-width: 787px) {
    .mini-image-box p,
    .size-box a {
      font-size: 8.5px;
    }

    .product-sale {
      font-size: 9px;
    }

    .product-sale-price {
      font-size: 17px;
    }

    .product-name,
    .product-price {
      font-size: 11px;
    }

    .product-color p,
    .product-size p {
      font-size: 10.5px;
    }

    .select-placeholder-text {
      font-size: 8.5px;
    }

    .button {
      font-size: 11.5px;
    }
  }

  @media (max-width: 762px) {
    .delivery-icon {
      width: 0.9375rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 7px;
    }
  }

  @media (max-width: 752px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 8px;
    }

    .product-sale-price {
      font-size: 16.5px;
    }

    .product-name,
    .product-price {
      font-size: 10.5px;
    }

    .product-color p,
    .product-size p {
      font-size: 10px;
    }

    .button {
      font-size: 11px;
    }
  }

  @media (max-width: 718px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 7.5px;
    }

    .product-sale-price {
      font-size: 15.5px;
    }

    .product-name,
    .product-price {
      font-size: 10px;
    }

    .product-color p,
    .product-size p {
      font-size: 9px;
    }

    .product-button,
    .product-button-detail {
      padding-top: 0.3125vw;
    }

    .delivery-icon {
      width: 0.875rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 6.7px;
    }
  }

  @media (max-width: 684px) {
    .product-sale-price {
      font-size: 14.5px;
    }

    .product-name,
    .product-price {
      font-size: 9px;
    }

    .product-color p,
    .product-size p {
      font-size: 8.5px;
    }

    .product-sale-price {
      margin-bottom: 0.75vw;
    }

    .product-color,
    .product-size {
      margin-bottom: 0.875vw;
    }

    .button {
      font-size: 9.5px;
    }

    .delivery-icon {
      width: 0.8125rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 6.3px;
    }
  }

  @media (max-width: 638px) {
    .delivery-icon {
      width: 0.75rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 6px;
    }
  }

  @media (max-width: 616px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 7px;
    }

    .product-sale-price {
      font-size: 14px;
    }

    .product-name,
    .product-price {
      font-size: 8.5px;
    }

    .product-color p,
    .product-size p {
      font-size: 8px;
    }

    .product-color,
    .product-size {
      margin-bottom: 0.75vw;
    }

    .button {
      font-size: 9px;
    }

    .delivery-icon {
      width: 0.75rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 6px;
    }
  }

  @media (max-width: 605px) {
    .delivery-icon {
      width: 0.6875rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 5.7px;
    }
  }

  @media (max-width: 581px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 6.5px;
    }

    .product-sale-price {
      font-size: 13.5px;
    }

    .product-name,
    .product-price {
      font-size: 8px;
    }

    .product-color p,
    .product-size p {
      font-size: 7.5px;
    }

    .button {
      font-size: 8.5px;
    }

    .product-delivery {
      width: 19vw;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 5.5px;
    }
  }

  @media (max-width: 547px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 6px;
    }

    .product-sale-price {
      font-size: 13px;
    }

    .product-name,
    .product-price {
      font-size: 7.5px;
    }

    .product-color p,
    .product-size p {
      font-size: 7px;
    }

    .product-color,
    .product-size {
      margin-bottom: 0.625vw;
    }

    .product-button,
    .product-button-detail {
      padding-top: 0;
    }

    .button {
      font-size: 7px;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 5px;
    }
  }

  @media (max-width: 514px) {
    .mini-image-box p,
    .select-placeholder-text,
    .product-sale,
    .size-box a {
      font-size: 5.5px;
    }

    .product-sale-price {
      font-size: 12.5px;
    }

    .product-name,
    .product-price {
      font-size: 7px;
    }

    .product-color,
    .product-size {
      margin-bottom: 0.5vw;
    }

    .product-color p,
    .product-size p {
      font-size: 6.5px;
    }
  }

  @media (max-width: 605px) {
    .delivery-icon {
      width: 0.624rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 4.8px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .left-box,
    .right-box {
      width: 88.889vw;
      margin: 0;
    }

    .mini-boxes {
      display: none;
    }

    .product-color p,
    .product-size p {
      display: none;
    }

    .sale-container {
      position: absolute;
      width: 5rem;
      height: 2.5rem;
    }

    .image-box {
      width: 100%;
      height: 105.556vw;
      background-color: var(--clr-white);
    }

    .product-sale {
      font-size: 18px;
      font-weight: 400;
    }

    .image-box img {
      width: 100%;
      height: 100%;
      padding: 24px 0 27px;
    }

    .product-name,
    .product-price,
    .product-sale-price {
      text-align: center;
    }

    .product-name {
      font-size: 16px;
      margin-top: 3.125rem;
    }

    .product-price {
      font-size: 16px;
      margin: 0.625rem 0 0;
    }

    .product-sale-price {
      font-size: 22px;
      font-weight: 700;
      margin: 0 0 0.625rem;
    }

    .product-color,
    .product-size {
      width: 100%;
      margin: 1.25rem 0 0;
    }

    .product-size {
      display: flex;
      flex-direction: column-reverse;
    }

    .product-color p,
    .product-size p {
      display: none;
    }

    .select-placeholder-text {
      font-size: 16px;
    }

    .size-box a {
      font-size: 14px;
      margin-top: 0.625rem;
    }

    .product-button {
      width: 100%;
      padding-top: 1.25rem;
    }

    .product-button .button {
      width: 41.667vw;
    }

    .about-button .button {
      border: 2px solid var(--clr-primary-1);
    }

    .product-button-detail {
      padding-top: 1.25rem;
    }

    .product-button-detail .button {
      width: 100%;
    }

    .button {
      height: 3.75rem;
      font-size: 20px;
    }

    .product-delivery {
      width: 100%;
      height: 4.375rem;
      background: var(--clr-primary-5);
      margin-top: 1.25rem;
      padding: 0.625rem 0.9375rem;
    }

    .product-delivery div {
      gap: 0.9375rem;
      padding-bottom: 0.59375rem;
    }

    .delivery-icon {
      width: 1.875rem;
      height: 1.25rem;
    }

    .product-delivery p,
    .product-delivery a {
      font-size: 14px;
    }
  }
`;

export default ProductModal;
