import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function BabyClothes() {
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
          <p className="dropdown-title">Детская</p>
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
            to="/products/clothes/baby-jackets"
            className="dropdown-link"
          >
            Куртки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-vests"
            className="dropdown-link"
          >
            Жилеты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-pants"
            className="dropdown-link"
          >
            Брюки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-tshirts"
            className="dropdown-link"
          >
            Футболки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-shirts"
            className="dropdown-link"
          >
            Рубашки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-shorts"
            className="dropdown-link"
          >
            Шорты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-hoodies-sweaters"
            className="dropdown-link"
          >
            Толстовки и свитера
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default BabyClothes;
