import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../context/UserContext";
import Button from "../Button";
import Input from "../Input";
import closeButton from "../../assets/close.svg";
import eyeDisabled from "../../assets/grey-eye.svg";
import eyeActive from "../../assets/black-eye.svg";
import { signup } from "./../../http/userAPI";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  const history = useHistory();
  const pass = useRef();
  const repeatPass = useRef();
  const phoneNumber = useRef();
  const dispatch = useDispatch();

  const {
    errorMessage,
    empty,
    Signup,
    showSignup,
    handleOpenLogin,
    handleClose,
  } = UserState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const proofDetails = Signup(details);
    if (pass.current.value === repeatPass.current.value && proofDetails) {
      const data = await signup(
        details.name,
        details.phone,
        details.email,
        details.password
      );
      console.log(data);
      if (data) {
        dispatch({ type: "SIGNUP", payload: data });
        window.location.href = "/personal";
      }
      // });
    } else {
      alert("Пароли не совпадают");
    }
  };

  return showSignup ? (
    <Wrapper>
      <div className="form-container">
        <div className="form-header">
          <h2 className="title form-title">РЕГИСТРАЦИЯ</h2>

          <span className="form-login" onClick={handleOpenLogin}>
            <p>Вход</p>
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
              <label htmlFor="text">ФИО</label>
              {details.name === "" && empty === true ? (
                <div className="error-message">{errorMessage}</div>
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
                <div className="error-message">{errorMessage}</div>
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
                ref={phoneNumber}
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
                <div className="error-message">{errorMessage}</div>
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
                  details.email !== "" && empty === true
                    ? details.email.includes("@")
                      ? ""
                      : "email-error"
                    : ""
                }
              />
            </div>
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
            <div className="form-input">
              <input
                ref={pass}
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
                <div className="error-message">{errorMessage}</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-input">
              <input
                ref={repeatPass}
                type={showPasswordConf ? "text" : "password"}
                name="password"
                // id="password"
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
    padding: 3.75rem 5rem 5rem;
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

  .form-login {
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
    border: 1px solid var(--clr-black);
    padding: 12.5px 1.25rem;
    ::placeholder {
      color: var(--clr-black);
    }
  }

  .show-button {
    position: absolute;
    margin-right: 0.6875rem;
  }

  .email-error {
    border: 1px solid #fa0000;
  }

  .form-footer {
    text-align: center;
    margin-top: 1.875rem;
  }

  .form-footer .button {
    width: 16.25rem;
    height: 3.125rem;
  }

  .form-footer p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5625rem;
    margin-top: 1.25rem;
  }

  .form-footer a {
    text-decoration: underline;
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
      padding: 3.125rem 3.75rem 4.375rem;
    }

    .form-title {
      font-size: 27px;
      line-height: 2.1875rem;
    }

    .form-login {
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

    .form-input {
      height: 2.8125rem;
    }

    .form-group .input-placeholder-text,
    .form-input input {
      font-size: 14px;
      padding: 11.25px 0.9375rem;
    }

    .form-footer .button {
      width: 13.4375rem;
      height: 2.8125rem;
      font-size: 20px;
    }

    .form-footer p {
      font-size: 13px;
      line-height: 1.25rem;
    }

    .close-icon {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }

  @media (max-width: 768px) {
    .form-container {
      width: 26.25rem;
      padding: 2.8125rem 2.5rem 3.75rem;
    }

    .form-header {
      margin-bottom: 1.5625rem;
    }

    .form-title {
      font-size: 25px;
      line-height: 1.875rem;
    }

    .form-login {
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

    .form-input {
      height: 2.5rem;
    }

    .form-group .input-placeholder-text,
    .form-input input {
      font-size: 13px;
      padding: 0.59375rem 0.625rem;
    }

    .form-footer {
      margin-top: 1.5625rem;
    }

    .form-footer .button {
      width: 11.5625rem;
      height: 2.5rem;
      font-size: 18px;
    }

    .form-footer p {
      font-size: 13px;
      margin-top: 0.9375rem;
    }

    .close-icon {
      width: 0.75rem;
      height: 0.75rem;
      margin: 0.9375rem 1rem 0 0;
    }
  }
`;

export default Signup;
