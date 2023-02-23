import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserState } from "../../context/UserContext";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CartButtons from "./CartButtons";
import Dropdown from "./Dropdown";
import toggle from "../../assets/toggle.svg";
import logo from "../../assets/logo.svg";

function Navbar() {
  const { user } = UserState();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeTop = () => {
    if (window.scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeTop);

  const handleSubmitOpen = async (ev) => {
    ev.preventDefault();
    setShow(true);
  };

  const handleSubmitClose = async (ev) => {
    ev.preventDefault();
    setShow(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setShow(!show);
  };

  const search = async (ev) => {
    ev.preventDefault();
    setShowSearchBar(!showSearchBar);
    if (window.location.pathname !== "/products/clothes") {
      history.push("production/clothes");
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <Wrapper>
      <div className="header" onMouseEnter={handleSubmitClose}>
        <Header show={showSearchBar} setShow={search} />
      </div>

      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          {showSearchBar ? null : (
            <div className="left-container">
              <img
                src={toggle}
                alt="navbar toggle"
                className={user?.auth ? "nav-toggle loged-in" : "nav-toggle"}
                onClick={handleSubmit}
              />

              <Link to="/" className="nav-logo">
                <div>
                  <img src={logo} alt="logo" />
                </div>
              </Link>

              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    ГЛАВНАЯ
                  </Link>
                </li>

                <div
                  onMouseEnter={handleSubmitOpen}
                  onMouseLeave={handleSubmitClose}
                >
                  <li className="nav-item">
                    <Link to="/products/clothes" className="nav-link">
                      ОДЕЖДА
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products/clothes/shoes" className="nav-link">
                      ОБУВЬ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products/equipment" className="nav-link">
                      СНАРЯЖЕНИЕ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products/accessories" className="nav-link">
                      АКСЕССУАРЫ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products/run" className="nav-link">
                      БЕГ
                    </Link>
                  </li>
                </div>

                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {showSearchBar ? <SearchBar /> : null}
          <CartButtons show={showSearchBar} setShow={search} />
        </div>

        {show ? (
          <Dropdown setShow={handleSubmitOpen} setHide={handleSubmitClose} />
        ) : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  max-width: 100rem;
  height: 8.125rem;

  .navbar {
    width: 100%;
    position: fixed;
    z-index: 3;
  }

  .navbar-container {
    background: var(--clr-white);
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13.125vw;
  }

  .active {
    top: 0;
  }

  .left-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav-toggle {
    display: none;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 2vw;
  }

  .nav-menu,
  .nav-menu div {
    display: flex;
    height: 100%;
  }

  .nav-item {
    display: flex;
    align-items: center;
    margin: 0 0.625vw;
  }

  .nav-link {
    font-size: 16px;
  }

  .nav-link:hover {
    color: var(--clr-primary-2);
    text-decoration: underline;
  }

  @media (max-width: 1280px) {
    .nav-link {
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    height: 6.25rem;

    .navbar-container {
      height: 3.75rem;
      padding: 0 9vw;
    }
  }

  @media (max-width: 992px) {
    .nav-link {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    height: calc(1.875rem + 6.361vw);

    .navbar-container {
      height: 6.361vw;
    }

    .nav-logo img {
      height: 4.167vw;
    }

    .nav-link {
      font-size: 1.458vw;
    }
  }

  @media (max-width: 480px) {
    height: 3.125rem;

    .header {
      display: none;
    }

    .navbar-container {
      top: 0;
      height: 3.125rem;
      padding: 0 5.5556vw;
    }

    .nav-toggle {
      display: flex;
      margin-right: 31.944vw;
    }

    .loged-in {
      margin-right: 7.5vw;
    }

    .nav-menu {
      display: none;
    }

    .nav-logo img {
      height: 1.875rem;
    }
  }
`;

export default Navbar;
