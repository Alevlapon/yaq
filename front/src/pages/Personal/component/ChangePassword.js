import React, { useState } from "react";
import styled from "styled-components";
import { UserState } from "../../../context/UserContext";
import Button from "../../../components/Button";
import eyeDisabled from "../../../assets/grey-eye.svg";
import eyeActive from "../../../assets/black-eye.svg";

function ChangePassword() {
  const { errorMessage, ChangePassword } = UserState();

  const [details, setDetails] = useState({
    password: "",
    newPassword: "",
    newPasswordConf: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConf, setShowNewPasswordConf] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const proofDetails = ChangePassword(details);
    if (proofDetails) {
      //   const data = await check(details.password, details.newPassword);
    }
  };

  return (
    <Wrapper>
      {errorMessage !== "" ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-label">
            <label htmlFor="password">Действующий пароль</label>
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
            <label htmlFor="password">Новый пароль</label>
          </div>
          <div className="form-input">
            <input
              type={showNewPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, newPassword: e.target.value })
              }
              value={details.newPassword}
            />
            <img
              src={showNewPassword ? eyeActive : eyeDisabled}
              alt="show button"
              className="button show-button"
              onClick={() => setShowNewPassword(!showNewPassword)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-label">
            <label htmlFor="password">Повторите новый пароль</label>
          </div>
          <div className="form-input">
            <input
              type={showNewPasswordConf ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, newPasswordConf: e.target.value })
              }
              value={details.newPasswordConf}
            />
            <img
              src={showNewPasswordConf ? eyeActive : eyeDisabled}
              alt="show button"
              className="button show-button"
              onClick={() => setShowNewPasswordConf(!showNewPasswordConf)}
            />
          </div>
        </div>

        <div className="form-button">
          <Button text={"Сохранить"} />
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 420px;
  margin: 0 auto;
  padding-top: 70px;

  .form-label {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }

  .form-input {
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.25rem;
  }

  input {
    width: 26.25vw;
    height: 3.125rem;
    font-size: 16px;
    border: 1px solid var(--clr-primary-4);
    padding-left: 1.25rem;
  }

  .show-button {
    position: absolute;
    padding-right: 0.6875rem;
  }

  .form-button {
    text-align: center;
  }

  .form-button .button {
    height: 3.125rem;
    width: 13.75vw;
    margin-top: 0.625rem;
  }
`;

export default ChangePassword;
