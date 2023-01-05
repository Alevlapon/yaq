import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../../context/UserContext";
import Error from "../../ErrorPage/screen/ErrorPage";
import PersonalInformation from "../component/PersonalInformation";
import ProductCreate from "../component/ProductCreate";
import History from "../component/History";
import ChangePassword from "../component/ChangePassword";
import { check } from "../../../http/userAPI";
import { useDispatch, useSelector } from "react-redux";

function Personal() {
  const { Logout } = UserState();
  const state = useSelector(({ user }) => {
    return {
      user: user.user,
      isAuth: user.isAuth,
    };
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const [option, setOption] = useState(5);

  const handleChangeOption = (event) => {
    setOption(event.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    history.push("/products/clothes");
  };

  return state.isAuth === true ? (
    <Wrapper>
      <div className="section-header">
        <h1 className="title section-title">ЛИЧНЫЙ КАБИНЕТ</h1>
        <h3 className="title section-subtitle">
          Здравствуйте, {state.user?.name}
        </h3>
      </div>

      <div className="section-select">
        {state.user.role === "USER" ? (
          <>
            <p
              id="1"
              className={
                option == 1 ? "section-option active" : "section-option"
              }
              onClick={handleChangeOption}
            >
              Личная информация
            </p>
            <p
              id="2"
              className={
                option == 2 ? "section-option active" : "section-option"
              }
              onClick={handleChangeOption}
            >
              История покупок
            </p>
            <p
              id="3"
              className={
                option == 3 ? "section-option active" : "section-option"
              }
              onClick={handleChangeOption}
            >
              Сменить пароль
            </p>
            <p
              id="4"
              className={
                option == 4 ? "section-option active" : "section-option"
              }
              onClick={handleSubmit}
            >
              Выход
            </p>
          </>
        ) : (
          <>
            {" "}
            <p
              id="5"
              className={
                option == 5 ? "section-option active" : "section-option"
              }
              onClick={handleChangeOption}
            >
              Загрузка товаров
            </p>
            <p
              id="3"
              className={
                option == 3 ? "section-option active" : "section-option"
              }
              onClick={handleChangeOption}
            >
              Сменить пароль
            </p>
            <p
              id="4"
              className={
                option == 4 ? "section-option active" : "section-option"
              }
              onClick={handleSubmit}
            >
              Выход
            </p>
          </>
        )}
      </div>

      <div className="section-body">
        {option == 1 ? <PersonalInformation /> : <div></div>}
        {option == 2 ? <History /> : <div></div>}
        {option == 3 ? <ChangePassword /> : <div></div>}
        {option == 5 ? <ProductCreate /> : <div></div>}
      </div>
    </Wrapper>
  ) : (
    <Error
      title={"НИЧЕГО НЕ НАЙДЕНО"}
      text={"Попробуйте сбросить фильтры или обновить страницу"}
    />
  );
}

const Wrapper = styled.nav`
  padding: 1.875rem 13.125vw 8.75rem;

  .section-title {
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 60px;
  }

  .section-select {
    position: relative;
    display: flex;
    padding-bottom: -4px;
  }

  .section-select::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: var(--clr-primary-3);
  }

  .section-option {
    position: relative;
    font-size: 20px;
    font-weight: 500;
    color: var(--clr-primary-4);
    margin-right: 57px;
    cursor: pointer;
  }

  .section-option.active::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: var(--clr-primary-2);
  }

  .active {
    color: var(--clr-black);
    padding-bottom: 21px;
    margin-bottom: -1.5px;
  }
`;

export default Personal;
