import React, { useEffect } from "react";
import styled from "styled-components";
import { UserState } from "../../../context/UserContext";

function ReturnConditions() {
  const { showLogin, showSignup } = UserState();

  useEffect(() => {
    if (showLogin || showSignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showLogin, showSignup]);

  return (
    <Wrapper>
      <h1 className="title section-title">УСЛОВИЯ ВОЗВРАТА</h1>

      <div className="section-content">
        <p className="section-mini-header">ВОЗВРАТ ТОВАРА</p>
        <br />

        <p className="section-text">
          Возврат приобретенных в магазине «YAQ» товаров осуществляется в
          розничном магазине по адресу г. Астана, проспект Кабанбай батыра, 49а
          ежедневно в рабочие часы магазина.
        </p>
        <br />

        <p className="section-mini-header">СРОК ОБМЕНА И ВОЗВРАТА ТОВАРА</p>
        <br />

        <p className="section-text">
          Срок возврата товара надлежащего качества составляет 14 дней с момента
          приобретения.
        </p>
        <br />
        <p className="section-text">
          Обмен и возврат товара будут произведены, если указанный товар не был
          в использовании, сохранены его товарный вид и свойства, фабричные
          ярлыки, товарные или кассовые чеки.
        </p>
        <br />

        <p className="section-mini-header">
          ВОЗВРАТ ЗАКАЗОВ, ДОСТАВЛЕННЫХ ПО АСТАНЕ КУРЬЕРОМ
        </p>
        <br />

        <p className="section-text">
          Покупатель может самостоятельно вернуть не подошедший товар.
        </p>
        <br />

        <p className="section-text">
          Для возврата заказа, оплаченного наличными средствами, необходимо
          наличие:
        </p>
        <ul>
          <li className="section-text">- Удостоверения личности;</li>
          <li className="section-text">- Фискальный чек;</li>
        </ul>
        <br />

        <p className="section-mini-header">
          ДЛЯ ВОЗВРАТА ЗАКАЗА, ОПЛАЧЕННОГО ПЛАТЕЖНОЙ КАРТОЙ ЧЕРЕЗ ПОС-ТЕРМИНАЛ
          ИЛИ СЕРВИС ОНЛАЙН-БАНКИНГА НЕОБХОДИМО ПРИ СЕБЕ ИМЕТЬ:
        </p>
        <br />

        <ul>
          <li className="section-text">- Удостоверения личности;</li>
          <li className="section-text">- Фискальный чек;</li>

          <li className="section-text">
            - Возврат осуществляется на платежную карту, откуда была произведена
            оплата, через POS-терминал.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.875rem 13.125vw 8.75rem;

  .section-title {
    font-size: 80px;
    font-weight: 500;
  }

  .section-content {
    width: 74.576%;
    margin-top: 2.5rem;
  }

  .section-mini-header {
    font-size: 18px;
    font-weight: 500;
  }

  .section-text {
    font-size: 18px;
    font-weight: 300;
  }

  @media (max-width: 1100px) {
    padding: 1.875rem 9vw 8.75rem;
  }

  @media (max-width: 1024px) {
    .section-title {
      font-size: 70px;
    }
  }

  @media (max-width: 992px) {
    .section-title {
      font-size: 60px;
    }

    .section-mini-header,
    .section-text {
      font-size: 17px;
    }
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 55px;
    }

    .section-mini-header,
    .section-text {
      font-size: 16px;
    }
  }

  @media (max-width: 650px) {
    .section-title {
      font-size: 45px;
    }

    .section-mini-header,
    .section-text {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
    background-color: var(--clr-primary-6);

    .section-title {
      font-size: 28px;
      line-height: 3.125rem;
      background-color: var(--clr-white);
      padding: 1.25rem 5.5556vw;
    }

    .section-content {
      width: 100%;
      line-height: 30px;
      padding: 0 5.5556vw 8.125rem;
      margin-top: 1.875rem;
    }

    .section-mini-header,
    .section-text {
      font-size: 16px;
    }
  }
`;

export default ReturnConditions;
