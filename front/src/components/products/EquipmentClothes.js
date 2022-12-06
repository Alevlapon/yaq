import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function EquipmentClothes() {
  return (
    <div>
      <li className="dropdown-header">
        <NavLink
          activeStyle={{ textDecoration: "underline" }}
          to="/products/equipment"
          className="dropdown-title weighted"
        >
          Снаряжение
        </NavLink>
      </li>
    </div>
  );
}

export default EquipmentClothes;
