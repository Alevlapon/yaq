import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../context/UserContext";
import Button from "../Button";
import Error from "../../pages/ErrorPage/screen/ErrorPage";
import { login } from "./../../http/userAPI";
import { useDispatch } from "react-redux";

function Login() {
  const { errorMessage, empty, Login } = UserState();

  const [details, setDetails] = useState({ email: "", password: "" });

  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const proofLogin = Login(details);
    if (proofLogin) {
      const data = await login(details.email, details.password);
      console.log(data);
      if (data) {
        dispatch({ type: "LOGIN", payload: data });
        window.location.href = "/personal";
      }
    }
  };

  return window.screen.width <= 480 ? (
    <Wrapper>
      <h1 className="title section-title">ВХОД</h1>

      <div className="form-container">
        {errorMessage !== "" && empty === false ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          ""
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-label">
              <label htmlFor="email">Email</label>
              {details.email === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              className={
                errorMessage !== "" ||
                (details.email !== "" && !details.email.includes("@"))
                  ? "error-border"
                  : "dafault-border"
              }
            />
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="password">Пароль</label>
              {details.password === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              className={
                errorMessage !== "" ? "error-border" : "default-border"
              }
            />
          </div>

          <div className="form-footer">
            <Button text={"Войти"} />
            <p className="form-registration">
              <a href="/signup">Регистрация</a>
            </p>
            <p className="form-reset">
              <a href="/reset-password">Забыли пароль?</a>
            </p>
          </div>
        </form>
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
  background-color: var(--clr-primary-6);
  padding-bottom: 6.875rem;

  .section-title {
    font-size: 28px;
    line-height: 3.125rem;
    background-color: var(--clr-white);
    padding: 1.25rem 5.5556vw;
  }

  .form-container {
    width: 20rem;
    background: var(--clr-white);
    margin: 1.25rem auto 0;
    padding: 1.25rem;
  }

  .error-message {
    font-size: 16px;
    font-weight: 400;
    color: #fa0000;
    margin-bottom: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
  }

  .form-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;
  }

  .form-label label,
  .form-label .error-message {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 0;
  }

  .form-group input {
    height: 3.125rem;
    font-size: 16px;
    font-weight: 400;
    padding-left: 1.25rem;
  }

  .default-border {
    border: 1px solid var(--clr-primary-3);
  }

  .error-border {
    border: 1px solid #fa0000;
  }

  .form-footer {
    text-align: center;
    margin-top: 1.875rem;
  }

  .form-footer .button {
    width: 13.75rem;
    height: 3.125rem;
  }

  .form-registration,
  .form-reset {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.875rem;
  }

  .form-registration {
    margin-top: 1.25rem;
  }

  .form-reset {
    text-decoration: underline;
    margin-top: 0.625rem;
  }
`;

export default Login;
