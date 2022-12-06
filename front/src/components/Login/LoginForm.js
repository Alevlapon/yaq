import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../context/UserContext";
import LoginButton from "../Button";
import closeButton from "../../assets/close.svg";
import { login } from "./../../http/userAPI";
import { useDispatch } from "react-redux";

function Login() {
  const {
    errorMessage,
    empty,
    Login,
    showLogin,
    handleOpenRegistration,
    handleClose,
  } = UserState();

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

  return showLogin ? (
    <Wrapper>
      <div className="form-container">
        <div className="form-header">
          <h2 className="title form-title">ВХОД</h2>

          <span className="form-registration" onClick={handleOpenRegistration}>
            <p>Регистрация</p>
          </span>
        </div>

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
                <div className="error-message">{errorMessage}</div>
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
                <div className="error-message">{errorMessage}</div>
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
            <p className="form-reset">
              <a href="/reset-password">Забыли пароль?</a>
            </p>
            <LoginButton text={"Войти"} />
          </div>
        </form>

        <img
          src={closeButton}
          alt="close button"
          className="button close-icon"
          onClick={handleClose}
        />
      </div>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  padding: 6.25rem 0 1.25rem;
  overflow-y: auto;

  .form-container {
    position: relative;
    width: 36.25rem;
    background: var(--clr-white);
    margin: auto;
    padding: 3.75rem 5rem 6.875rem;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.875rem;
  }

  .form-title {
    font-size: 30px;
    font-weight: 500;
    line-height: 2.5rem;
  }

  .form-registration {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25rem;
    margin-top: 1.25rem;
    cursor: pointer;
  }

  .error-message {
    font-size: 18px;
    font-weight: 400;
    color: #fa0000;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
  }

  .form-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;
  }

  .form-label label,
  .form-label .error-message {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25rem;
  }

  .form-group input {
    height: 3.125rem;
    font-size: 16px;
    font-weight: 400;
    padding-left: 1.25rem;
  }

  .default-border {
    border: 1px solid var(--clr-primary-4);
  }

  .error-border {
    border: 1px solid #fa0000;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    height: 3.125rem;
    margin-top: 3.125rem;
  }

  .form-reset {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25rem;
    text-decoration: underline;
    margin-top: 0.625rem;
  }

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.0625rem;
    height: 1.0625rem;
    margin: 1.25rem 1.3125rem 0 0;
  }

  @media (max-width: 1100px) {
    padding: 5.3125rem 0 1.25rem;
  }

  @media (max-width: 1024px) {
    .form-container {
      width: 30rem;
      padding: 3.125rem 3.75rem 5.625rem;
    }

    .form-title {
      font-size: 27px;
      line-height: 2.1875rem;
    }

    .form-registration {
      font-size: 16px;
      line-height: 1.125rem;
      margin-top: 1.0625rem;
    }

    .error-message {
      font-size: 16px;
    }

    .form-label label,
    .form-label .error-message {
      font-size: 16px;
    }

    .form-group input {
      height: 2.8125rem;
      font-size: 14px;
      padding-left: 0.9375rem;
    }

    .form-footer {
      height: 2.8125rem;
    }

    .form-footer .button {
      width: 10.625rem;
      font-size: 20px;
    }

    .form-reset {
      font-size: 16px;
      margin-top: 0.5rem;
    }

    .close-icon {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  @media (max-width: 768px) {
    .form-container {
      width: 26.25rem;
      padding: 2.8125rem 2.5rem 4.6875rem;
    }

    .form-header {
      margin-bottom: 1.5625rem;
    }

    .form-title {
      font-size: 25px;
      line-height: 1.875rem;
    }

    .form-registration {
      font-size: 15px;
      line-height: 0.9375rem;
      margin-top: 0.9375rem;
    }

    .error-message {
      font-size: 15px;
    }

    .form-label label,
    .form-label .error-message {
      font-size: 15px;
    }

    .form-group {
      margin-top: 0.9375rem;
    }

    .form-group input {
      height: 2.5rem;
      font-size: 13px;
      padding-left: 0.625rem;
    }

    .form-footer {
      height: 2.5rem;
    }

    .form-footer .button {
      width: 9.6875rem;
      font-size: 18px;
    }

    .form-reset {
      font-size: 14px;
      margin-top: 0.5rem;
    }

    .close-icon {
      width: 0.75rem;
      height: 0.75rem;
      margin: 0.9375rem 1rem 0 0;
    }
  }
`;

export default Login;
