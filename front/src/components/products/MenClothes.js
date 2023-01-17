import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function MenClothes() {
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
          <p className="dropdown-title">Мужская</p>
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
            to="/products/clothes/men-jackets"
            className="dropdown-link"
          >
            Куртки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-vests"
            className="dropdown-link"
          >
            Жилеты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-pants"
            className="dropdown-link"
          >
            Брюки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-tshirts"
            className="dropdown-link"
          >
            Футболки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-shirts"
            className="dropdown-link"
          >
            Рубашки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-shorts"
            className="dropdown-link"
          >
            Шорты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/men-hoodies-sweaters"
            className="dropdown-link"
          >
            Толстовки и свитера
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MenClothes;
