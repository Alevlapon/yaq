import React, { useEffect } from "react";
import styled from "styled-components";
import { UserState } from "../../../context/UserContext";
import Button from "../../../components/Button";
import ProductBox from "../../Home/components/ProductBox";

function Saved() {
  const { user, handleOpenLogin, showLogin, showSignup } = UserState();

  useEffect(() => {
    if (showLogin || showSignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showLogin, showSignup]);

  return (
    <Wrapper>
      <h1 className="title section-title">СОХРАНЕННЫЕ ТОВАРЫ</h1>

      {
        // user.auth === true ?
        !(user.saved.length === 0) ? (
          <div className="products-content">
            {user.saved.map((item) => {
              console.log(item.product);
              return (
                <div className="product">
                  <ProductBox key={item.product.id} product={item.product} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="authorized">
            <p className="section-text">
              Вы еще не добавили товары. Нажмите на сердечко при выборе товара,
              чтобы он попал сюда!
            </p>
            <div className="button">
              <a href="/products/clothes">
                <Button text="Перейти в магазин" />
              </a>
            </div>
          </div>
        )

        // 	:
        // <div className="unauthorized">
        // 	<p className='section-text'>Войдите в свой аккаунт чтобы просматривать сохранённые товары</p>
        // 	<div className='button' onClick={handleOpenLogin}>
        // 		<Button text="Войти"/>
        // 	</div>
        // </div>
      }
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.875rem 13.125vw 5rem;

  .section-title {
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 3.75rem;
  }

  .products-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
  }

  .product {
    margin: 0 1.25vw 1.25vw 0;
  }

  .box-content {
    width: 17.5vw;
    border: none;
  }

  .product:hover .box-content {
    border: 1px solid var(--clr-primary-3);
  }

  .box-header {
    width: 100%;
    height: 8.93%;
  }

  .product-sale {
    width: 28.778%;
    height: 100%;
  }

  .saved-icon {
    margin-right: 0.625vw;
  }

  .box-body {
    height: 75.894%;
    padding-top: 14.39%;
  }

  .body-text {
    padding: 0 7.197%;
  }

  .product-image {
    height: 100%;
    margin: 0 1.5625vw;
    margin-bottom: -6px;
    padding: 0;
  }

  .brand-name {
    line-height: 1.25vw;
    padding: 8.404% 0 4.202%;
  }

  .item-name {
    height: 3.125vw;
    margin-top: 8.405%;
  }

  .price-number {
    line-height: 2.5vw;
  }

  .product-btns {
    margin-top: 1.25vw;
  }

  .product-button {
    display: none;
    width: 50%;
    height: 3vw;
  }

  .product:hover .product-btns {
    display: flex;
  }

  .product:hover .product-button {
    width: 8.6875vw;
    display: block;
  }

  .green-btn:hover {
    background: var(--clr-primary-2);
  }

  .authorized {
    width: 31.25rem;
  }

  .unauthorized {
    width: 23.75rem;
  }

  .authorized,
  .unauthorized {
    margin: 6.875rem auto 9.375rem;
  }

  .authorized .button,
  .unauthorized .button {
    width: 23.75rem;
    height: 3.75rem;
    font-size: 26px;
    font-weight: 500;
    margin: 0 auto;
  }

  .section-text {
    font-size: 20px;
    font-weight: 400;
    line-height: 2.1875rem;
    text-align: center;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 1280px) {
    .authorized {
      width: 28.125rem;
    }

    .unauthorized {
      width: 21.375rem;
    }

    .authorized .button,
    .unauthorized .button {
      width: 21.375rem;
      height: 3.4375rem;
      font-size: 23px;
    }

    .section-text {
      font-size: 18px;
      line-height: 1.875rem;
    }
  }

  @media (max-width: 1100px) {
    padding: 1.875rem 9vw 9.375rem;
  }

  @media (max-width: 1024px) {
    .section-title {
      font-size: 70px;
      margin-bottom: 3.4375rem;
    }

    .authorized {
      width: 25rem;
    }

    .unauthorized {
      width: 19rem;
    }

    .authorized,
    .unauthorized {
      margin-bottom: 8.75rem;
    }

    .authorized .button,
    .unauthorized .button {
      width: 19rem;
      height: 3.125rem;
      font-size: 21px;
    }

    .section-text {
      font-size: 16px;
      line-height: 1.5625rem;
    }
  }

  @media (max-width: 992px) {
    .section-title {
      font-size: 60px;
      margin-bottom: 3.125rem;
    }

    .authorized,
    .unauthorized {
      margin-bottom: 8.125rem;
    }
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 55px;
      margin-bottom: 2.5rem;
    }

    .product-sale,
    .product-button p,
    .brand-name,
    .item-name {
      font-size: 8px;
    }

    .price-number {
      font-size: 13px;
    }

    .authorized {
      width: 20.3125rem;
    }

    .unauthorized {
      width: 15.4375rem;
    }

    .authorized,
    .unauthorized {
      margin-bottom: 6.875rem;
    }

    .authorized .button,
    .unauthorized .button {
      width: 15.4375rem;
      height: 2.8125rem;
      font-size: 18px;
    }

    .section-text {
      font-size: 14px;
      line-height: 1.25rem;
    }
  }

  @media (max-width: 700px) {
    .section-title {
      margin-bottom: 2.1875rem;
    }

    .product-sale,
    .product-button p,
    .brand-name,
    .item-name {
      font-size: 7.5px;
    }

    .price-number {
      font-size: 12px;
    }

    .authorized,
    .unauthorized {
      margin: 6.25rem auto 6.25rem;
    }
  }

  @media (max-width: 650px) {
    .section-title {
      font-size: 45px;
      margin-bottom: 1.875rem;
    }

    .product-sale,
    .product-button p,
    .brand-name,
    .item-name {
      font-size: 6.5px;
    }

    .price-number {
      font-size: 11px;
    }

    .authorized {
      width: 17.1875rem;
    }

    .unauthorized {
      width: 13.0625rem;
    }

    .authorized,
    .unauthorized {
      margin: 5.625rem auto;
    }

    .authorized .button,
    .unauthorized .button {
      width: 13.0625rem;
      height: 2.5rem;
      font-size: 16px;
    }

    .section-text {
      font-size: 12px;
      line-height: 1.25rem;
    }
  }

  @media (max-width: 530px) {
    .section-title {
      font-size: 40px;
      margin-bottom: 1.5625rem;
    }

    .product-sale,
    .product-button p,
    .brand-name,
    .item-name {
      font-size: 5.25px;
    }

    .price-number {
      font-size: 10px;
    }

    .authorized {
      width: 15.625rem;
    }

    .unauthorized {
      width: 11.875rem;
    }

    .authorized,
    .unauthorized {
      margin: 5rem auto;
    }

    .authorized .button,
    .unauthorized .button {
      width: 11.875rem;
      height: 2.1875rem;
      font-size: 14px;
    }

    .section-text {
      font-size: 10px;
      line-height: 1.125rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
    background-color: var(--clr-primary-6);
    padding-bottom: 5.625rem;

    .section-title {
      font-size: 28px;
      line-height: 3.125rem;
      background-color: var(--clr-white);
      margin: 0;
      padding: 1.25rem 5.5556vw;
    }

    .products-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      margin: 1.875rem 5.5556vw;
    }

    .box-content {
      width: 43.056vw;
      height: 66.667vw;
      border: 1px solid var(--clr-white);
      border-radius: 7px;
    }

    .box-header {
      top: 2.778vw;
      height: 5.556vw;
    }

    .product-sale {
      width: 13.889vw;
      font-size: 12px;
      padding: 0;
    }

    .saved-icon {
      width: 4.167vw;
      margin-right: 2.5vw;
    }

    .box-body {
      height: 100%;
      padding-top: 2.5vw;
    }

    .body-text {
      padding: 0 1.944vw 0 2.222vw;
    }

    .product-image {
      width: 33.333vw;
      height: 36.111vw;
      margin: 0 2.778vw;
    }

    .brand-name {
      display: none;
    }

    .item-name {
      height: 11.111vw;
      font-size: 13px;
      margin-top: 2.778vw;
      padding-bottom: 0.833vw;
    }

    .price-number {
      position: relative;
      font-size: 18px;
      line-height: 1.25rem;
      padding-top: 1.944vw;
    }

    .price-number:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0;
      background: var(--clr-primary-3);
    }

    .product-button {
      display: none;
    }

    .authorized,
    .unauthorized {
      width: 88.889vw;
      margin: 6.875rem 5.5556vw 16.25rem;
    }

    .authorized .button,
    .unauthorized .button {
      width: 100%;
      height: 3.125rem;
      font-size: 20px;
    }

    .section-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.875rem;
    }
  }

  @media (max-width: 420px) {
    .item-name {
      font-size: 12px;
    }

    .price-number {
      font-size: 16px;
    }
  }

  @media (max-width: 380px) {
    .price-number {
      font-size: 14px;
    }
  }
`;

export default Saved;
