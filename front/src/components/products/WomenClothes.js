import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function WomenClothes() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <ul
        className={
          isActive
            ? "dropdown-menu dropdown-close"
            : "dropdown-menu dropdown-open"
        }
      >
        <li className="dropdown-header">
          <p className="dropdown-title">Женская</p>
          <img
            src={arrow}
            alt="open arrow"
            className="dropdown-icon"
            onClick={handleToggle}
          />
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-jackets"
            className="dropdown-link"
          >
            Куртки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-vests"
            className="dropdown-link"
          >
            Жилеты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-pants"
            className="dropdown-link"
          >
            Брюки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-tshirts"
            className="dropdown-link"
          >
            Футболки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-shirts"
            className="dropdown-link"
          >
            Рубашки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-shorts"
            className="dropdown-link"
          >
            Шорты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/women-hoodies-sweaters"
            className="dropdown-link"
          >
            Толстовки и свитера
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default WomenClothes;
