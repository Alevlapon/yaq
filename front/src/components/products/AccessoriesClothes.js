import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function AccessoriesClothes() {
  return (
    <div>
      <li className="dropdown-header">
        <NavLink
          activeStyle={{ textDecoration: "underline" }}
          to="/products/accessories"
          className="dropdown-title weighted"
        >
          Аксессуары
        </NavLink>
      </li>
    </div>
  );
}

export default AccessoriesClothes;
