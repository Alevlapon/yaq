import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { UserState } from "../../../context/UserContext";
import { CartState } from "../../../context/Context";
import ProductItem from "../component/ProductItem";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { getBasket } from "../../../redux/actions/basket";

function Order() {
  const { showLogin, showSignup } = UserState();

  useEffect(() => {
    if (showLogin || showSignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showLogin, showSignup]);

  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();

  const state = useSelector(({ basket }) => {
    return {
      products: basket.item.basket_products,
      amount: basket.item.amount,
    };
  });
  const [total, setTotal] = useState();

  // useEffect(() => {
  //   dispatch(getBasket());
  // }, []);

  return (
    <Wrapper>
      <h1 className="title section-title">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

      {state.products.length > 0 ? (
        <div className="section-content">
          <div className="form-content">
            <div className="form-payment form-box">
              <p className="form-text">Способ оплаты:</p>
              <Select placeholder={"Выберите способ оплаты"} />
            </div>

            <div className="form-delivery form-box">
              <p className="form-text">Способ доставки:</p>
              <Select placeholder={"Выберите способ доставки"} />
            </div>

            <div className="form-address form-box1">
              <p className="form-text">Адресная информация:</p>
              <Select placeholder={"Алматы"} />
              <div className="form-input">
                <Input placeholder={"Адрес *"} type={"email"} />
              </div>
            </div>

            <div className="form-person form-box1">
              <p className="form-text">Информация о получателе:</p>
              <div className="form-input">
                <Input placeholder={"Имя *"} type={"text"} />
              </div>
              <div className="form-input">
                <Input placeholder={"Фамилия " + "*"} type={"text"} />
              </div>
            </div>

            <div className="form-phone form-box1">
              <p className="form-text">Телефон:</p>
              <div className="form-input">
                <Input
                  placeholder={"+7 (___) ___-__-__"}
                  mask={[
                    "+",
                    "7",
                    " ",
                    "(",
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                  ]}
                />
              </div>
            </div>

            <div className="form-comment form-box">
              <p className="form-text">Ваш комментарий:</p>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Напишите, что Вы хотите добавить"
              ></textarea>
            </div>

            <a className="button-link">
              <Button text={"Подтвердить заказ"} />
            </a>

            <a href={`/products/clothes`} className="button-link">
              <Button text={"Продолжить покупки"} />
            </a>

            <p className="term-of-use">
              Подтверждая заказ вы соглашаетесь с{" "}
              <a href="/term_of_use">пользовательским соглашением</a>
            </p>
          </div>

          <div className="product-content">
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
            </div>
          </div>
        </div>
      ) : (
        <div className="section-content none">
          <p className="section-text">
            Спасибо! Ваш заказ принят!
            <br />
            Скоро мы свяжемся с Вами по телефону
          </p>

          <a href={`/products/clothes`} className="button-link">
            <Button text={"Продолжить покупки"} />
          </a>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.875rem 13.125vw 4.375rem;

  .section-title {
    font-size: 80px;
    font-weight: 500;
  }

  .section-content {
    margin-top: 3.75rem;
    display: flex;
    justify-content: space-between;
  }

  .form-content {
    width: 480px;
  }

  .form-box {
    margin-bottom: 20px;
  }

  .form-box1 {
    margin-bottom: 30px;
  }

  .form-text {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .form-input {
    margin: 20px 0 -10px;
  }

  .select-placeholder-text,
  .input-placeholder-text {
    height: 40px;
  }

  .form-phone .input-placeholder-text::placeholder {
    color: var(--clr-black);
  }

  .form-content textarea {
    width: 100%;
    height: 150px;
    font-family: "Jost";
    font-size: 16px;
    font-weight: 300;
    border: 1px solid var(--clr-primary-4);
    padding: 10px;
    ::placeholder {
      color: var(--clr-primary-4);
    }
  }

  .button-container {
    margin: 40px 0 20px;
  }

  .button-text {
    font-size: 26px;
    font-weight: 400;
  }

  .term-of-use {
    font-size: 14px;
    font-weight: 400;
  }

  .term-of-use a {
    text-decoration: underline;
  }

  .product-content {
    width: 600px;
  }

  .summary {
    position: relative;
    margin-top: 50px;
    padding-top: 40px;
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

  .summary .product-total-price {
    font-size: 26px;
    font-weight: 700;
  }

  .summary span {
    color: var(--clr-primary-2);
  }

  .section-content.none {
    flex-direction: column;
    width: 380px;
    margin: 110px auto 160px;
  }

  .none .section-text {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
  }

  .none .button-container {
    margin: 0;
  }
`;

export default Order;
