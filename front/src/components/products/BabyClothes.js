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
            Детские куртки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-vests"
            className="dropdown-link"
          >
            Детские жилеты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-pants"
            className="dropdown-link"
          >
            Детские брюки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-tshirts"
            className="dropdown-link"
          >
            Детские футболки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-shirts"
            className="dropdown-link"
          >
            Детские рубашки
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-shorts"
            className="dropdown-link"
          >
            Детские шорты
          </NavLink>
        </li>
        <li className="dropdown-item">
          <NavLink
            activeStyle={{ textDecoration: "underline" }}
            to="/products/clothes/baby-hoodies-sweaters"
            className="dropdown-link"
          >
            Детские толстовки и свитера
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default BabyClothes;
