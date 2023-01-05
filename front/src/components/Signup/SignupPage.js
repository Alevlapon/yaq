import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../context/UserContext";
import Button from "../Button";
import Input from "../Input";
import eyeDisabled from "../../assets/grey-eye.svg";
import eyeActive from "../../assets/black-eye.svg";
import Error from "../../pages/ErrorPage/screen/ErrorPage";
import { signup } from "./../../http/userAPI";

function Signup() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);

  const { errorMessage, empty, Signup } = UserState();

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const proofDetails = Signup(details);
    if (proofDetails) {
      const data = await signup(
        details.name,
        details.phone,
        details.email,
        details.password
      );
      if (data) {
        dispatch({ type: "SIGNUP", payload: data });
        window.location.href = "/personal";
      }
      // });
    }
  };

  return window.screen.width <= 480 ? (
    <Wrapper>
      <h1 className="title section-title">РЕГИСТРАЦИЯ</h1>

      <div className="form-container">
        {errorMessage !== "" && empty === false ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          ""
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-label">
              <label htmlFor="text">ФИО</label>
              {details.name === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-input">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
                className={
                  errorMessage !== "" ? "error-border" : "default-border"
                }
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="number">Телефон</label>
              {details.phone === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                errorMessage !== "" ? "error-border" : "default-border"
              }
            >
              <Input
                type="text"
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
                name="phone"
                id="phone"
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
                value={details.phone}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="email">Email</label>
              {details.email === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-input">
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                className={
                  errorMessage !== "" || details.email.includes("@")
                    ? "error-border"
                    : "dafault-border"
                }
              />
            </div>
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
            <div className="form-input">
              <input
                type={showPassword ? "text" : "password"}
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
              <img
                src={showPassword ? eyeActive : eyeDisabled}
                alt="show button"
                className="button show-button"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="passwordConf">Подтверждение пароля</label>
              {details.passwordConf === "" && empty === true ? (
                <div className="error-message">*</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-input">
              <input
                type={showPasswordConf ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, passwordConf: e.target.value })
                }
                value={details.passwordConf}
                className={
                  errorMessage !== "" ? "error-border" : "default-border"
                }
              />
              <img
                src={showPasswordConf ? eyeActive : eyeDisabled}
                alt="show button"
                className="button show-button"
                onClick={() => setShowPasswordConf(!showPasswordConf)}
              />
            </div>
          </div>

          <div className="form-footer">
            <Button text={"Зарегистрироваться"} />
            <p>
              Регистрируясь на сайте вы соглашаетесь с{" "}
              <a href="/terms_of_use">пользовательским соглашением</a>
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

  .form-input {
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .form-group .input-placeholder-text,
  .form-input input {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    padding: 0.78125rem 1.25rem;
    ::placeholder {
      color: var(--clr-black);
    }
  }

  .show-button {
    position: absolute;
    padding-right: 0.6875rem;
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

  .form-footer p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5655rem;
    margin-top: 1.25rem;
  }

  .form-footer a {
    text-decoration: underline;
  }
`;

export default Signup;
