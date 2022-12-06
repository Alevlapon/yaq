import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/whiteArrow.svg";

function FooterShopMenu() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <ul
      className={
        isActive ? "footer-menu footer-close" : "footer-menu footer-open"
      }
    >
      <div className="footer-header">
        <h4 className="footer-title title">МАГАЗИН</h4>
        <img
          src={arrow}
          alt="open arrow"
          className="icon-arrow"
          onClick={handleToggle}
        />
      </div>
      <li className="footer-item">
        <Link to="/" className="footer-link">
          Главная
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/products/clothes" className="footer-link">
          Одежда
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/products/clothes/shoes" className="footer-link">
          Обувь
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/products/equipment" className="footer-link">
          Снаряжение
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/products/accessories" className="footer-link">
          Аксессуары
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/products/run" className="footer-link">
          Бег
        </Link>
      </li>
    </ul>
  );
}

export default FooterShopMenu;
