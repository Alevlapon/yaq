import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/whiteArrow.svg";

function FooterLinkMenu() {
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
        <h4 className="footer-title title">ПОЛЕЗНЫЕ ССЫЛКИ</h4>
        <img
          src={arrow}
          alt="open arrow"
          className="icon-arrow"
          onClick={handleToggle}
        />
      </div>
      <li className="footer-item">
        <Link to="/discount-system" className="footer-link">
          Дисконтная система
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/about" className="footer-link">
          О компании
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/terms-of-use" className="footer-link">
          Пользовательское соглашение
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/faq" className="footer-link">
          FAQ
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/delivery-payment" className="footer-link">
          Доставка и оплата
        </Link>
      </li>
      <li className="footer-item">
        <Link to="/return-conditions" className="footer-link">
          Условия возврата
        </Link>
      </li>
    </ul>
  );
}

export default FooterLinkMenu;
